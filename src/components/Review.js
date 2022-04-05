import React from 'react';

const Review = (props) => {
    const {name,rating,comment} = props.review;
    return (
        <div>
            <div className='text-xl bg-cyan-800 text-white border-2 my-8 p-6 w-2/4 mx-auto rounded-lg'>
                <div className='flex'>
                    <img className='w-10 h-10 mr-2 rounded-full' src="https://i.ibb.co/Mhy11KD/146-1468479-my-profile-icon-blank-profile-picture-circle-hd.png" alt="" />
                <h1 className='text-4xl font-bold '>{name}</h1>
                </div>
                <p className='flex justify-start mt-3'>Rating: {rating}</p>
                <p className=' flex justify-start mt-6 bg-slate-300 text-black py-4 rounded-xl font-serif'>{comment}</p>
            </div>
        </div>
    );
};

export default Review;