import React, {useState} from 'react'
import axios from 'axios'
import preloader from './preloader.gif'

function Form() {
    const [data, setData] = useState('');
    const [print,setPrint]=useState(false)
    const [btnState,setBtnState]=useState(true)
    const [space,setSpace]=useState(false)
    const [apiData,setApiData]=useState('loading...')
    const [buffer,setBuffer]=useState('Enter Domain Name To Get Details....')
    const [showDomain, setDomain] = useState('')


    var result = [];

    // Test 
    // const [apiDataTemp,setApiDataTemp]=useState()


    // Function For Saving text to state
    function getData(val){
        // console.warn(val.target.value)
        setData(val.target.value)
        if(data !== ''){
            setBtnState(false)
        }
        if(data === ''){
            setBtnState(true)
        }
        setPrint(false)
    }
    // Send data to API server
    function submitData(){
        
        if(data === ''){
            setBtnState(true)
            alert("URL can't empty!")
        }
        else if (/(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}$)/.test(data)) {
            console.log("correct");
            // setData(''); //clear state buffer for user
            // Send data to API
            // var newUrl = 

            // Set loading gif after click
            setSpace(false)
            setBuffer(<img src={preloader} alt="Preloader" />)
            console.log("clicked");
            axios.get('https://glacial-taiga-01626.herokuapp.com/get/' + data)
                .then((response) => {
                    console.log(response.data);
                    // console.log(response.status);
                    // console.log(response.statusText);
                    // console.log(response.headers);
                    // console.log(response.config);
                    // JSON.parse()
                    setApiData(response.data);
                    setDomain(data)
                    setSpace(true)
                    // domainURL = data;
                    // var data2 = JSON.parse(response.data)
                    // console.log(str);
                    // for(var i in response.data){
                    //     result.push([i, response.data [i]]);
                    // }
                    console.log(typeof(apiData));
                    
                    // console.log(result);
                    // console.log(typeof(data2));
                });
        }
        else{
            alert("Please enter a valid URL. (eg) isalman.xyz")
        }

    }
    return (
      <div className="container bg-white mb-4" style={{paddingTop: "5%", paddingBottom: "5%"}}>
        <div className="heading1" style={{textAlign: "center"}}>
            <h1 style={{textAlign: "center"}} className="fontOsawld">Enter a Valid Domain Name</h1>
            <small className="text-danger">Without http or https</small>
        </div>
        <div style={{textAlign: "center"}}>
            <input type="text"
            className='border-success mt-3 col-5'
            placeholder='example.com'
            autoComplete="off" 
            value = {data}        
            onChange={getData}
            required
            />
        </div>
        <div style={{textAlign: "center"}}>
            <button className="btn-success mt-3"
            disabled = {btnState}
            onClick={() => {submitData()}}
            >Get Details</button>
        </div>

        {/* show details of website */}

        <div className="mt-4">
        {/* .map(s => (<li>{s}</li>)) */}
        {space ?

         <div style={{ textAllign: "center", justifyContent: "center", marginLeft: "10%", marginRight: "10%", fontSize: "35px", backgroundColor: "#e6e8e6"}} className="border border-warning mb-4">
            <center>
             <h3 className="text-primary"><i className="fa fa-chain text-info mx-2"></i> <u>Details For: {showDomain}</u></h3>
            </center>
             
             {/* {domainURL} */}
             <div style={{paddingLeft: "5%"}}>
             
             {apiData["programming-languages"] ? <p className = "fontOsawld"><i className="fa fa-laptop mx-2"></i>Programming Languages: {apiData["programming-languages"]}</p> : null}
             {apiData["programming-languages"] ? <p className = "fontOsawld"><i className="fa fa-hourglass-1 mx-2"></i>CDN: {apiData["cdn"]}</p>: null}
             {apiData["font-scripts"]?  <p className = "fontOsawld"><i className="fa fa-font mx-2"></i>Fonts: {apiData["font-scripts"]}</p>: null}
             {apiData["javascript-frameworks"] ? <p className = "fontOsawld"><i className="fa fa-bolt mx-2"></i>Javascript Frameworks: {apiData["javascript-frameworks"]}</p>: null}
             {apiData["javascript-graphics"] ? <p className = "fontOsawld"><i className="fa fa-file-movie-o mx-2"></i>Javascript Graphics: {apiData["javascript-graphics"]}</p>: null}
             {apiData["web-frameworks"] ? <p className = "fontOsawld"><i className="fa fa-compass mx-2"></i>Web Frameworks: {apiData["web-frameworks"]}</p>: null}
             {apiData["web-servers"] ? <p className = "fontOsawld"><i className="fa fa-server mx-2"></i>Web Server: {apiData["web-servers"]}</p>: null}
             {apiData["blogs"] ? <p className = "fontOsawld"><i className="fas fa-blog mx-2"></i>Blogs: {apiData["blogs"]}</p>: null}
             {apiData["cms"] ? <p className = "fontOsawld"><i className="fa fa-indent mx-2"></i>CMS: {apiData["cms"]}</p>: null}
             {apiData["ecommerce"] ? <p className = "fontOsawld"><i className="fa fa-dollar mx-2"></i>E-commerce: {apiData["ecommerce"]}</p>: null}
             {apiData["photo-galleries"] ? <p className = "fontOsawld"><i className="fa fa-photo mx-2"></i>Photo Galleries: {apiData["photo-galleries"]}</p>: null}

             {apiData["tag-managers"] ? <p className = "fontOsawld"><i className="fa fa-tags mx-2"></i>Tags Manager: {apiData["tag-managers"]}</p>: null}
             {apiData["analytics"] ? <p className = "fontOsawld"><i className="fa fa-bar-chart mx-2"></i>Analytics: {apiData["analytics"]}</p>: null}
             {apiData["miscellaneous"] ? <p className = "fontOsawld"><i className="fa fa-plus mx-2"></i>Miscellaneous: {apiData["miscellaneous"]}</p>: null}

             </div>
         </div> 
         
         :
         <center>{buffer}</center>}
            
        </div>
      </div>
    );
  }
//   i am lonely af 
export default Form;
  