import React from 'react';
import axios from 'axios';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default class AddDoctor extends React.Component{
 



 

	render(){
     const scrollContainerStyle = { width: "100%", maxHeight: "400px" };
		return(
       <MDBContainer>
        <div className="   " style={{ marginTop: '7rem'}}>
        <div className="text-center p-2">
                <h3>Add Doctor</h3>
              </div>
				<div className='overflow-auto m-2 scrollbar scrollbar-primary' >
          <div className='p-2 ' style={{ width:'100%', height:'25rem'}}> 
            
            <div className="container mar-no-shadow right-to-left col-6  shadow border border-white container-btn bg p-1 mt-5 text-lg-center" style={{ borderRadius: '25px'}}>
        <div className="row p-1"  >
            <div className="col-md-3 col p-3">
              <div className="text-center">
               <h6 className=" ">ID:521/MUM/12</h6>
              </div>
            </div>  
             <div className="col-md-6 col p-2">
                <h3>Dr.Ramesh Singh</h3>
              </div>     
                 <div className="col-md-3 col float-left text-right align-items-end">
                        <h6 className="btn btn-success press-btn rounded-circle" data-toggle="modal" data-target="#myModal"><i className="fas fa-plus h-svg" data-toggle="modal" data-target="#myModal"/></h6>
                    </div>
         </div>
    </div> 
     
            <div className="container mar-no-shadow right-to-left  col-6 shadow border border-white container-btn bg p-1 mt-5 text-lg-center" style={{ borderRadius: '25px'}}>
        <div className="row p-1"  >
            <div className="col-md-3 col p-3">
              <div className="text-center">
               <h6 className=" ">ID:521/MUM/12</h6>
              </div>
            </div>  
             <div className="col-md-6 col p-2">
                <h3>Dr.Ramesh Singh</h3>
              </div>     
                 <div className="col-md-3 col float-left text-right align-items-end">
                        <h6 className="btn btn-success press-btn rounded-circle" data-toggle="modal" data-target="#myModal" ><i className="fas fa-plus h-svg"/></h6>
                    </div>
         </div>
    </div> 
         <div className="container mar-no-shadow right-to-left  col-6 shadow border border-white container-btn bg p-1 mt-5 text-lg-center" style={{ borderRadius: '25px'}}>
        <div className="row p-1"  >
            <div className="col-md-3 col p-3">
              <div className="text-center">
               <h6 className=" ">ID:521/MUM/12</h6>
              </div>
            </div>  
             <div className="col-md-6 col p-2">
                <h3>Dr.Ramesh Singh</h3>
              </div>     
                 <div className="col-md-3 col float-left text-right align-items-end">
                        <h6 className="btn btn-success press-btn rounded-circle" data-toggle="modal" data-target="#myModal" ><i className="fas fa-plus h-svg"/></h6>
                    </div>
         </div>
    </div>

            <div className="container mar-no-shadow right-to-left mb-5 col-6 shadow border border-white container-btn bg p-1 mt-5 text-lg-center" style={{ borderRadius: '25px'}}>
        <div className="row p-1"  >
            <div className="col-md-3 col p-3">
              <div className="text-center">
               <h6 className=" ">ID:521/MUM/12</h6>
              </div>
            </div>  
             <div className="col-md-6 col p-2">
                <h3>Dr.Ramesh Singh</h3>
                <div className='col-12 text-center'>
                 
                  
            
                </div>
              </div>     
                 <div className="col-md-3 col float-left text-right align-items-end">
                        <h6 className="btn btn-primary press-btn rounded-circle"><i className="fas fa-check h-svg"/></h6>
                    </div>
         </div>
    </div> 
         <div className="container mar-no-shadow right-to-left  col-6 shadow border border-white container-btn bg p-1 mt-5 text-lg-center" style={{ borderRadius: '25px'}}>
        <div className="row p-1"  >
            <div className="col-md-3 col p-3">
              <div className="text-center">
               <h6 className=" ">ID:521/MUM/12</h6>
              </div>
            </div>  
             <div className="col-md-6 col p-2">
                <h3>Dr.Ramesh Singh</h3>
              </div>     
                 <div className="col-md-3 col float-left text-right align-items-end">
                        <h6 className="btn btn-success press-btn rounded-circle" data-toggle="modal" data-target="#myModal" ><i className="fas fa-plus h-svg"/></h6>
                    </div>
         </div>
    </div>
         <div className="container mar-no-shadow right-to-left  col-6 shadow border border-white container-btn bg p-1 mt-5 text-lg-center" style={{ borderRadius: '25px'}}>
        <div className="row p-1"  >
            <div className="col-md-3 col p-3">
              <div className="text-center">
               <h6 className=" ">ID:521/MUM/12</h6>
              </div>
            </div>  
             <div className="col-md-6 col p-2">
                <h3>Dr.Ramesh Singh</h3>
              </div>     
                 <div className="col-md-3 col float-left text-right align-items-end">
                        <h6 className="btn btn-success press-btn rounded-circle" data-toggle="modal" data-target="#myModal" ><i className="fas fa-plus h-svg"/></h6>
                    </div>
         </div>
    </div>
         <div className="container mar-no-shadow right-to-left  col-6 shadow border border-white container-btn bg p-1 mt-5 text-lg-center" style={{ borderRadius: '25px'}}>
        <div className="row p-1"  >
            <div className="col-md-3 col p-3">
              <div className="text-center">
               <h6 className=" ">ID:521/MUM/12</h6>
              </div>
            </div>  
             <div className="col-md-6 col p-2">
                <h3>Dr.Ramesh Singh</h3>
              </div>     
                 <div className="col-md-3 col float-left text-right align-items-end">
                        <h6 className="btn btn-success press-btn rounded-circle" data-toggle="modal" data-target="#myModal" ><i className="fas fa-plus h-svg"/></h6>
                    </div>
         </div>
    </div>
 
             
            </div>
          </div> 


 
</div>
</MDBContainer>

		);
	}
}