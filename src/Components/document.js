import React from 'react'

import './document.css'
import logo from "./logo.png";
import Alert from 'react-bootstrap/Alert';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Document() {
    const link = '<link rel="stylesheet" href="style.css">'
    const linkt = '<link>'
    const headt = '<head>'
    const scriptt = '<script>'
    const bodyt = '<body>'
    const element = '<avintra></avintra>'
    const js = '<script src="https://api-avintra.azurewebsites.net/jsFiles/app18.js"></script>'
    return (
        <div className="body">

       
        <div className='container'>
            <div className="documentation">
            <div className="content">
                <h1 className='heading'>
                    Documentation
                </h1>
                <div className="css">
                    <h5 className='heading'>
                        Get started with Avintra, create chatbots for your website with ease and increase customer interaction.
                    </h5>
                    <br />
                    <h2 className='heading' >CSS</h2>
                    <h5 className='heading'>Copy-paste the stylesheet {linkt} into your {headt} before all other stylesheets to load our CSS.</h5>
                    <div className="row">
                        <div className="col-md-11">
                            <Alert variant='warning' className='code'>
                            {link}
                            </Alert>
                        </div>
                        <div className="col-md-1" style={{paddingTop: "9px"}}>
                            <CopyToClipboard text={link}>
                            <a className='btn btn-primary'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                                </svg> Copy</a>
                            </CopyToClipboard>
                        </div>
                    </div>
            </div>
            <br />
            <div className="html">
                <h2 className='heading'>HTML</h2>
                <h5 className='heading'>Add the below HTML element as it is for Avintra to show its magic!!!</h5>
                 <div className="row">
                        <div className="col-md-11">
                            <Alert variant='warning' className='code'>
                            {element}
                            </Alert>
                        </div>
                        <div className="col-md-1" style={{paddingTop: "9px"}}>
                            <CopyToClipboard text={element}>
                            <a className='btn btn-primary'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                                </svg> Copy</a>
                            </CopyToClipboard>
                        </div>
                    </div>
            </div>
            <br />
            <div className="js">
                <h2 className='heading'>JS</h2>
                <h5 className='heading'>Our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins. Place the following {scriptt} near the end of your pages, right before the closing {bodyt} tag, to enable them.</h5>
                 <div className="row">
                        <div className="col-md-11">
                            <Alert variant='warning' className='code'>
                            {js}
                            </Alert>
                        </div>
                        <div className="col-md-1" style={{paddingTop: "9px"}}>
                            <CopyToClipboard text={js}>
                            <a className='btn btn-primary'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                                </svg> Copy</a>
                            </CopyToClipboard>
                        </div>
                    </div>
            </div>
            </div>
            </div>
        </div>
         </div>
     
    )
} 