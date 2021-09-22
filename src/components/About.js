import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor: 'white'
    // })
    
    let myStyle = {
        color: props.mode ==='dark'?'white':'#003b69',
        backgroundColor: props.mode ==='dark'?'#003b69':'white',
        border: '2px solid',
        borderColor: props.mode ==='dark'?'white':'#003b69',
    }


    return (
        <div className="container">
            <h1 className = "my-3" style = {{color: props.mode ==='dark'?'white':'#003b69'}} >About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong> Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           textutils gives you a way to analyze your text quickly and effectively. Be it word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            MyApp is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reportsthe number of words and characters. Thus it is suitable for writing text with word/ character limit. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browser such as chrome, firefox, Internet Explorer, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
