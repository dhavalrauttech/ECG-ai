import React from 'react';
import axios from 'axios';
export default class CheckOut extends React.Component{
	 constructor(props) {
	 	super(props);
	this.onChangeAddress = this.onChangeAddress.bind(this); 
	this.onChangeLandmark = this.onChangeLandmark.bind(this); 
	this.onChangePincode = this.onChangePincode.bind(this); 
	this.onChangePaymentMode = this.onChangePaymentMode.bind(this); 
	this.onSubmit = this.onSubmit.bind(this); 
	    
	     
    
    
    this.state = {
         Quantity : sessionStorage.getItem('Quantity'),
          address: 'NA',
          pincode: 'NA',
          landmark: 'NA',  
     }
   }

 
 	onChangeAddress(e) {
	    this.setState({
	     address: e.target.value
	    });
      
console.log(this.state)
	}
    onChangeLandmark( evt ) {
        this.setState( {
            landmark: evt.target.value,
        } );
        console.log(this.state)
    }

  onChangePincode(e) {
	    this.setState({
	      pincode: e.target.value
	    })
	    console.log(this.state)
    }

    onChangePaymentMode(e) {
	    this.setState({
	      Payment_mode: e.target.value
	    })
	    console.log(this.state)
    }
 
 

  

 onSubmit(e) {
   
 e.preventDefault();
console.log(this.state)
    
    const CheckOut = {
      order_user_id: sessionStorage.getItem('User_id') ,
      order_address: this.state.address + ", landmark:  " + this.state.landmark + ", Pincode:  " + this.state.pincode,
      order_status: "Order Confirmed",
      payment_mode:  this.state.Payment_mode,
      total_amount: sessionStorage.getItem('Final_Cost')  ,
      product_id: sessionStorage.getItem('Product_id') ,
      payment_status : 'Un-paid',
      quantity: this.state.Quantity,
     }

    console.log(CheckOut);

    axios.post('http://localhost:5000/orders/add', CheckOut)
      .then(res => { console.log(res.data);
      	 
      	sessionStorage.setItem('order_id',res.data._id);
      	window.location = '/invoice/'+res.data._id;
     })
  .catch((error) => {
    console.log(error);
   })
    
    
  

  }


componentDidMount(){
  if(!sessionStorage.getItem('id')){
     window.location = '/login';
  }

  
    
    axios.get('http://localhost:5000/users/'+sessionStorage.getItem("User_id"))
      .then(res => { console.log(res.data)
        if(res.data.address_use == 'yes'){
          this.setState({
                address: res.data.address,
                pincode: res.data.pincode,
             });
        }

    })
  .catch((error) => {
    alert('invalid credentials')
    })
 
 
}



