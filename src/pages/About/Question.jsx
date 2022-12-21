import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Questions = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className='question1'>
            <header>
                <h4 style={{fontSize: '1rem', fontWeight: 'bold'}}>
                    {title}
                </h4>
                <button className='btn1' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {showInfo && <p style={{fontSize: '0.875rem', lineHeight: '1.5', textAlign: 'justify'}}>{info}</p>}
        </div>
    );
}

export default Questions;