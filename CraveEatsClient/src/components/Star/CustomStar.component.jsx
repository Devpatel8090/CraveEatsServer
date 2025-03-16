import React, { useState } from "react";

const StarRating = (props) => {


    const handleRating = (rate) => {
        props.setRating(rate);

        console.log("Rated:", rate);
    };
    return (
        <>
            <div className="flex gap-2 items-center mt-3  ">
                <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                        return (

                            <button
                                type="button"
                                key={index}
                                className={`${index < (props?.rating > 0 ? props.rating : 0) ? "on" : "off"} text-4xl transition-transform transform hover:scale-125`}
                                onClick={() => handleRating(index + 1)}
                            >
                                <span className="star">&#9733;</span>
                            </button>



                        );
                    })}

                </div>
                <button type="button" className="text-center justify-center bg-CraveEats-400 text-white p-2 rounded-lg  text-lg" onClick={() => props.setRating(0)}>
                    Reset
                </button>
            </div >
        </>
    );
};


export default StarRating;