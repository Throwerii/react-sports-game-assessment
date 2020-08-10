import React from 'react'
import './FrameImages.css'

import { render } from "@testing-library/react"
import { unstable_batchedUpdates } from 'react-dom'

export default class FrameImages extends React.Component{
    constructor(props){
        super(props)
        
    };
    playSound=(event) => {
        
    };
    render(){
        return (
            <div className='FrameImages'>
                <div className='Frame'>
                    <img src={this.props.image} alt={this.props.alt}/>
                </div>
                
            </div>
        );
    };


};
