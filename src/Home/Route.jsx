import React from 'react';

const Route = ({link}) => {
    const {path, name} = link;
    return (
        <li className='hover:text-red-700 '>
            <a href={path}>{name}</a>
        </li>
    );
};

export default Route;