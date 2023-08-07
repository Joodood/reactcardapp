import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./sortable_item";
import './styles.css';

// const container1Style = {
//     position: "relative",
//     width: "330px",
//     top: "-100px",
//     margin: "20px",
//     columns: "1",
//     overflow: "visible",
//     backgroundColor: "transparent !important",
//     border: "none !important"
// };
// const container2Style = {
//     display: "grid",
//     gridGap: "10px",
//     gridTemplateColumns: "repeat(var(--columns, 1), 1fr)",
//     listStyle: "none",
//     padding: "20px",
//     margin: "0"
//
// };
// const container3Style = {
//     display: "flex",
//     flexDirection: "column",
//     gridAutoRows: "max-content",
//     overflow: "hidden",
//     boxSizing: "border-box",
//     appearance: "none",
//     outline: "none",
//     minwidth: "350px",
//     margin: "10px",
//     borderRadius: "5px",
//     minHeight: "200px",
//     transition: "background-color 350ms ease",
//     backgroundColor: "rgba(246, 246, 246, 1)",
//     border: "1px solid rgba(0, 0, 0, 0.05)",
//     fontSize: "1em"
// };
//
// const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
// gridAutoRows: 'max-content',
// // overflow: 'hidden',
// boxSizing: 'border-box',
// appearance: 'none',
// outline: 'none',
// minWidth: '350px',
// margin: '10px',
// borderRadius: '20px',
// minHeight: '200px',
// transition: 'background-color 350ms ease',
// backgroundColor: 'rgba(246, 246, 246, 1)',
// border: '1px solid rgba(0, 0, 0, 0.05)',
// fontSize: '1em',
//     // width: '100vh',
//     // height: '100vh',
//
// };
const allstacksstyle = {
    display: 'inline-grid',
    boxSizing: 'border-box',
    padding: '20px',
    gridAutoFlow: 'column',
    // minHeight: '400px',

}
const dotthreeandtwo = {
    position: 'relative',
    width: '330px',
    top: '-100px',
    margin: '20px',
    columns: '1',
    overflow: 'visible',
    backgroundColor: 'transparent !important',
    border: 'none !important',
    // minHeight: '400px',
}
//this is the height adjustment for the containers
const lonethreetwo = {
    display: 'flex',
    /*flex-direction: column;*/
    gridAutoRows: 'max-content',
overflow: 'hidden',
boxSizing: 'border-box',
appearance: 'none',
outline: 'none',
minWidth: '350px',
margin: '10px',
borderRadius: '5px',
// minHeight: '400px',
/*min-height: 400px;*/
    minHeight: '60vh',
transition: 'background-color 350ms ease',
backgroundColor: 'rgba(246, 246, 246, 1)',
border: '1px solid rgba(0, 0, 0, 0.05)',
fontSize: '1em',
}
//little vertical line in the container if trylight is on
// const tryinglight = {
//     backgroundColor: '#fff'
// }
export default function Container(props) {
    const {id, items} = props;

    const {setNodeRef} = useDroppable({
        id

    });

    return (
        <SortableContext
            id={id}
            items={items}
            strategy={verticalListSortingStrategy}
        >
            {/*<div style = {container1Style}>*/}
            {/*    <div>*/}
            {/*    <ul style = {container2Style}>*/}
            {/*        <div ref={setNodeRef} style={container3Style}>*/}
            {/*        {items.map((id) => (<SortableItem key={id} id={id} />))}*/}
            {/*        </div>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<div ref={setNodeRef} style={container3Style}>*/}

            {/*<div ref={setNodeRef} style = {containerStyle}>*/}
            {/*    {items.map((id) => (<SortableItem key={id} id={id} />))}*/}
            {/*</div>*/}
<div className = "all-stacks" style = {allstacksstyle}>
    <div className="_328ihlO1aNNvvItgASkAn4 _2gdhxzipxwoIsqHZKtOUsP" style = {dotthreeandtwo}>
        <ul className = "_328ihlO1aNNvvItgASkAn4" style = {lonethreetwo}>
            {/*<div className="_38_9Sr82DGi1CaYrsHNaIi">*/}
                    <div ref={setNodeRef}>
                        {items.map((id) => (<SortableItem key={id} id={id} />))}
                    </div>
            {/*</div>*/}
        </ul>
    </div>
</div>
        </SortableContext>
    );

}