// import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./sortable_item";
import './styles.css';
import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

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
// const allstacksstyle = {
//     display: 'inline-grid',
//     boxSizing: 'border-box',
//     // padding: '20px',
//     padding: '5px',
//     gridAutoFlow: 'column',
//     // gridAutoFlow: 'row',
//     // minHeight: '400px',
//
// }
const dotthreeandtwo = {
    position: 'relative',
    width: '330px',
    // width: '3px',
    top: '-100px',
    // margin: '20px',
    margin: '10px',
    columns: '1',
    overflow: 'visible',
    backgroundColor: 'transparent !important',
    border: 'none !important',
    // minHeight: '100px',
}
const h5 =  {
    // marginBottom: '20px',
    // display: 'flex',
    // flexDirection: 'center',
    // flexDirection: 'column',
    /*flex-direction: column;*/
    // gridAutoRows: 'max-content',
    // width: "50%",
    // align: 'center',
    left: '-5px',
    marginLeft: '140px',
    overflow: 'hidden',
    // boxSizing: 'border-box',
    appearance: 'none',
    outline: 'none',
    // minWidth: '350px',
    margin: '10px',
    borderRadius: '5px',

    // width: "50%",
    // align: 'center',
// minHeight: '400px',
    /*min-height: 400px;*/
    // minHeight: '60vh',
    transition: 'background-color 350ms ease',
    // backgroundColor: 'rgba(246, 246, 246, 1)',
    // border: '1px solid rgba(0, 0, 0, 0.05)',
    // fontSize: '1.5em',
    fontSize: '1em',
}
//this is the height adjustment for the containers
const lonethreetwo = {
    display: 'flex',
    flexDirection: 'column',
    /*flex-direction: column;*/
    gridAutoRows: 'max-content',
    overflow: "auto",
// overflow: 'hidden',
boxSizing: 'border-box',
appearance: 'none',
outline: 'none',
minWidth: '350px',
margin: '10px',
borderRadius: '5px',
minHeight: '400px',
    // maxHeight: '740px',
    // maxHeight: '400px',
/*min-height: 400px;*/
    // minHeight: '60vh',
transition: 'background-color 350ms ease',
backgroundColor: 'rgba(246, 246, 246, 1)',
border: '1px solid rgba(0, 0, 0, 0.05)',
fontSize: '1em',
}

