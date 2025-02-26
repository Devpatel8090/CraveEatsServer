import React from "react";
import Slider from "react-slick";

// components
import NutritionCarouselCard from "../Nutrition/nutritionCarouselCard.component";
import { NextArrow, PrevArrow } from "../Navbar/carousalArrow.component";

function NutritionCarousel() {
    const categories = [
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
            title: "Sleep & stress",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
            title: "Digestion & Weight Loss",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
            title: "Sleep & stress",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
            title: "Digestion & Weight Loss",
        },

    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="lg:hidden flex gap-3 flex-wrap justify-evenly">
                {categories.map((food, index) => (
                    <NutritionCarouselCard {...food} key={index} />
                ))}
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                    {categories.map((food, index) => (
                        <NutritionCarouselCard {...food} key={index} />
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default NutritionCarousel;