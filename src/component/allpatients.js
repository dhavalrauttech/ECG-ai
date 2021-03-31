import React from 'react';
import axios from 'axios';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default class AllPatients extends React.Component{
 



 

	render(){
     const scrollContainerStyle = { width: "100%", maxHeight: "400px" };
		return(
       <div>
        <div className=" p-1  bg-white   shadow "  style={{ marginTop:'4rem', marginRight:'2rem', borderRadius:'20px'}}>
        <div className="text-center p-2">
                <h3>Patients</h3>
              </div>
				<div className='overflow-auto m-2 scrollbar scrollbar-primary' >
          <div className='p-2 ' style={{ width:'100%', height:'65rem'}}> 
            
             
        <div className="row mt-2 col-12 press-btn"  >
            <div className="col-4 col float-left text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3  "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        <div className="row mt-2 col-12 press-btn"  >
            <div className="col-4 col float-left text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3  "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        <div className="row mt-2 col-12 press-btn"  >
            <div className="col-4 col float-left text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3  "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        <div className="row mt-2 col-12 press-btn"  >
            <div className="col-4 col float-left text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3  "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        <div className="row mt-2 col-12 press-btn"  >
            <div className="col-4 col float-left text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3  "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        <div className="row mt-2 col-12 press-btn"  >
            <div className="col-4 col float-left text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3  "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        <div className="row mt-2 col-12 press-btn"  >
            <div className="col-4 col float-left text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3  "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        <div className="row mt-2 col-12 press-btn  "  >
            <div className="col-4 col float-left shadow text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3 shadow "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        <div className="row mt-2 col-12 press-btn"  >
            <div className="col-4 shadow col float-left text-right p-3 press-btn  bg-primary align-items-end" style={{borderBottomLeftRadius: "50px"
   , borderTopLeftRadius: '50px'}}>
                        <h6 className="  text-center text-white rounded p-2" data-toggle="modal" data-target="#myModal"><i className="fas fa-arrow-left fa-2x  h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
             
             <div className=" col-8 bg-light p-3 shadow "  style={{borderBottomRightRadius: "50px"
   , borderTopRightRadius: '50px'}}>
                <span className="row col-12 font-weight-bold ">Dhaval raut</span>
                 
                <span className="row col-12 text-muted">Status: <span className=" font-weight-bold pl-1"> Normal</span> </span>
              </div>     
           
    </div>

        
             
            </div>
          </div> 


 
</div>
</div>

		);
	}
}