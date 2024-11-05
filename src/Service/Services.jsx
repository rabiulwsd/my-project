import React, { useState } from 'react';
import Product from './Product';
import { data } from 'autoprefixer';

const Services = () => {
  const [dataLength, setDataLengh] = useState(4);
  const products = [
    {
      "id": 1,
      "cover": "https://i.ibb.co/x1hYSB8/3242342342342.jpg",
      "title": "The Secret of the Crystal",
      "author": "James Anderson",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 32,
      "published_date": "2024-04-18",
      "hashtags": ["adventure", "mystery", "treasurehunt"]
    },
    {
      "id": 2,
      "cover": "https://i.ibb.co/z5yQ5dB/fdgsssg.jpg",
      "title": "Shadows of Destiny",
      "author": "Sarah Johnson",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 46,
      "published_date": "2023-10-05",
      "hashtags": ["fantasy", "magic", "prophecy"]
    },
    {
      "id": 3,
      "cover": "https://i.ibb.co/cwLmdFh/dfgdfgfdfdgrtdffgdf.jpg",
      "title": "Echoes from the Past",
      "author": "David Roberts",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 12,
      "published_date": "2024-01-22",
      "hashtags": ["historicalfiction", "mystery", "romance"]
    },
    {
      "id": 4,
      "cover": "https://i.ibb.co/pb22314/dfghfgdanhjgsdasfshgdf.jpg",
      "title": "The Enigma of Time",
      "author": "Emily White",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 42,
      "published_date": "2023-07-30",
      "hashtags": ["sci_fi", "timetravel", "adventure"]
    },
    {
      "id": 5,
      "cover": "https://i.ibb.co/Hqnn1rf/lkjffdfg.jpg",
      "title": "Legends of the Lost Kingdom",
      "author": "Alexander Stone",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 43,
      "published_date": "2022-11-12",
      "hashtags": ["mythology", "adventure", "quest"]
    },
    {
      "id": 6,
      "cover": "https://i.ibb.co/Qp6HTfH/9.jpg",
      "title": "Legends of the Lost Kingdom",
      "author": "Alexander Stone",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 43,
      "published_date": "2022-11-12",
      "hashtags": ["mythology", "adventure", "quest"]
    },
    {
      "id": 7,
      "cover": "https://i.ibb.co/FBqVTyb/7.jpg",
      "title": "Legends of the Lost Kingdom",
      "author": "Alexander Stone",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 43,
      "published_date": "2022-11-12",
      "hashtags": ["mythology", "adventure", "quest"]
    },
    {
      "id": 8,
      "cover": "https://i.ibb.co/FBqVTyb/7.jpg",
      "title": "Legends parts of discusting",
      "author": "Alexander Stone",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 43,
      "published_date": "2022-11-12",
      "hashtags": ["mythology", "adventure", "quest"]
    },
    {
      "id": 9,
      "cover": "https://i.ibb.co/Qk70x9V/1.jpg",
      "title": "Legends of jsdkfjs sdkfjsdk wersdflkljsd sdfjsd",
      "author": "Alexander Stone",
      "author_img": "https://i.ibb.co/gr9ybfG/3.jpg",
      "reading_time": 43,
      "published_date": "2022-11-12",
      "hashtags": ["mythology", "adventure", "quest"]
    }]

  return (
    <div className='text-center mt-10 container mx-auto px-6'>
      <h3 className='uppercase text-4xl font-bold'>Here are Services</h3>
      <div className='grid mt-10 gap-7 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4'>{products.slice(0, dataLength).map(product => <Product key={product.id} product={product}></Product>)}</div>
      <div className={`mt-10 ${products.length === dataLength ? "hidden" : ""}`}><button className='btn btn-secondary' onClick={() => setDataLengh(products.length)}>See more...</button></div>
    </div>
  );
};

export default Services;