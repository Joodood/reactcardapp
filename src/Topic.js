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

export default function Topic(props) {

    const {id, items} = props;
    const {setNodeRef} = useDroppable(
        {id}
    );

    if(props.isWithin !== false) {
        var topandindex = props.isWithin;
        var onlyarray = topandindex[0];
        console.log("topandindex[0]: ", topandindex[0]);
        // console.log(Object.values(onlyarray));
        // console.log("type of onlyarray: ", typeof(onlyarray));
        var topindex = topandindex[1];
        // console.log("hoooopp: ", topindex);
    }

// if in topic and not in brackets then make it bold
    if(id === 'topic') {
            console.log("tp: ", items);

    }

    // if(id === '')



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

                    {/*<td  rowSpan={1}scope="col" style ={togethery}>{arr}</td>*/}

                    <div ref={setNodeRef}>
                        {/*{items.map((id) => (<SortableItem key={id} id={id} />))}*/}
                        {/*{items.map((id) => (<SortableItem key={id} id={id} />))}*/}
                        {/*<div className = "d-print-table-cell"style = {pre}>{JSON.stringify(items)}</div>*/}
                        {/*<table  className = "table table-responsive-sm table-dark" style = {scrolly}>*/}
                        {/*    /!*table-responsive-sm*!/*/}
                        {/*    /!*{JSON.stringify(items)}*!/*/}
                        {/*    {items.map((id) => (*/}

                        {/*            <thead>*/}
                        {/*            <tr className="bg-info" style={tr}>*/}
                        {/*                /!*{!together === undefined}*!/*/}
                        {/*                <td  colSpan={0} rowSpan={1} scope ="col" style ={{color: "#4AF626"}}>{props.id}</td>*/}
                        {/*                <td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{id}</td>*/}
                        {/*                <td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{Object.keys(id).length}</td>*/}
                        {/*                /!*<td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{Object.keys.values(id)}</td>*!/*/}
                        {/*                /!*<td rowSpan={1}scope="col" style ={{color: "red"}}>*!/*/}
                        {/*                <td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{typeof(id)}</td>*/}
                        {/*                /!*<td rowSpan={1}scope="col" style ={{color: "#4AF626"}}>{together}</td>*!/*/}
                        {/*                /!*<td rowSpan={1}scope="col" style ={{color: "#4AF626"}}*!/*/}
                        {/*                /!*    {!together === undefined} ? </td>*!/*/}
                        {/*                /!*>{together}</td>*!/*/}

                        {/*                /!*{Object.entries([id])}*!/*/}
                        {/*                /!*<td  rowSpan={1}scope="col" style ={togethery}>{arr}</td>*!/*/}
                        {/*            </tr>*/}
                        {/*            </thead>*/}
                        {/*        )*/}
                        {/*    )}*/}
                        {/*</table>*/}

                        {items.map((id) => (
                            // id.style(zIndex: count-1)
                            // (<pre>{JSON.stringify(items)}</pre>),
                            // const ok = zIndex: index;

                                typeof id === 'object'
                                    ? (<SortableItem key={id} id={id}/>)
                                    : <b><SortableItem key={id} id={id}/></b>)

                            // <SortableItem key={id} id={id}/>)
                        )}
                    </div>
                    {/*</div>*/}
                </ul>
            </div>
            {/*</div>*/}
        </SortableContext>

    );


}