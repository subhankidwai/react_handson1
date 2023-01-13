import React, { Component } from 'react'
import './App.css'

class ClassComponent extends Component{
    render(){
        return(
            <div className='box2'>
                <h1>This is created using Class Component</h1>
                <p>This is done using external CSS</p>
                <p style={{color:'Blue'}}>This is done using inline CSS</p>
            </div>
        )
    }
}

export default ClassComponent