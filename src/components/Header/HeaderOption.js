import React from 'react';
import "./HeaderOption.css"


export default function HeaderOption({ img, title, onClick }) {

    return (
        <div onClick={onClick} className="headerOption">
            {img && <img style={{ width: '40px', height: '40px' }} src={img}></img>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}