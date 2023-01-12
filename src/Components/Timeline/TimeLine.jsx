import React from 'react'
import Modal from '../Modal/Modal'
import Terminal from '../Terminal/Terminal'
import "./style.css"

export default function TimeLine() {
    return (
        <Modal element={<Terminal element={<TimeLineBody />}/>} />  
    )
}

const TimeLineBody = ()=>{
    return (
        <div className='timeline-body'>
            <div className='text-dull'>&gt;&gt; 25TH - 25TH FEBRUARY</div>
            <div className='text-dull'>&gt;&gt; 25TH - 25TH FEBRUARY</div>
            <div className='text-dull'>&gt;&gt; 25TH - 25TH FEBRUARY</div>
            <div className='text-bright'>&gt;&gt; 25TH - 25TH FEBRUARY</div>
            <div className='text-dull'>&gt;&gt; 25TH - 25TH FEBRUARY</div>
            <div className='text-dull'>&gt;&gt; 25TH - 25TH FEBRUARY</div>
            <div className='text-bright'>&gt;&gt; 25TH - 25TH FEBRUARY</div>
            <div className='text-dull'>&gt;&gt; 25TH - 25TH FEBRUARY</div>
        </div>
    )
}