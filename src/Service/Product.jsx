import React from 'react';
// {
//     "id": 1,
//     "cover": "https://i.ibb.co/x1hYSB8/3242342342342.jpg",
//     "title": "The Secret of the Crystal",
//     "author": "James Anderson",
//     "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
//     "reading_time": 32,
//     "published_date": "2024-04-18",
//     "hashtags": ["adventure", "mystery", "treasurehunt"]
//   },
const Product = ({product}) => {
    const {cover, title, author, published_date} = product;
    return (
        <div className='p-1  bg-slate-400 rounded-lg flex flex-col'>
            <img className='p-4' src={cover}  />
            <h3 className='text-start font-semibold ps-4'>{author}</h3>
            <h3 className='text-start w-[50%] ps-4 flex-grow'> {title}</h3>
            <div className='text-end'>
                <button className='btn btn-secondary'>CLICK HERE</button>
            </div>
        </div>
    );
};

export default Product;