import React from 'react'

function DeliverySmallCard({ image, title }) {
    return (
        <>
            <div className='lg:hidden bg-white shadow rounded-md w-24 md:w-56'>
                <div className='w-full h-24'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover object-center rounded-t-md' />
                </div>
                <div >
                    <h3 className='text-sm my-1 text-center font-light'> {title} </h3>
                </div>
            </div>
        </>
    )
}

function DeliveryLargeCard({ image, title }) {
    return (
        <>
            <div className='hidden lg:block w-64 px-9' >
                <div className='w-full h-full'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover object-center rounded-md' />
                </div>
                <div >
                    <h3 className='text-sm my-1 text-center font-light'> {title} </h3>
                </div>
            </div>

        </>
    )
}


function DeliveryCategory(props) {

    return (
        <>
            <DeliveryLargeCard {...props} />
            <DeliverySmallCard {...props} />
        </>
    )
}
export default DeliveryCategory
