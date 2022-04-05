import React from 'react';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <div className='product-details bg-slate-100 w-3/4 mx-auto mt-8 rounded-lg border flex '>
            <div className='image'>
                <img src="https://i.ibb.co/b61Fhvc/kw66-500x500.jpg" alt="" />
            </div>
            <div className='details my-auto pl-4 text-left'>
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
                <button className='text-white bg-rose-700 p-2 mt-2 rounded-2xl hover:bg-red-400'>Order Now</button>
                </div>
            </div>
            </div>
            <div className='home-reviews mt-20 '>
                <Reviews/>
            </div>
        </div>
    );
};

export default Home;