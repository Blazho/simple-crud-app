import React from "react";
import CategoryItem from "./categoryItem/categoryItem";

const category = (props) =>{
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                {props.categories.map((item) => {
                    return ( <CategoryItem onDelete={props.onDelete} category={item}/>)
                })}
                </tbody>
            </table>
        </div>
    )
}

export default category;