import React from 'react';

//componet
import NutritionHeroCarousel from './nutritionHeroCarousel.component';
import NutritionCard from './nutritionCard.component';
import NutritionCarousel from './nutritionCarousel.component';

function Nutrition() {
    return (
        <div>
            <NutritionHeroCarousel />
            <div className="my-6">
                <NutritionCarousel />
            </div>
            <div className="flex justify-between flex-wrap">
                <NutritionCard
                    bg="CraveEats"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                />
                <NutritionCard
                    bg="CraveEats"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                />
                <NutritionCard
                    bg="CraveEats"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                />
                <NutritionCard
                    bg="CraveEats"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                />
            </div>
        </div>
    )
}

export default Nutrition;
