import {
    SimpleTreeItemWrapper,
    SortableTree,
    TreeItemComponentProps,
    TreeItems,
} from 'dnd-kit-sortable-tree';
import './App.css';
import React, { useState, useRef, useEffect } from "react";

export const Minimal = () => {
    const [items, setItems] = useState(initialMinimalData);
    return (
        <SortableTree
            items={items}
            onItemsChanged={setItems}
            {
                /*
                 * You need to pass the component rendering a single item via TreeItemComponent props.
                 * This component will receive the data via `props.item`.
                 * In this example we inline the component, but in reality you should extract it into a const.
                 */ ...{}
            }
            TreeItemComponent={React.forwardRef((props, ref) => (
                <SimpleTreeItemWrapper {...props} ref={ref}>
                    {/* HERE GOES THE ACTUAL CONTENT OF YOUR COMPONENT */}
                    <div>{props.item.id}</div>
                </SimpleTreeItemWrapper>
            ))}
        />
    );
};
/*
 * Configure the tree data.
 */
const initialMinimalData = [
    { id: '1', children: [{ id: '4' }, { id: '5' }] },
    { id: '2' },
    { id: '3' },
];