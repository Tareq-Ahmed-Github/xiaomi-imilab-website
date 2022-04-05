import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviewAll = [
        {
            id: 1, name: 'Jackson', rating: 4.5, comment: 'best smartwatch i have ever used, but the only lacking in it is not supporting sim cards.'
        },
        {
            id: 2, name: 'Thomas', rating: 5, comment: 'battery health is amazing.'
        },
        {
            id: 3, name: 'Tom', rating: 5, comment: 'looks so premium.'
        },
        {
            id: 3, name: 'Alexa', rating: 4.5, comment:'One of the best of xiaomi products'
        },
        {
            id: 3, name: 'Smith', rating: 5, comment:'loved this watch. very useful.'
        },
        {
            id: 3, name: 'Harry', rating: 4, comment:'best quality within handy budget.'
        }
    ]
    return (
        <div>
            <h1 className='text-4xl w-full bg-black text-white py-2'>Reviews</h1>
            <div>
                {
                    reviewAll.map(review=> <Review review={review} key={review.id}></Review>)
                }
            </div>
            <div>
                <button className='text-3xl font-bold bg-red-600 p-3 mb-8 rounded-xl'>See all reviews</button>
            </div>
        </div>
    );
};

export default Reviews;