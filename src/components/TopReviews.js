import React from 'react';
import TopReview from './TopReview';

const topReviews = () => {
    const topRev = [
        {
            id: 2, name: 'Thomas', rating: 5, comment: 'battery health is amazing.'
        },
        {
            id: 3, name: 'Tom', rating: 5, comment: 'looks so premium.'
        },
        {
            id: 3, name: 'Smith', rating: 5, comment:'loved this watch. very useful.'
        }
    ];
    return (
        <div>
            <h1 className='text-4xl w-full bg-black text-white py-2'>Top Reviews</h1>
            <div>
            {
                topRev.map(top => <TopReview top={top} key={top.id}></TopReview>)
            }
            </div>
        </div>
    );
};

export default topReviews;