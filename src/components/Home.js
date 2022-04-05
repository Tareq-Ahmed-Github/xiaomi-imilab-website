import React from 'react';
import { Link } from 'react-router-dom';
// import Reviews from './Reviews';
import TopReviews from './TopReviews';

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl w-full bg-black text-white py-2'>Home</h1>
            <div className='product-details bg-slate-100 w-3/4 mx-auto my-8 rounded-lg border md:flex '>
                <div className='image'>
                    <img src="https://i.ibb.co/b61Fhvc/kw66-500x500.jpg" alt="" />
                </div>
                <div className='details my-auto pl-4 text-left'>
                    <h1 className='name mb-6 text-6xl font-bold text-rose-700'>Xiaomi Imilab</h1>
                    <h1 className='name mb-6 text-4xl font-bold'>Xiaomi IMILAB KW66 Smart Watch</h1>
                    <div>
                        <p className='font-bold '>Price: $240</p>
                        <ul>
                            <li>Model: Xiaomi IMILAB KW66</li>
                            <li>Compatibility: Android 5, iOS 9.0 and above.</li>
                            <li>Bluetooth: 5.0</li>
                            <li>Battery Capacity: 340 mAh</li>
                            <li>Display: 1.28-inches 3D TFT</li>
                        </ul>
                        <button className='text-white bg-rose-700 p-2 my-2 rounded-2xl hover:bg-red-400'>Order Now</button>
                    </div>
                </div>
            </div>
            <div className='home-reviews mb-20 '>
                <TopReviews />
                <Link className='p-4 border-orange-200 border-2 rounded-3xl px-8 text-orange-400 hover:font-bold' to='/reviews'>See All</Link>
            </div>
        </div>
    );
};

export default Home;