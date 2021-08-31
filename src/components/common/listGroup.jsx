import React from 'react'

const listGroup = (props) => {
    const { items, onItemSelect, textProperty, valueProperty, selectedItem } = props
    return (
        <ul className="list-group" style={{ marginTop: 40 }}>
            <li className="list-group-item list-group-item-warning">Category</li>
            {items.map(item =>
                <li
                    key={item[valueProperty]}
                    onClick={() => onItemSelect(item)}
                    className={(item === selectedItem) ?
                        "list-group-item active" : "list-group-item"}>
                    {item[textProperty]}
                </li>
            )
            }
        </ul >
    )
}

listGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default listGroup
