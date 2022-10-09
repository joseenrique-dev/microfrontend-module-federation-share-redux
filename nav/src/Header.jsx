import React from 'react';

export default ({ count, onClear }) =>(
    <header className='bg-blue-700 text-white font-bold text-3x1 p-5 flex'>
        <div className='flex-grow'>Header</div>
        <div> 
            <label className='p-2'>{count}</label>
            <button
                onClick={onClear}
                className='bg-indigo-800 text-white font-bold py-2 px-4 rounded'
            >
                Clear Cart
            </button>
        </div>
    </header>
)