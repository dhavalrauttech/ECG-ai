import React from 'react';
import '../css/main.css';
import '../css/invoice.css';

 
import Print from '../components/print';
 
const InvoicePage = ({match}) => {
 


return (
            <div>
             
            <div className="mt-2 pt-md-3">
	        	<Print match={match}/>
	        </div>
           
        </div>
    );
    
}

export default InvoicePage;