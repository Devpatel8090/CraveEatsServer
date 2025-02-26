import React from 'react'

// component
import NightLifeCarousel from './nightLifeCarousel.component';

function NightLife() {
    return (
        <div className="mb-10">
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                Nightlife Restaurant in DELHI NCR
            </h1>
            <NightLifeCarousel />
        </div>
    )
}

export default NightLife;
