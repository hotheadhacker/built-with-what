import React, {useState} from 'react'
import axios from 'axios'
import preloader from './preloader.gif'

function Form() {
    const [data, setData] = useState('');
    const [print,setPrint]=useState(false)
    const [btnState,setBtnState]=useState(true)
    const [space,setSpace]=useState(false)
    const [apiData,setApiData]=useState('loading...')


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
        else if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(data)) {
            console.log("correct");
            setData(''); //clear state buffer for user
            // Send data to API
            // var newUrl = 
            console.log("clicked");
            axios.get('http://127.0.0.1:8000/get/' + data)
                .then((response) => {
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response.statusText);
                    console.log(response.headers);
                    console.log(response.config);
                    setApiData(response.data);
                    setSpace(true)
                });
        }
        else{
            alert("Please enter a valid URL. (eg) isalman.xyz")
        }

    }
    return (
      <div className="container bg-white" style={{paddingTop: "5%"}}>
        <div className="heading1" style={{textAlign: "center"}}>
            <h2 style={{textAlign: "center"}}>Enter a Valid url {data}</h2>
            <small>Without http or https</small>
        </div>
        <div style={{textAlign: "center"}}>
            <input type="text"
            // className='form-control border-dark'
            placeholder='https://example.com'
            autocomplete="off" 
            value = {data}        
            onChange={getData}
            required
            />
        </div>
        <div style={{textAlign: "center"}}>
            <button className="btn-success"
            disabled = {btnState}
            onClick={() => {submitData()}}
            >Get Details</button>
        </div>

        {/* show details of website */}

        <div>
        
        
        {space ? apiData.cdn : <center><img src={preloader} alt="Preloader" /></center>}
            
        </div>
      </div>
    );
  }
//   i am lonely af 
  export default Form;
  