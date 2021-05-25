import React from 'react'
export default function ApiDetails(){
    return(
        <div className="container borderApi mt-4 mb-4 text-white">
            <center><h1 className="text-warning"><u>About</u></h1></center>
        <p style={{fontSize: "20px"}} className="my-4"> 
            This App Works on Open API developed by <a href="isalman.xyz?ref=builtwithwhat" target="_blank">Salman Qureshi</a>, The full documentation of API will be updated here<br/>
            <span className="text-warning">With this portal or API you can get all information about any website, what it is made up of, what technology it uses --Reverse Engineering.</span>
            <br/>
            <b>Features:</b>
            <ul>
                <li>Live API End-Point Testing <a href="#" target="_blank">here</a></li>
                <li>Cross-Origin Support <small className="text-warning">(No <span className="text-secondary">CORS</span> problem)</small></li>
                <li>Open-Source</li>
                <li>No API Call Limits</li>
                <li>Developer Friendly</li>
                <li>Want to contribute or wanna check source-code <a href="https://github.com/hotheadhacker/built-with-what" target="_blank">hotheadhacker/built-with-what</a></li>

            </ul>
        </p>
        <blockquote className="blockquote text-center">
            <p className="text-warning"><span className="text-danger">Note: </span>This project is in beta phase! There might be some errors ❌ or bugs bugs 🐛 </p>
            <footer className="blockquote-footer text-white">🔉 <cite title="Source Title">If you found one, kindly mail 📧 me@isalman.xyz</cite></footer>
        </blockquote>
        </div>
    )
}