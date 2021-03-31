import React from 'react';
import '../css/main.css';
import '../css/invoice.css';

import Navbar from '../components/navbar';
import Invoice from '../components/invoice';
import Footer from '../components/footer';

const InvoicePage = ({match}) => {
 


return (
            <div>
            <Navbar />
            <div className="mt-2 pt-md-3">
	        	<Invoice match={match}/>
	        </div>
            <Footer />
        </div>
    );
    
}

export default InvoicePage;