import React from 'react';
import '../css/main.css';

import HeaderNavbar from '../components/headernavbar';
import Header from '../components/header';
import Footer from '../components/footer';
import DeviceInfo from '../components/deviceinfo';
import Feature from '../components/features';
import Blogs from '../components/blogs'; 
import AppMockup from '../components/appmockup';


const IndexPage = () => {
    return (
        <div>
            <HeaderNavbar />
            <Header />
            <DeviceInfo />
            <AppMockup/>
            <Feature />
            
            <Footer />
        </div>
    );
};

export default IndexPage;
