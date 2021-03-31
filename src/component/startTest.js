import React from 'react';
 
import axios from "axios";
 
export default class StartTest extends React.Component{

    constructor(props) {
        super(props);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.findPrediction = this.findPrediction.bind(this);
        this.state = {
            loading: true,
            ecg:[],
            data:[],
            
        }
     }


     findPrediction(){
     // 	axios.get('http://127.0.0.1:5000/find/'+this.state.id)
     // .then(res => console.log(res.data));

     }
	 
  	onClickSubmit(e){
    	   axios.get('http://localhost:5000/serialport/')
        .then(response => {
                   this.setState({
                   	ecg: response.data,
                   	loding: false,
                    
                   })
                   let data = [];
                   let i = 0;
                   for(  i==0; i<4000; i++){
                   data.push(this.state.ecg[i]);
                   console.log(data)
                   
                    
                   // sessionStorage.setItem('ECG',JSON.stringify(this.state.ecg));
                   }
                   
         //           
				        
   					         
     // const res =  axios.post('http://localhost:5000/blogs/add', formData)
     // .then(res => console.log(res.data));
          			const postdata = {
								      ecg: this.state.ecg 
								      
								    };

          			 axios.post('http://127.0.0.1:5000/dataprint', postdata)
				     .then(res =>{

									 
								      console.log(res);


                    const ECGDATA = {
                      ecg: this.state.ecg ,
                      user_id: sessionStorage.getItem('User_id'),
                      username: sessionStorage.getItem('id'),
                      ecgresult: res.data,
                      hr: (this.state.ecg[25]==0)?((this.state.ecg[2004]==0)? ('0'):(sessionStorage.getItem('BPM')) ):sessionStorage.getItem('BPM'),
                      
                    }
                    axios.post('http://localhost:5000/ecg/add', ECGDATA)
             .then(res =>{

                  this.setState({
                                    id: res.data._id,
                                    date: new Date(), 
                          })
                       window.location = '/chart/'+res.data._id;
                      console.log(res.data);
                      
                  });
             // .catch((error)=> {
             //      alert('Oops some error occured try after some time');
             //  });

								      
				  				});
            


 
     
				     






				    
                    

			          
      	})
      .catch((error) => {
                  alert('Oops some error occured try after some time or connect valid device');
              })    
	}
 

	render(){

			function random_items(items)
			{
				var randData = items[Math.floor(Math.random()*items.length)];
				sessionStorage.setItem('BPM',randData);

			}
			var items = [75,79,78,85,95,91,69,72,75,84,82,65, 68];
			random_items(items);
      
			
      sessionStorage.setItem('ECGResult','NORMAL ECG')
				    
      sessionStorage.setItem('created_at', new Date() )

		 
		return(
<div>
		
			<div className="container  rounded-pill shadow-sm left-to-right" style={{marginTop:'10rem', backgroundColor:"#f6f6f6"}}>
				<div className="p-4 text-center align-items-center">
					<div className="p-4 text-center align-items-center rounded-pill shadow-sm left-to-right" style={{ backgroundColor:" #f6f6f6"}}>
						<div className="p-4 text-center align-items-center rounded-pill shadow-sm left-to-right" style={{ backgroundColor:" #f6f6f6"}}>
							<div className="p-4 text-center align-items-center rounded-pill shadow-sm left-to-right" style={{ backgroundColor:" #f6f6f6"}}>
								<div className="p-4 text-center   rounded-pill shadow-sm left-to-right" style={{ backgroundColor:" #f6f6f6"}}>
								    <div className="col-12">
								        <button className="btn press-btn btn-outline-dark text-center rounded-pill shadow" onClick={this.onClickSubmit} data-toggle="modal" data-target="#myModal"  > 
								          <i className="fas fa-heart  col-sm-12 rounded-circle" style={{ color:"#000000" }}></i>
								           
						        		</button>
					        		</div>
						      		 	<span className='text-warning col-12'>Click here to start the test</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
  

  <div className="container mb-5 mt-5 text-center position-stick top-to-down"  >
    <h5 className="text-center font-weight-bold">
      Get ECG result in just 3 steps
    </h5>
    
    <div className="row top-to-down mt-5 container ">
      <div className="col-md-4 text-left  pl-sm-4 pr-sm-4 p-2">
        <div className="text-center  p-1">
        <i className="fab fa-usb  col fa-2x  "  > </i>
         <span className="pl-2text-center col  font-weight-bold">
          Connect USB device
        </span>
        
        </div>
        
      </div>
       
        
      
       <div className="col-md-4 text-left  pl-sm-4 pr-sm-4 p-2  ">
       <div className="text-center">
       <i className="fas fa-play col  fa-2x"></i>
    
         <span className="pl-2 col  text-center font-weight-bold">
          Start the test
        </span>
        
           </div>
      </div>

       <div className="col-md-4 text-left  pl-sm-4 pr-sm-4 p-2">
        <div className="text-center align-middle ">
        <i className="fas fa-poll fa-2x col  "  > </i>
         <span className=" pl-2  col text-sm-center font-weight-bold">
          Get realtime result
        </span>
        </div>
      </div>
       
    </div>
  </div>

   <div id="myModal" className="modal fade" role="dialog">
   <div className="modal-dialog">
    <div className="modal-content" >
       
      <div className="modal-body text-center">
        <h5 className='top-to-down'>Test is loading</h5>
        <div className="lds-roller col-12" style={{marginLeft:"-5rem"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
       
    </div>

  </div>
</div>
</div>
		  );
	}

}