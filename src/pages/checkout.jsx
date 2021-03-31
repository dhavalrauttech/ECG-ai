import React from 'react';
import '../css/main.css';
import '../css/invoice.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CheckOut from '../components/checkout'

const CheckoutPage = () => {
 


return (
            <div>
            <Navbar />
            	
	        	
	        	<CheckOut/>
            <Footer />
        </div>
    );
    
}

export default CheckoutPage;