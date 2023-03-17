import React from 'react';
import "./HeaderOption.css"


export default function HeaderOption({ img, title, onClick }) {


    return (
        <div onClick={onClick} className="headerOption">
            {img && <img style={{ width: '25px', height: '25px' }} src={img}></img>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}