import React from 'react';
import '../css/main.css';
import * as Bluetooth from 'react-bluetooth';
import Navbar from '../components/navbar';
import DoctorDashBoard from '../components/doctordash'; 
import BPMchart from '../components/bpmchart';
import HRChart from '../components/hrchart'; 
import Footer from '../components/footer';
import DoctorDashNav from '../components/doctordashnav';
import LineChart from '../components/linechart';
import Plotly from '../components/plotly';
import AllPatients from '../components/allpatients';

import axios from 'axios';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


var ECGData = [];
var loding = true;
const DrDashboard = ({match}) => { 
 
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
        <div >
        <Navbar/>
        
		<div className='bg-light ' style={{ marginTop: '4rem'}}>	
		<div className='    row'  >        
		 <div className='  col-8' >
		
		 
				<div className='col-sm-12  p-2'>
					<div className=''>
						<DoctorDashBoard style={{marginTop:'5rem'}} match={match}/>
					</div>
				</div>
			 	
		 		 <div className=' pl-md-5 pr-md-5   col-12'>
			<div className='mx-auto text-muted pl-4'><h5> Patient's previous Reports</h5></div> 
					<div className="m-3 shadow p-2 bg-white" style={{ height: '20rem', width: '100%', borderRadius: '15px' }} >
					<table className="table table-sm p-3 rounded bg-secondary text-white " >
						<thead className="">
							<tr className="col-12 row pb">
								<th className='text-center col-3 text-light font-weight-bold'>Time</th>
								<th className='text-center col-3 text-light font-weight-bold'>Name</th>

								<th className='text-center col-2 text-light font-weight-bold'>Result</th>
								<th className='text-center col-2 text-light font-weight-bold'>BPM</th>
								<th className='text-center col-2 text-light font-weight-bold'>View</th>
								 
							</tr>
						</thead>
					</table>
						<div className='overflow-auto ' style={{ height: '15rem' }} >
						
					
						<table className="table table-sm p-3 text-center">
						<tbody>
						 
							<tr className="col-12 row pb">
								<td className='text-center col-3 text-dark font-weight-bold'>24/02/2020</td>
								<td className='text-center col-3 text-dark font-weight-bold'>Dhaval Raut</td>

								<td className='text-center col-2 text-dark font-weight-bold'>Normal</td>
								<td className='text-center col-2 text-dark font-weight-bold'>52BPM</td>
								<td className='text-center col-2   press-btn bg-primary p-2 rounded-pill font-weight-bold text-white'> <i className="fas fa-eye h-svg" style={{color:"#ffffff"}}/> View </td>
								 
							</tr>
				             
				          
						</tbody>
				    </table>
				</div>
				</div>
			</div>
		 		</div>
		 		 <div className=' col-4'  >
		 		 <div className='col-sm-12  p-2'>
					<div className=''>
						  <AllPatients />
					</div>
				</div>
		 		 </div>
		 </div>
	        <Footer/>
        </div>
    </div>

    );
}
export default DrDashboard;