	render(){
		return(

				<div className='bg-primary pt-3 pb-3 shadow' style={{ marginTop:'4rem'}}>
				<div className='container'>
  		<div className=" top-to-down  p-md-5 ">
  					<div className='bg-white  mar' style={{ borderRadius:'25px'}}> 
  		          <h3 className="card-title text-center font-weight-bold p-5 align-items-center"><img src="https://img.icons8.com/pastel-glyph/64/057eff/shopping-cart--v1.png" style={{width:'3rem', height:'3rem'}} />Checkout</h3>
  		    <div className="row ">
		      	<div className="col-md-5 m-3 p-4 pl-md-4 pr-md-4 h-svg"  >
 			       <img className='svg_img pt-3 auth-img ' src="./images/checkout.jpg" />
    				</div>
  		      <div className="col-md-5 m-4 p-4  pt-sm-1 pl-md-4 pr-md-4 m-2" >
  		        <div className="card-body text-left bg-light" style={{ borderRadius: '25px',borderBottom: "4px dashed rgb(255 255 255)" }}  >
  		           
  		            <div className="row   mb-2 " >
						<div className="col-4 ">  
							<label className=" font-weight-bold text-muted ">Product :</label>
						</div>
						<div className="col-8 ">
  		              <label className=" text-muted ">{sessionStorage.getItem('Product_name')}</label>
  		              </div>
  		            </div>
  		            </div>
  		             
  		             
  		         <div className="card-body text-left bg-light" style={{ borderRadius: '25px' }}>
  		          <form className="form-signin p-2" onSubmit={this.onSubmit} >
  		       
  		              <div className="row pt-2">
						<div className="col-4 ">  
							<label className=" font-weight-bold text-muted ">Name :</label>
						</div>
						<div className="col-8 ">
  		              <input type="text " className=" border-bottom bg-light "  placeholder="Enter name"  value={sessionStorage.getItem('id')}     />
  		              </div>
  		            </div>
  		            <div className="row mt-3"> 
						<div className="col-4 ">
  		            		<label className=" font-weight-bold text-muted ">Address :</label>
						</div>
						<div className="col-8 ">
							<input type="text" className="  border-bottom bg-light" onChange={this.onChangeAddress} placeholder={this.state.address}     />
						</div>
  		             
  		            </div>
  		            <div className="row mt-3 ">
						<div className="col-4 ">
  		            		<label className=" font-weight-bold text-muted " >Landmark :</label>
					   </div>
					   <div className="col-8 ">
							<input type="text" className=" border-bottom bg-light" onChange={this.onChangeLandmark} placeholder={this.state.landmark}   />
  		               </div>
  		             </div>
  		             <div className=" row mt-3">
						<div className="col-4 ">
  		              <label className=" font-weight-bold text-muted ">Pincode :</label>
						</div>
						<div className="col-8 "> 
  		              <input type="number"  maxLength={6} minLength={6} className="border-bottom bg-light" onChange={this.onChangePincode} placeholder={this.state.pincode}    />
  		              </div>
  		            </div>
  		            <div className="row ">
						<div className="col-4 ">  
							<label className=" font-weight-bold text-muted ">Quantity :</label>
						</div>
						<div className="col-8 ">
  		              <label className=" text-muted ">{sessionStorage.getItem('Quantity')}</label>
  		              </div>
  		            </div>
  		            <div className="row ">
						<div className="col-4 ">  
							<label className=" font-weight-bold text-muted ">Total :</label>
						</div>
						<div className="col-8 ">
  		              <label className=" text-muted "> <i class="fa fa-inr p-1" aria-hidden="true"></i>
 {sessionStorage.getItem('Final_Cost')/sessionStorage.getItem('Quantity')} X {sessionStorage.getItem('Quantity')} =  <i class="fa fa-inr p-1" aria-hidden="true"></i>{sessionStorage.getItem('Final_Cost')}</label>
  		              </div>
  		            </div>
  		            <label className=" font-weight-bold text-muted mt-3">Select Payment Method:</label>
  		            <div className="form-check m-2">
					  <input className="form-check-input bg-light" type="radio" value="" name="exampleRadios" id="exampleRadios1"onChange={this.onChangePaymentMode} value="Cash"/>
					  <label className="form-check-label text-muted">
					    <i className="fas fa-money-bill-wave p-1 " style={{color:'#6c757d '}}> </i>Cash on Delivery
					  </label>
					</div>
					<div className="form-check m-2">
					  <input className="form-check-input color" type="radio" name="exampleRadios" id="exampleRadios2" onChange={this.onChangePaymentMode} value="Net" />
					  <label className="form-check-label text-muted"  for="defaultCheck2">
					    <i className="fa fa-globe p-1"style={{color:'#6c757d'}} aria-hidden="true"></i>
Net Banking
					  </label>
					</div>
					 <div className="form-check p-2 m-3 align-items-center">
				      <input className="form-check-input shadow" type="checkbox" id="gridCheck"/>
				      <label className="form-check-label" for="gridCheck">
				        I accept all terms and conditions.
				      </label>
   					 </div>
  		            <button className="btn btn-lg btn-success btn-block text-uppercase mt-4 mb-4 shadow"  type="submit">Book</button>
  		            <a className="btn btn-lg btn-outline-danger text-center btn-block text-uppercase shadow " href="/">Cancel</a>
  		         </form>
  		        </div>
  		      </div>
  		  	</div>
  		  	</div>
  		  </div>
  		  </div>
		  </div>

		);
	}
}