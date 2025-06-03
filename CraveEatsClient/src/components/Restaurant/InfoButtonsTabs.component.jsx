import React from "react";
import classnames from "classnames";

function InfoButtonsTabs(props) {
    return (
        <>
            <button onClick={props.onClick}
                className={classnames(
                    "flex items-center gap-3 border border-CraveEats-400 px-4 py-2 rounded-lg",
                    {
                        "bg-CraveEats-400 text-white": props.isActive,
                    }
                )}
            >
                {props.children}
            </button>
        </>
    );
}

export default InfoButtonsTabs;