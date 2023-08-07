import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import './sortablebackupcss.css';
import { useState } from "react";

export function Item(props) {
    const {id} = props;
    console.log(props);
    // const [zIndex, setZindex] = useState(1);

    // const style = {
    //     position: "relative",
    //     width: "400px",
    //     height: "180px",
    //     marginBottom: "-145px",
    //     index: "0",
    //     zIndex: "13",
    //     display: "block",
    //     columns: "1",
    //     listStyle: "none",
    //     fontSize: "1em",
    // };
    // return <div className = "_38_9Sr82DGi1CaYrsHNaIi" style = {style}>{id}</div>;
    // const style = {
    //     position: "relative",
    //     width: "400px",
    //     height: "180px",
    //     marginBottom: "-145px",
    //     index: "0",
    //     zIndex: "13",
    //     display: "block",
    //     columns: "1",
    //     listStyle: "none",
    //     fontSize: "1em",
    // };
    // const incard = {
    //     display: "flex",
    //     width: "200px",
    //     height: "300px",
    //     marginLeft: "140px",
    //     backgroundColor: "#fff",
    //     boxShadow: "1px 1px 0 1px #f9f9fb -1px 0 28px 0 rgba(34, 33, 81, 0.01) 54px 54px 28px -10px rgba(34, 33, 81, 0.15)",
    //     transformStyle: "preserve-3d",
    //     borderRadius: "24px",
    //     fontSize: "25px",
    //     fontFamily: "'Roboto Slab', Helvetica, sans-serif;",
    //     userSelect: "none",
    //     transformOrigin: "0 0",
    //     transform: "scale(var(--scale, 1)) translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) rotateX(60deg) rotateZ(33deg)",
    //     transition: "var(--transition)"
    // };
    // return <div className = "_38_9Sr82DGi1CaYrsHNaIi" style = {style}>

    // const style = {
    //     width: "100%",
    //     // height: 50,
    //     display: "flex",
    //
    //     alignItems: "center",
    //     justifyContent: "center",
    //     border: "1px solid black",
    //     margin: "10px 0",
    //     background: "white"
    // };
    // const zIndex = 0;
    //
    //
    // const zindexupdate = {
    //     Zindex: ''
    // }

    //ones below -these are the ones with --index: 5; z-index: 8;
    //this is the one if you do something different it creates two cards
    const underscorethreeeight = {
        index: '0',
        zIndex: '13',
    // --index: 0;
    // z-index: 13;
        position: 'relative',
        width: '140px',
        // height: '180px',
        // width: '400px',
        height: '180px',
        marginBottom: '-145px',
        display: 'block',
        // columns: '1',
        listStyle: 'none',
        fontSize: '1em',
        // backgroundColor: '#fff',
    }

    const onerfive = {
        display: 'flex',
        width: '200px',
        height: '300px',
        marginLeft: '140px',
    backgroundColor: '#fff',
    boxShadow: "1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),54px 54px 28px -10px rgba(34, 33, 81, 0.15)",
    transformStyle: 'preserve-3d',
    borderRadius: '24px',
    fontSize: '25px',
    fontFamily: "'Roboto Slab', Helvetica, sans-serif",
    userSelect: 'none',
    transformOrigin: '0 0',
    transform: 'scale(var(--scale, 1)) translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) rotateX(60deg) rotateZ(33deg)',
    transition: 'var(--transition)',

        index: '0',
        columns: '1',
        listStyleType: 'disc'
    }
    const strong = {
        position: 'relative',
        left: '-5px',
        margin: '0 auto',
        alignSelf: 'center',
        fontSize: '11px'
    }

    // return <div className = "_38_9Sr82DGi1CaYrsHNaIi">

             // return   <div className="_1R5gLGPCN7u_knZHd0oTsz" style ={style}>
             //        <sup>A♠</sup>
             //        <strong> {id}</strong>
             //        <sub>A♠</sub>
             //    </div>
         // </div>;
    // <div className="_38_9Sr82DGi1CaYrsHNaIi" style = {underscorethreeeight}>

    return <div className="_38_9Sr82DGi1CaYrsHNaIi" style = {underscorethreeeight}>
        <div className="_1R5gLGPCN7u_knZHd0oTsz" style = {onerfive}>
            <sup>A♠</sup>
            <strong style = {strong}>{id}</strong>
            <sub>A♠</sub>
        </div>
    </div>
}

export default function SortableItem(props) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});
    // const zIndex = props.id.active && props.id.active === props.id.active ? 1 : 0;
    const style = {
        // zIndex,
        transform: CSS.Transform.toString(transform),
        transition,
    };
    // const zIndex = active && active.id === id ? 1 : 0;
    // const [zIndex, setZindex] = useState(1);

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Item id={props.id} />
        </div>
    );
}