const togethery = {
    fontSize: "9px",
    color: "red",
    fontFamily: "Verdana",

}
// const pre = {
//     cols: "40",
//     display: 'flex',
//     // flexWrap: '2',
//     // overflowX: 'auto',
//     whitespace: 'pre-wrap',
//     fontFamily: "Courier New, monospace",
//     fontSize: "10px",
//     //     whiteSpace: 'pre-wrap',       /* Since CSS 2.1 */
//     // whiteSpace: '-moz-pre-wrap',  /* Mozilla, since 1999 */
//     //     whitespace: '-pre-wrap',     /* Opera 4-6 */
//     // whitespace: '-o-pre-wrap',   /* Opera 7 */
//     wordWrap: 'break-word',      /* Internet Explorer 5.5+ */
// }
// import {Minimal} from "./loop";
// const underscorethreeeight = {
//     // index: '0',
//     // zIndex: 'auto',
//     // zIndex: c,
//     // --index: 0;
//     // z-index: 13;
//     position: 'relative',
//     width: '140px',
//     // height: '180px',
//     // width: '400px',
//     height: '180px',
//     marginBottom: '-145px',
//     display: 'block',
//     // columns: '1',
//     listStyle: 'none',
//     fontSize: '1em',
//     // backgroundColor: '#fff',
// }
//     ._328ihlO1aNNvvItgASkAn4._2gdhxzipxwoIsqHZKtOUsP._328ihlO1aNNvvItgASkAn4 {
//
// }
//little vertical line in the container if trylight is on
// const tryinglight = {
//     backgroundColor: '#fff'
// }
// const [count, setcount] = useState(0);
// setcount(count + 1)
// const style = {
//     zIndex: count,
// }
export default function Container(props) {
    console.log("in container", props);
    if(props.isWithin !== false) {
        var topandindex = props.isWithin;
        var onlyarray = topandindex[0];
        console.log("topandindex[0]: ", topandindex[0]);
        // console.log(Object.values(onlyarray));
        // console.log("type of onlyarray: ", typeof(onlyarray));
        var topindex = topandindex[1];
        // console.log("hoooopp: ", topindex);
    }
    // console.log(props.isWithin);

    // console.log("topandindex: ", topandindex);
    // console.log("props.isWIthin: ", props.isWithin)
    // var together = props.isWithin;
    // var togethery = Object.keys({together});
    // console.log("together", together);
    // var arr = together.toString();
    var arr = JSON.stringify(topandindex);


    //you want it to become its own element with the index placement
    // console.log("together", together);
    // console.log("props type: " + typeof props);
    // const {id, items} = props;
    // console.log( "props.id: = " + props.id);
    // console.log("props.id type" + typeof props.id);
    // console.log( "props.items: = " + props.items);
    // console.log("props.items type is: " + typeof props.items);
    //
    // const [count, setcount] = useState(0);

    // console.log(props);
    // console.log("props type: " + typeof props);
    // const zlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

    const {id, items} = props;

    // if in topic and not in brackets then make it bold
    // if(id == 'Topic') {
    //
    // }

    // const title = props.title;

    const scrolly = {
        top: "0",
        right: '0',
        overflowX: 'scroll',
    overflowY: 'scroll',
        fontSize: '7px',
        fontFamily: "Verdana",
        margin: '0',
        // padding: '0',
        paddingRight: '300px',
        // backgroundColor: "green",
    // textAlign: 'right'
    }
    const tr = {
        color: "green",
    }
    // console.log({id},"in container");
    // console.log(items,"in container");

    // const idee = {id};
    // const itemee = {items};
    // {itemee.map((idee) => (<SortableItem key={idee} id={idee} />))}
    // console.log( "id: = " + id);
    // console.log("id type" + typeof id);
    // console.log( "items: = " + items);
    // console.log("items type is: " + typeof items);

//id is the category, which is of type typestring, and the items are an object of all the writings separated by commas in that container
//     const {count} = items.length;
//     console.log(count);
    const {setNodeRef} = useDroppable(
        {id}
    );
    // const pre = {
    //     display: 'flex',
    //     overflowX: 'auto',
    //     whitespace: 'pre-wrap',
    //     fontFamily: "Courier New, monospace",
    // //     whiteSpace: 'pre-wrap',       /* Since CSS 2.1 */
    // // whiteSpace: '-moz-pre-wrap',  /* Mozilla, since 1999 */
    // //     whitespace: '-pre-wrap',     /* Opera 4-6 */
    // // whitespace: '-o-pre-wrap',   /* Opera 7 */
    // wordWrap: 'break-word',      /* Internet Explorer 5.5+ */
    // }
    // const {setNodeRef: setFirstDroppableRef} = useDroppable({
    //     id: 'droppable-1',
    // });
    //
    // for (i = 0; i < count; i++) {
    //
    // }

    return (
        <SortableContext
            id={id}
            items={items}
            strategy={verticalListSortingStrategy}
        >

{/*<div className = "all-stacks" style = {allstacksstyle}>*/}

    <div className="_328ihlO1aNNvvItgASkAn4 _2gdhxzipxwoIsqHZKtOUsP" style = {dotthreeandtwo}>
        <h5 className = "card-title" style = {h5}>{id}</h5>
        <ul className = "_328ihlO1aNNvvItgASkAn4" style = {lonethreetwo}>
            {/*<div className="_38_9Sr82DGi1CaYrsHNaIi" style = {underscorethreeeight}>*/}
            {/*below id is the category and items are a object of each card inside the topic */}
            {/*below id is going to be each element of the array*/}
            {/*for each container create a array with the container name and */}
            {/*style = {{zIndex: current}} */}
            {/*<pre style = {pre}>*/}
            {/*                {JSON.stringify(items)}*/}
            {/*            </pre>*/}

           <td  rowSpan={1}scope="col" style ={togethery}>{arr}</td>

                    <div ref={setNodeRef}>
                        {/*{items.map((id) => (<SortableItem key={id} id={id} />))}*/}
                        {/*{items.map((id) => (<SortableItem key={id} id={id} />))}*/}
                        {/*<div className = "d-print-table-cell"style = {pre}>{JSON.stringify(items)}</div>*/}





                        {/*<table  className = "table table-responsive-sm table-dark" style = {scrolly}>*/}
                        {/*    /!*table-responsive-sm*!/*/}
                        {/*    /!*{JSON.stringify(items)}*!/*/}
                        {/*    {items.map((id) => (*/}

                        {/*    <thead>*/}
                        {/*    <tr className="bg-info" style={tr}>*/}
                        {/*        /!*{!together === undefined}*!/*/}
                        {/*        <td  colSpan={0} rowSpan={1} scope ="col" style ={{color: "#4AF626"}}>{props.id}</td>*/}
                        {/*        <td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{id}</td>*/}
                        {/*        <td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{Object.keys(id).length}</td>*/}
                        {/*        /!*<td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{Object.keys.values(id)}</td>*!/*/}
                        {/*        /!*<td rowSpan={1}scope="col" style ={{color: "red"}}>*!/*/}
                        {/*            <td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{typeof(id)}</td>*/}
                        {/*        /!*<td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{together}</td>*!/*/}
                        {/*        /!*<td rowSpan={1}scope="col" style ={{color: "#4AF626"}}*!/*/}
                        {/*        /!*    {!together === undefined} ? </td>*!/*/}
                        {/*        /!*>{together}</td>*!/*/}

                        {/*        /!*{Object.entries([id])}*!/*/}
                        {/*        /!*<td  rowSpan={1}scope="col" style ={togethery}>{arr}</td>*!/*/}
                        {/*    </tr>*/}
                        {/*    </thead>*/}
                        {/*    )*/}
                        {/*    )}*/}
                        {/*</table>*/}





                        {items.map((id) => (
                            // id.style(zIndex: count-1)
                            // (<pre>{JSON.stringify(items)}</pre>),
                            // const ok = zIndex: index;
                            // typeof id === 'object'
                            // ? (<SortableItem key={id} id={id}/>)
                            //     : <b><SortableItem key={id} id={id}/></b>)
                            //     typeof id !== 'object' && props.id === 'topic'
                            //         ? (<b><SortableItem key={id} id={id}/></b>)
                            //         : <SortableItem key={id} id={id}/>)

                                typeof id !== 'string' && props.id === 'topic'
                                    ? (<b><SortableItem key={id} id={id}/></b>)
                                    : <SortableItem key={id} id={id}/>)

                            // <SortableItem key = {id} id = {id} /> )
                        )}
                    </div>
            {/*</div>*/}
        </ul>
    </div>
{/*</div>*/}
        </SortableContext>

    );

}