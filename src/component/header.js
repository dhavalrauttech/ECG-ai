/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default class Header extends React.Component{
    render(){

        return(
        <div>   
            
            <div className=" position-relev  headerback large-shadow"   id="header">
                <div className=" mx-auto row pr-5 pl-5 pt-5">
                        <div className=" col-md-5 left-to-right col-md-5 p-lg-5 mx-auto my-5 text-color">
                        <h1 className="display-3 mt-5 text-light  font-weight-bold" style={{ fontSize:"60px" }}>ECG ai</h1>
                        <p className="lead text-warning font-weight-normal" style={{fontSize: "25px"}}>A complete solution for remote ECG monitoring with the help of AI.</p>
                        <a className="btn btn-outline-warning rounded-pill p-2 font font-weight-bold " href="#">Coming soon</a>
                    </div>
                    <div className=" col-md-5  right-to-left mt-lg-5 h-svg mt-md-4 mb-md-2 mt-sm-1 mb-sm-3 pt-md-3 pt-sm-2 pt-lg-5">
                        <img src='./images/doctor_ECG-2.SVG'  className="img-fluid "/>
                    </div>
                </div>
           </div>
        </div>
        );
    }
}

