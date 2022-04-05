import React from 'react';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';

const Dashboard = () => {
    return (
        <div className='flex justify-center space-x-10 mt-8'>
            <div className='border'>
                <h1 className='text-2xl font-bold'>Sell per month</h1>
            <ChartOne></ChartOne>
            </div>
            <div className='border pb-16'>
                <h1 className='text-2xl font-bold'>mothly sell total</h1>
                <ChartTwo></ChartTwo>
            </div>
        </div>
    );
};

export default Dashboard;