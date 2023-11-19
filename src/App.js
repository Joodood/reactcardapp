import logo from './logo.svg';
// import "./simple.css";
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
import Topic from "./Topic";
import "./styles.css";
import "./sortablebackupcss.css";
// import './loop';
import 'boxicons';

import "./loop.css";
import 'dnd-kit-sortable-tree';

// import './simple.css';

import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
  TreeItems,
} from 'dnd-kit-sortable-tree';
import {Minimal} from "./loop";


import jacksparrow from "./Pirates of the Caribbean - He_s a Pirate (Extended).mp3";
import {map} from "react-bootstrap/ElementChildren";


const mainstyle = {
  display: "block",
  top: '60px',
  // top: "100px",
  // left: "140px",
  // top: "80px",
  left: "100px",

  position: "relative",
  minHeight: "100vh",
  outline: "none"
}
const topspacestyle = {
  position: 'relative',
  // marginTop: '50px',
  marginTop: '25px',
// paddingBottom: '250px',
  paddingBottom: '150px',
display: 'block',
}
const allstacksstyle = {
  display: 'inline-grid',
  boxSizing: 'border-box',
padding: '20px',
gridAutoFlow: 'column',


}







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



    const sound = "./Pirates of the Caribbean - He_s a Pirate (Extended).mp3";
    // const pirates = require("./Pirates of the Caribbean - He_s a Pirate (Extended).mp3");
    // const sound = <audio controls>
    //   <source src = jacksparrow/>
    // </audio>
    // const sound = new Audio(jacksparrow).play();
    // const sound = () => <audio src = "Pirates of the Caribbean - He_s a Pirate (Extended).mp3" autoPlay />
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
      topic: [["Javascript"], ["Fields"], ["Social Patterns"], ["card system", "valleyheromyfavorite"], ["Hathway Brothers", "Hathway Brothers Website"], sound],
        unassimilated: ["its not the program that make the computer good, its the network, the tangibility", "If it isnt inherent in drum, then the pulse without the drum will show why not (where it its/would be)", "what would be more valuable for the bands' continuation: me playing drums or me writing?"],
        program: ["integrate mysql now", "use navbar to add add topic and add card a tags","hang up everything until you use ideas to save or get ideas to save", "hang up everything until guest is gone", "create new pencil box", "create new schedule"],
        critical: ["The card system has nothing to do with the Hathway Brothers", ["Programming in html and css dosen't teach you lower level", "why do we have to perform to be performers", "why cant mushrooms be normal m oreso than beer", "the hathway brothers site needs no more wix"], "get up and pray", "Have program that says read from prayer topic and have a topic of prayers"],
        tough: ["writing things down later is key to continuing a thought trails without stopping yourself", "start a program where you can start your day off with finding beauty", "It has everything not to do with playing what is, but before that"],
        junk: ["ask for cassette tap", "look for whiteout", "fascinated by the posibility of a logic that could extend drumming precision to solve problems of songwriting"]
    });
    // console.log("penis");
    // console.log(items);
    const mainArr = [];
    const [activeId, setActiveId] = useState();
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates
        })
    );
    console.table(items);

  // console.log(items.length);

    // function isWithin() {
    //
    //   for (let i = 0; i < Object.keys(items).length; i++) {
    //     // var innerArrayLength = items[i].length;
    //     var totalitems = Object.keys(items);
    //     console.log(totalitems);
    //     console.log("items: ", totalitems);
    //     if(Array.isArray(items[i])) {
    //       console.log(items[i])
    //       return items[i];
    //     }
    //     // for (let j = 0; j < innerArrayLength; j ++ ) {
    //     //   console.log('[' + i + "," + j + '] = ' + items.topic[i][j])
    //     // }
    //   }
    // }
    var i = 0;
    function isWWIITTHHIN(itemNonTop, i) {
      for (let i = 0; i < itemNonTop.length; i++) {
        var innerArrayLength = itemNonTop[i].length;
        // console.log("items.topic: ", items.topic[i]);
        if(Array.isArray(itemNonTop[i])) {
          console.log(itemNonTop[i])
          console.log("i :", i);
          // console.log("index of: ", Array.indexOf(itemNonTop));
          // console.log("position:", [itemNonTop[i]]);
          return [itemNonTop[i], i];
        }
        // return false;
        // for (let j = 0; j < innerArrayLength; j ++ ) {
        //   console.log('[' + i + "," + j + '] = ' + items.topic[i][j])
        // }
      }
      return false;
    }
    // console.log("topical topics: ", isWWIITTHHIN(items.topic, i));
    const inTopic = isWWIITTHHIN(items.topic);
    console.log("inTopic : ", inTopic);

    const inUnassimilated = isWWIITTHHIN(items.unassimilated);
    console.log("inUnassimilated : ", inUnassimilated);

    // console.log("unassimilated category topic: ", isWWIITTHHIN(items.unassimilated));
    // const Inunassimilated = isWWIITTHHIN(items.unassimilated);
    const inCritical = isWWIITTHHIN(items.critical);
    console.log("inCritical: ", isWWIITTHHIN(inCritical));
    // const Incritical = isWWIITTHHIN(items.critical);
    const inProgram = isWWIITTHHIN(items.program);
    console.log("inProgram ", isWWIITTHHIN(inProgram));

    const inTough= isWWIITTHHIN(items.tough)
    // const Inprogram = isWWIITTHHIN(items.program);
    console.log("inTough: ", isWWIITTHHIN(inTough));

    const inJunk = isWWIITTHHIN(items.junk);
    console.log(" inJunk: ", isWWIITTHHIN( inJunk));
    // const Injunk = isWWIITTHHIN(items.junk);


    // function isWithin() {
    // for (let i = 0; i < items.topic.length; i++) {
    //   var innerArrayLength = items.topic[i].length;
    //   // console.log("items.topic: ", items.topic[i]);
    //   if(Array.isArray(items.topic[i])) {
    //     console.log(items.topic[i])
    //     return items.topic[i];
    //   }
    //   // for (let j = 0; j < innerArrayLength; j ++ ) {
    //   //   console.log('[' + i + "," + j + '] = ' + items.topic[i][j])
    //   // }
    //   }
    // }
    // const topicsWithin = isWithin();
    // console.log("topics within topic: ", topicsWithin);
    // console.log("topics within topic: ", topicsWithin);


    return (



        <main tabIndex="-1" style = {mainstyle}>
          <a className="brand" id="newcard-button">

            <i className='bx bx-plus'></i>

          </a>
          {/*{<SortableTree items={{'jim': 15, 'kev': 11, 'lin': 19}} onItemsChanged={reorder} TreeItemComponent={<Container id="topic" items={items.topic}>}}} />}*/}
    <div className="topspace" style = {topspacestyle}>

      {/*<a className="brand" id="newcard-button">*/}

      {/*  <i className='bx bx-plus'></i>*/}

      {/*</a>*/}
            <div className = "allstacks" style = {allstacksstyle}>
            {/*<SortableTree items={{'jim': 15, 'kev': 11, 'lin': 19}} onItemsChanged={reorder} TreeItemComponent={<Container id="topic" items={items.topic}>}} />}*/}
          <DndContext
              announcements={defaultAnnouncements}
              sensors={sensors}
              collisionDetection={closestCorners}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}>
            {/*<Topic id = "topic" items={items.topic} isWithin = {inTopic}/>*/}
            <Container id="topic" items={items.topic} isWithin = {inTopic}/>
            <Container id="unassimilated" items={items.unassimilated} isWithin = {inUnassimilated}  />
            <Container id="program" items={items.program} isWithin = {inProgram} />
            <Container id="critical" items={items.critical} isWithin = {inCritical}/>
            <Container id = "tough" items={items.tough} isWithin = {inTough} />
            <Container id="junk" items={items.junk} isWithin = {inJunk}/>
            <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
          </DndContext>
            </div>
          </div>
        </main>

