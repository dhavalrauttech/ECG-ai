import React from 'react';
import '../css/main.css';
import '../css/invoice.css';

import Navbar from '../components/navbar';
import ViewProduct from '../components/viewproduct';
import Footer from '../components/footer';

const ProductPage = ({match}) => {
 


return (
            <div>
            <Navbar />
            	
	        	<ViewProduct match={match}/>

            <Footer />
        </div>
    );
    
}

export default ProductPage;