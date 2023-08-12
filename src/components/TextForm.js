import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // Function to convert text to uppercase
    const handleUpClick = () => {
        let upperCase = text.toUpperCase()
        setText(upperCase)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLoClick = () => {
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
        props.showAlert("Converted to LowerCase", "success")
    }
    
    const handleClear = () => {
        setText('')
        props.showAlert("Text Cleared", "success")
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark' ? '#042743' : 'white', color : props.mode === 'dark' ? 'white' : 'black' }} onChange={handleChange} placeholder='Enter text' id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary fst-italic mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-secondary fst-italic mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-danger mx-2' onClick={handleClear}>Clear</button>
            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length} Characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
