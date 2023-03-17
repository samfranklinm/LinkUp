import React from 'react'
import './InputOption.css'

function InputOption({ img, title, Icon }) {
    return (
        <div className="inputOption">
            {img && <img style={{ width: '38px', height: '38px', color: '#000000' }} src={img}></img>}
            {Icon && <Icon style={{ color: '#000000' }} />}
            <h4 style={{ color: '#000000' }}>{title}</h4>
        </div>
    )
}

export default InputOption
