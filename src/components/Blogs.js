import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl w-full bg-black text-white py-2'>Blogs</h1>

            <div className='flex w-3/4 mx-auto gap-4'>
                <div className='border mt-8 bg-yellow-50'>
                    <h1 className='text-4xl font-bold my-4'>Context API:</h1>
                    <p className='text-left p-4'>
                        Context is primarily used when some data needs to be accessible by many components at different nesting levels. Let's describe how to use context API.
                    </p>
                    <ul className='text-left p-4 '>
                        <li>Create a folder under app root named contexts</li>
                        <li>Create a file named context name Context.js</li>
                        <li>Import and create a context.</li>
                        <li>Create a component that will wrap the provider named Provider.</li>
                        <li>Create a higher order component to consume the context named: with</li>
                        <li>In the end, export them.</li>
                    </ul>
                </div>
                <div className='border mt-8 bg-yellow-50'>
                    <h1 className='text-4xl font-bold my-4'>Semantic Tag: </h1>
                    <p className='text-left p-4'>
                        Semantic HTML tags are used to add meaning to the markup so that search engines, screen readers, and web browsers can make sense of it.
                        Example of some semantic element-
                    </p>
                    <ul className='text-left p-4 '>
                        <li>header</li>
                        <li>article</li>
                        <li>section</li>
                        <li>nav</li>
                        <li>aside, etc.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Blogs;