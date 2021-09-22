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
        document.getSelection().removeAllRanges();
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
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'#151831':'white', color: props.mode==='dark'?'white':'black'}} rows="8" onChange={handleOnChange} value= {text}></textarea>
            </div>
            <button className="btn btn-danger mx-2 my-1" onClick={handleClear}>Clear!</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpper}>UPPER!</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLow}>lower!</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy!</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>Spaces!</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleItalics}>Italics!</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>

        </div>
        </>
    )
}
