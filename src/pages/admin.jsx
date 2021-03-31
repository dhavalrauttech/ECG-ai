import React from 'react';
import '../css/main.css';
import * as Bluetooth from 'react-bluetooth';
import Navbar from '../components/navbar';
import Charts from '../components/charts'; 
import BPMchart from '../components/bpmchart';
import HRChart from '../components/hrchart'; 
import Footer from '../components/footer';
import DoctorDashNav from '../components/doctordashnav';
import LineChart from '../components/linechart';
import Plotly from '../components/plotly';

import axios from 'axios';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


var ECGData = [];
var loding = true;
const Admin = ({match}) => { 
 
   	const onClickSubmit = (e) =>{
    	   axios.get('http://localhost:5000/serialport/')
        .then(response => {
                   ECGData = response.data;
                   console.log(ECGData);
			         loding = false;
      	})
        .catch((error) => {
                    alert('Please connect ecg deviec')
                    loding= false;
        }) 




	}
 
 
    

console.log(loding);




    return(
        <div>
        <Navbar/>
        
		<div className='bg-light' style={{ marginTop: '4rem'}}>	        
		 
		
		 
				<div className='col-sm-12  p-2'>
					<div className=''>
						<Charts style={{marginTop:'5rem'}} match={match}/>
					</div>
				</div>
			 	
		 		<HRChart/>
		 		
		 
	        <Footer/>
        </div>
    </div>

    );
}
export default Admin;