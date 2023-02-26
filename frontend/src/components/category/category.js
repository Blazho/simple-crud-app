import React from "react";

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
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default category;