import React from "react";
import classnames from "classnames";

function MenuCategory(props) {
    return (
        <>
            <div
                className={classnames("py-2 px-1", {
                    "text-CraveEats-400 bg-CraveEats-50 border-r-4 border-CraveEats-400":
                        props.isActive,
                })}
            >
                <h3 id={props.name} onClick={props.onClickHandler}>
                    {props.name} ({props.items.length})
                </h3>
            </div>
        </>
    );
}

export default MenuCategory;