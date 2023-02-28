import React from 'react';

const categoryItem = (props) =>{
    return (
        <tr>
            <td>{props.category.id}</td>
            <td>{props.category.name}</td>
            <td>{props.category.description}</td>
            <td>
                <button title={"Delete"} onClick={()=> props.onDelete(props.category.id)}>Delete</button>
            </td>

        </tr>
    );
}

export default categoryItem;