import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export default class About extends React.Component{



    render(){
       

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 19.295233, lng: 72.854393 }}>
    <Marker
      position={{ lat: 19.295233, lng: 72.854393 }}
    />
  </GoogleMap>
));
        return(
            <div>
                                    

                    <div className='container top-to-down my-4 align-items-center pt-sm-5 p-4'>
                        <h1 class='text-center mt-4 mt-sm-5 text-muted' >About us</h1>
                        <div className="container bg-light my-sm-3 my-md-1" style={{ borderRadius: '25px' }}>
                        <div className="p-md-4 m-md-5 p-2 p-sm-1">
                            <div className='row align-items-center'>
                            <img className="m-1 p-1" src="https://img.icons8.com/ios-glyphs/90/000000/energy-saving-bulb.png" style={{ height:'4rem',width:'4rem' }} className='p-1 m-sm-1' /><h2 className='pl-2'>Vision</h2>
                            </div>  
                            <p className="mbr-section-subtitle pl-5 pt-1 align-left mbr-fonts-style display-5" style={{ color: 'gray' }}>Add some useful information about your courses to this Bootstrap theme template. Please use numbers in a counter block. Counters are animated elements. Don't use text as a counter, it won't be shown.&nbsp;</p>
                        </div>
                        </div> 

                        <div className="container mt-3 mb-3 bg-light my-sm-3" style={{ borderRadius: '25px' }} id="contact_details">
                        <div className="p-md-4 m-md-5 p-2 p-sm-1">
                            <div className='row align-items-center'>
                            <img src="https://img.icons8.com/ios-filled/50/000000/new-contact.png" className='p-1 m-sm-1'  style={{ height:'4rem',width:'4rem' }} /><h2 className='pl-2'>Contact details</h2>
                            </div>  
                            <p className="mbr-section-subtitle pl-5 pt-1 align-left mbr-fonts-style display-5" style={{ color: 'gray' }}> Mumbai: 022-3266-3266</p>
                            <p className="mbr-section-subtitle pl-5 pt-1 align-left mbr-fonts-style display-5" style={{ color: 'gray' }}>Banglore: 022-3655-3655</p> 
                            <p className="mbr-section-subtitle pl-5 pt-1 align-left mbr-fonts-style display-5" style={{ color: 'gray' }}> Working hours: 09:00 am to 03:59 pm (Mon-Fri)</p>
                        </div>
                        </div> 
    
                    <div className="container mt-3 mb-3 bg-light " style={{ borderRadius: '25px' }} id='location'>
                            <div className="p-md-4 m-md-5  p-2 p-sm-1">
                            <div className='row align-items-center'>
                            <img className="m-1 p-1" src="https://img.icons8.com/pastel-glyph/64/000000/worldwide-location--v1.png" style={{ height: '4rem', width: '4rem'  }} /><h2 className='pl-2'>Location</h2>
                            </div>
                            <p className="mbr-section-subtitle pl-5 pt-2 mb-3 align-left mbr-fonts-style display-5" style={{ color: 'gray' }}>  405, Bhayander west, Thane, Maharashta, India. 401101 &nbsp;</p>
                            < div className = 'mt-md-2 pt-md-2' id='location'>   
                            <MapWithAMarker
                              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCH8ekqyMUkAOqX0wVHZbXp68yNK_LD0cg&v=3.exp&libraries=geometry,drawing,places"
                              loadingElement={<div style={{ height: `100%` }} />}
                              containerElement={<div style={{ height: `400px`,borderRadius:' 25px' }} />}
                              mapElement={<div style={{ height: `100%` }} />}
                             />
                             
                        </div>
                    </div>            
                </div>
            </div>
        </div>
        );
    }
} 