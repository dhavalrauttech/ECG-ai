import React ,{ Component }from 'react';
import axios from 'axios';
import params from 'params';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'moment'
import getdata from '../pages/blog';
import '../css/main.css';
import { parse } from 'date-format-parse';


export default class HRChart extends React.Component {

constructor(props) {
   
   super(props);
     
    this.state = {
        allHrchart: [] ,
         
         
    };
  } 

componentDidMount() {
 if(!sessionStorage.getItem('id')){
     window.location = '/login';
  }
 
 
    axios.get('http://localhost:5000/ecg')
          .then(res => { 
            res.data.map( ECGS => {
               if(ECGS.user_id == sessionStorage.getItem("User_id") )
               {
                var joined = this.state.allHrchart.concat(ECGS);
                this.setState({ allHrchart: joined })
               }
            });
            console.log(this.state);
          })
      .catch((error) => {
        alert(error)
        })

}

	render(){

 var HrChartData =   this.state.allHrchart.reverse().map( ECGData => { 
						var link = '/chart/'+ECGData._id; 
                 return(<a className="chart-hover " href={link}>  
                 		<tr className="row">
				              <td className='text-center font-weight-bold col-3'>{Moment(ECGData.createdAt).format("DD-MM-YYYY LTS")}</td>
				              <td className='text-center font-weight-bold col-3'>{ECGData.username}</td>
				             
				              <td className='text-center font-weight-bold  col-3'>{ (ECGData.ecgresult == "Arrhythmia present")?("Arrhythmia"):("Normal")}</td>
				                    <td className='text-center font-weight-bold col-3'>{ECGData.HR}<spam className='text-small text-muted' ><small>BPM</small></spam></td>
				               
				              
				            </tr>
				    </a>);
             });




return(
<div className='container pl-md-5 pr-md-5 col-md-10 col-12'>
			<div className='mx-auto text-muted'><h5> Previous Reports</h5></div> 
					<div className="m-3 shadow p-2 bg-white" style={{ height: '20rem', width: '100%', borderRadius: '25px' }} >
					<table className="table table-sm p-3 rounded-pill bg-dark text-white " >
						<thead className="">
							<tr className="col-12 row pb">
								<th className='text-center col-3 text-light font-weight-bold'>Time</th>
								<th className='text-center col-3 text-light font-weight-bold'>Name</th>

								<th className='text-center col-3 text-light font-weight-bold'>Result</th>
								<th className='text-center col-3 text-light font-weight-bold'>BPM</th>
								 
							</tr>
						</thead>
					</table>
						<div className='overflow-auto ' style={{ height: '15rem' }} >
						
					
						<table className="table table-sm p-3 text-center">
						<tbody>
						{HrChartData}

				             
				          
						</tbody>
				    </table>
				</div>
			     </div>
			</div>
			);
}
}
