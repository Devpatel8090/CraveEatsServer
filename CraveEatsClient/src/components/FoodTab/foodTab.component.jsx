import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IoFastFoodOutline, IoNutritionOutline } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { MdDining } from 'react-icons/md';
import classnames from "classnames";

const MobileTabs = () => {
    const [allTypes] = useState([
        {
            id: "delivery",
            icon: <RiShoppingBag3Line />,
            name: "Delivery"

        },
        {
            id: "dining",
            icon: <IoFastFoodOutline />,
            name: "Dining"

        },
        {
            id: "nutri",
            icon: <IoNutritionOutline />,
            name: "Nuitrition"

        },
        {
            id: "night",
            icon: <BiDrink />,
            name: "Night Life"

        },
    ]);
    const { type } = useParams();
    return (
        <>
            <div className='lg:hidden bg-white shadow-lg  fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border' >
                {allTypes.map((item) => (
                    <Link key={item.id} to={`/${item.id}`} className='w-1/4' >
                        <div
                            className={
                                type === item.id
                                    ? "flex text-center flex-col relative items-center text-xl text-CraveEats-400"
                                    : "flex text-center flex-col items-center text-xl"
                            }>
                            <div className={
                                type === item.id && "flex flex-col items-center h-full pt-3 w-full  border-t-2 border-CraveEats-400"
                            }>
                                {item.icon}
                            </div>
                            <h5 className='text-sm pb-3'>{item.name}</h5>

                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

const LargeTabs = () => {



    const [allTypes] = useState([
        {
            id: "delivery",
            imageDefault:
                "/scooter.webp",
            imageActive:
                "/scooter_active.avif",
            name: "Delivery",
            activeColor: "bg-yellow-100",
        },
        {
            id: "dining",
            imageDefault:
                "/dining_out.avif",
            imageActive:
                "/dining_out_active.avif",
            activeColor: "bg-blue-100",
            name: "Dining Out",
        },
        {
            id: "night",
            imageDefault:
                "/night_life.webp",
            imageActive:
                "/night_life_active.webp",
            activeColor: "bg-purple-100",
            name: "Night life",
        },
        {
            id: `nutri`,
            imageDefault:
                "/nutrition.webp",
            imageActive:
                "/nutrition_active.avif",
            activeColor: "bg-yellow-100",
            name: "Nutrition",
        },

    ]);
    const { type } = useParams();
    return (
        <>
            <div className='hidden lg:flex gap-14 container px-20 my-8 mx-auto'>
                {allTypes.map((item) => (
                    <Link key={item.id} to={`/${item.id}`}>
                        <div className={classnames(
                            "flex items-center gap-3 pb-2 transition duration-700 easy-in-out",
                            {
                                "border-b-2 border-CraveEats-400": type === item.id,
                            }
                        )}>
                            <div className={classnames("w-16 h-16 p-4 rounded-full",
                                {
                                    [`${item.activeColor}`]: type === item.id,
                                }
                            )}>
                                <img src={type === item.id ? item.imageActive : item.imageDefault

                                } alt={item.id} className="w-full h-full" />


                            </div>
                            <h3 className={type === item.id ? "text-xl text-CraveEats-400" : "text-xl text-gray-700"}>{item.name}</h3>
                        </div>
                    </Link>
                ))}
            </div >
        </>
    )
}

function FoodTab() {
    return (
        <>

            <MobileTabs />
            <LargeTabs />

        </>
    )
}

export default FoodTab
