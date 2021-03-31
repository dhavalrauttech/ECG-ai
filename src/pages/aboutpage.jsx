import React from 'react';
import '../css/main.css';

import Navbar from '../components/navbar';
import About from '../components/about'; 
import Footer from '../components/footer';

const AboutPage = () => {
    return(
        <div>
        <Navbar/>
        <About/>
        <Footer/>
            <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCH8ekqyMUkAOqX0wVHZbXp68yNK_LD0cg&callback=initMap">
            </script>
        </div>

    );
}
export default AboutPage;