//for i in items if i does not match the name of the object isWithin than continue


            );


    function dragstartprint(charlie){
      console.log("Active id CHARRRLIE: ", charlie);
      // console.log("id fCHARRRLIE: , ",id);
      console.log("Anna: ", charlie);
    }

    function findContainer(id) {

      // if(id === 'topic' && )

      console.log("Threenuse");
      if (id in items) {
        return id;
      }
        // const foundcontainer = Object.keys(items).find((key) => items[key].includes(id))
      // return Object.keys(items).find((key) => items[key].includes(id));
      // console.log(foundcontainer);
      // console.log(typeof(foundcontainer));
      // return foundcontainer;
      // console.log(id);
     // Object.keys(items).find((key) => items[key].includes(id)));
      console.log(Object.keys(items).find((key) => items[key].includes(id)));

      return Object.keys(items).find((key) => items[key].includes(id));
      // console.log(Object.keys(items).find((key) => items[key].includes(id)));
    }

    //
    // function dragstartprint(charlie){
    // console.log("Active id CHARRRLIE: ", charlie);
    // // console.log("id fCHARRRLIE: , ",id);
    // }

    function handleDragStart(event) {
      // console.log(event);
      const { active } = event;
      const { id } = active;

      setActiveId(id);
      dragstartprint(active.id);
    }

    function handleDragOver(event) {
      // console.log(event);
      const { active, over, draggingRect } = event;
      const { id } = active;
      const { id: overId } = over;

      // Find the containers
      const activeContainer = findContainer(id);
      console.log("Active Container: ", activeContainer);
      const overContainer = findContainer(overId);
      console.log("Over Container: ", overContainer);
      if (
          !activeContainer ||
          !overContainer ||
          activeContainer === overContainer
      ) {
        return;
      }

      setItems((prev) => {
        const activeItems = prev[activeContainer];
        console.log("activeItems: ", activeItems);
        const overItems = prev[overContainer];
        console.log("OverItems: ", overItems);
        // Find the indexes for the items
        const activeIndex = activeItems.indexOf(id);
        console.log("active Index: ", activeIndex);
        const overIndex = overItems.indexOf(overId);
        console.log("over Index: ", overIndex);
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
          console.log("new index", newIndex);
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
      console.log("id: ", id)
      const { id: overId } = over;
      console.log("id: overId: ", overId);
      const activeContainer = findContainer(id);
      console.log("handle drag end activeContainer: ", activeContainer);
      const overContainer = findContainer(overId);
      console.log("handle drag end overContainer: ", overContainer);



      if (
          !activeContainer ||
          !overContainer ||
          activeContainer !== overContainer
      ) {
        // {console.log([overContainer]: arrayMove(items[overContainer], activeIndex, overIndex))}
        return;
      }

      // if (overContainer === 'topic' && activeContainer === overContainer)

  //activeIndexNew: 0 was the oth item's place, but now overIndexNew: 3 is how many places below in the array
      const activeIndex = items[activeContainer].indexOf(active.id);
      console.log("activeIndexNEW: ", activeIndex);
      const overIndex = items[overContainer].indexOf(overId);
      console.log("overIndexNEW: ", overIndex);
      if (activeIndex !== overIndex) {
        setItems((items) => ({
          ...items,
          [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
        // {console.log([overContainer]: arrayMove(items[overContainer], activeIndex, overIndex))}
          // [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
          // console.log()

        }

        ));
      // console.log(overContainer);
      }
      // overContainer: arrayMove(items[overContainer], activeIndex, overIndex)
      console.log("overconttttt", arrayMove(items[overContainer], activeIndex, overIndex));
      setActiveId(null);
    }
    // console.log(overContainer);
// console.log();
  }

// export default App;
