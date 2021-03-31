import React from 'react';

export default class Footer extends React.Component {
render(){
    return(
            <footer className="container py-5" >
                <div className="row text-light">
                    <div className="col-12 col-md text-dark align-items-center   text-center" >
                        <img src="https://img.icons8.com/color/96/000000/medical-heart.png" className='p-2 m-2' style={{borderRadius:'50px', border:'4px solid #e6e7e9', width: '5rem', height:'5rem'}}/>
                        <h6 className="d-block  text-dark mb-3 text-center">ECG_ai&reg;</h6>
                    </div>
                    <div className="col-6 col-md text-dark">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/#features">Device Features</a></li>
                            <li><a className="text-muted" href="/#ecgfeatures">Ecosystem features</a></li>
                            <li><a className="text-muted" href="#">Team feature</a></li>
                            <li><a className="text-muted" href="#">Stuff for developers</a></li>
                            <li><a className="text-muted" href="#">Another one</a></li>
                            <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-6 col-md text-dark">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Business</a></li>
                            <li><a className="text-muted" href="#">Education</a></li>
                            <li><a className="text-muted" href="#">Government</a></li>
                            <li><a className="text-muted" href="#">Gaming</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md text-dark">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Team</a></li>
                            <li><a className="text-muted" href="/about#location">Locations</a></li>
                            <li><a className="text-muted" href="#">Privacy</a></li>
                            <li><a className="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>

                </div>
                <div className='text-center'>
                    <small class='text-center text-small text-muted p-2 m-2'> All rights reserved by ECGai&reg;</small>
                </div>
            </footer>
    );
}
}