import React from 'react';


import '../css/not.css';

const NotFound = () => {
       
		return(
			
<section className="wrapper" style={{ background:'linear-gradient(40deg,#d341f5,#ffffff)' }}>

        <div className="container">

            <div id="scene" className="scene" data-hover-only="false">


               
                <div className="one" data-depth="0.9">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="two" data-depth="0.60">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="three" data-depth="0.40">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <p className="p404 mx-auto" data-depth="0.50">404</p>
                <p className="p404 mx-auto" data-depth="0.20">404</p>

            </div>

            <div className="text mx-auto">
                <article>
                 <p>Oops, Page not found</p>
                   
                    <a href='/'><button > okay</button></a>
                </article>
            </div>

        </div>
    </section>);
	};
	export default NotFound;