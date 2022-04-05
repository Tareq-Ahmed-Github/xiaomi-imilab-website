import React from 'react';

const TopReview = (props) => {
    const { name, rating, comment } = props.top;
    return (
        <div>
            <div className='text-xl bg-orange-100 border-2 my-8 p-6 w-2/4 mx-auto rounded-lg'>
                <div className='flex rounder-b-8'>
                    <img className='w-12 h-10 mr-2 rounded-full' src="https://i.ibb.co/Mhy11KD/146-1468479-my-profile-icon-blank-profile-picture-circle-hd.png" alt="" />
                    <h1 className='text-4xl font-bold'>{name}</h1>
                </div>
                <p className='flex justify-start mt-3 bg-orange-50 w-52 px-3 rounded-3xl font-bold text-sm'>Rating: {rating}</p>
                <p className=' flex justify-start mt-6 bg-orange-50 text-black p-4 rounded-xl font-serif border'>{comment}</p>
            </div>
        </div>
    );
};

export default TopReview;