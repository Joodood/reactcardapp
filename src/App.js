import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import Container from "./container";
import { Item } from "./sortable_item";
import "./styles.css";
import "./sortablebackupcss.css";

// const wrapperStyle = {
//   display: "flex",
//   flexDirection: "row"
// };

const mainstyle = {
  display: "block",
  top: "100px",
  left: "140px",
  position: "relative",
  minHeight: "100vh",
  outline: "none"
}
const topspacestyle = {
  position: 'relative',
  marginTop: '50px',
paddingBottom: '250px',
display: 'block',
}
// const allstacksstyle = {
//   display: 'inline-grid',
//   boxSizing: 'border-box',
// padding: '20px',
// gridAutoFlow: 'column',
//
// }


const defaultAnnouncements = {
  onDragStart(id) {
    console.log(`Picked up draggable item ${id}.`);
  },
  onDragOver(id, overId) {
    if (overId) {
      console.log(
          `Draggable item ${id} was moved over droppable area ${overId}.`
      );
      return;
    }

    console.log(`Draggable item ${id} is no longer over a droppable area.`);
  },
  onDragEnd(id, overId) {
    if (overId) {
      console.log(
          `Draggable item ${id} was dropped over droppable area ${overId}`
      );
      return;
    }

    console.log(`Draggable item ${id} was dropped.`);
  },
  onDragCancel(id) {
    console.log(`Dragging was cancelled. Draggable item ${id} was dropped.`);
  }
};

  export default function App() {
    // const containers = {
    //   topic: ["Javascript", "Fields", "Social Patterns", "card system", "Hathway Brothers"],
    //   unassimilated: ["its not the program that make the computer good, its the network, the tangibility", "If it isnt inherent in drum, then the pulse without the drum will show why not (where it its/would be)", "what would be more valuable for the bands' continuation: me playing drums or me writing?"],
    //   program: ["hang up everything until guest is gone", "create new pencil box", "create new schedule"],
    //   critical: ["The card system has nothing to do with the Hathway Brothers", "Programming in html and css dosen't teach you lower level", "get up and pray", "Have program that says read from prayer topic and have a topic of prayers"],
    //   tough: ["writing things down later is key to continuing a thought trails without stopping yourself", "start a program where you can start your day off with finding beauty", "It has everything not to do with playing what is, but before that"],
    //   junk: ["ask for cassette tap", "look for whiteout", "fascinated by the posibility of a logic that could extend drumming precision to solve problems of songwriting"]
    // };
    // const [items, setItems] = useState({containers});
    //
    const [items, setItems] = useState ({
        topic: ["Javascript", "Fields", "Social Patterns", "card system", "Hathway Brothers"],
        unassimilated: ["its not the program that make the computer good, its the network, the tangibility", "If it isnt inherent in drum, then the pulse without the drum will show why not (where it its/would be)", "what would be more valuable for the bands' continuation: me playing drums or me writing?"],
        program: ["hang up everything until you use ideas to save or get ideas to save", "hang up everything until guest is gone", "create new pencil box", "create new schedule"],
        critical: ["The card system has nothing to do with the Hathway Brothers", "Programming in html and css dosen't teach you lower level", "get up and pray", "Have program that says read from prayer topic and have a topic of prayers"],
        tough: ["writing things down later is key to continuing a thought trails without stopping yourself", "start a program where you can start your day off with finding beauty", "It has everything not to do with playing what is, but before that"],
        junk: ["ask for cassette tap", "look for whiteout", "fascinated by the posibility of a logic that could extend drumming precision to solve problems of songwriting"]
    });
   
    const [activeId, setActiveId] = useState();
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates
        })
    );
    return (
        // <div style = {wrapperStyle}>
        // <div>
        <main tabIndex="-1" style = {mainstyle}>
          <div className="topspace" style = {topspacestyle}>
            {/*<div className = "allstacks" style = {allstacksstyle}>*/}
          <DndContext
              announcements={defaultAnnouncements}
              sensors={sensors}
              collisionDetection={closestCorners}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
            >
            <Container id="topic" items={items.topic} />
            <Container id="unassimilated" items={items.unassimilated} />
            <Container id="program" items={items.program} />
            <Container id="critical" items={items.critical} />
            <Container id="tough" items={items.tough} />
            <Container id="junk" items={items.junk} />
            <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>

          </DndContext>
            {/*</div>*/}
          </div>
        </main>
    );
    function findContainer(id) {
      if (id in items) {
        return id;
      }

      return Object.keys(items).find((key) => items[key].includes(id));
    }

    function handleDragStart(event) {
      const { active } = event;
      const { id } = active;

      setActiveId(id);
    }

    function handleDragOver(event) {
      const { active, over, draggingRect } = event;
      const { id } = active;
      const { id: overId } = over;

      // Find the containers
      const activeContainer = findContainer(id);
      const overContainer = findContainer(overId);

      if (
          !activeContainer ||
          !overContainer ||
          activeContainer === overContainer
      ) {
        return;
      }

      setItems((prev) => {
        const activeItems = prev[activeContainer];
        const overItems = prev[overContainer];

        // Find the indexes for the items
        const activeIndex = activeItems.indexOf(id);

        const overIndex = overItems.indexOf(overId);

        let newIndex;
        if (overId in prev) {
          // We're at the root droppable of a container
          newIndex = overItems.length + 1;
        } else {
          const isBelowLastItem =
              over &&
              overIndex === overItems.length - 1;
              // overIndex === overItems.length - 1 &&
              // draggingRect.offsetTop > over.rect.offsetTop + over.rect.height;

          const modifier = isBelowLastItem ? 1 : 0;

          newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
        }

        return {
          ...prev,
          [activeContainer]: [
            ...prev[activeContainer].filter((item) => item !== active.id)
          ],
          [overContainer]: [
            ...prev[overContainer].slice(0, newIndex),
            items[activeContainer][activeIndex],
            ...prev[overContainer].slice(newIndex, prev[overContainer].length)
          ]
        };
      });
    }

    function handleDragEnd(event) {
      const { active, over } = event;
      const { id } = active;
      const { id: overId } = over;

      const activeContainer = findContainer(id);
      const overContainer = findContainer(overId);

      if (
          !activeContainer ||
          !overContainer ||
          activeContainer !== overContainer
      ) {
        return;
      }

      const activeIndex = items[activeContainer].indexOf(active.id);
      const overIndex = items[overContainer].indexOf(overId);

      if (activeIndex !== overIndex) {
        setItems((items) => ({
          ...items,
          [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
        }));
      }

      setActiveId(null);
    }

  }




// export default App;
