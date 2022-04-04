import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-black text-white justify-center py-8'>
            <Link to='/' className='text-xl mx-2'>Home</Link>
            <Link to='/reviews' className='text-xl mx-2'>Reviews</Link>
            <Link to='/dashboard' className='text-xl mx-2'>Dashboard</Link>
            <Link to='/blogs' className='text-xl mx-2'>Blogs</Link>
            
        </div>
    );
};

export default Header;