import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleClear = ()=> {
        let newText = '';
        setText(newText);
    }
    const handleUpper = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }
    const handleLow = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    const handleItalics = ()=> {
        let newText = text.italics();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text Coppied successfully","success");
    }
    const handleSpaces = ()=>{
        var newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed successfully","success");
    }

    const [text, setText] = useState('');
    // setText("new Text");

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8" onChange={handleOnChange} value= {text}></textarea>
            </div>
            <button className="btn btn-danger mx-2" onClick={handleClear}>Clear!</button>
            <button className="btn btn-primary mx-2" onClick={handleUpper}>UPPER!</button>
            <button className="btn btn-primary mx-2" onClick={handleLow}>lower!</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy!</button>
            <button className="btn btn-primary mx-2" onClick={handleSpaces}>Spaces!</button>
            <button className="btn btn-primary mx-2" onClick={handleItalics}>Italics!</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Something to preview it here"}</p>

        </div>
        </>
    )
}
