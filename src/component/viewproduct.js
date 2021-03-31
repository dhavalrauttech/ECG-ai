import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
export default class ViewProduct extends React.Component{
     
   
  constructor(props) {

     
   super(props);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
    this.state = {
         Quantity : "1"
    }
   }

componentDidMount() {
         
        axios.get('http://localhost:5000/products/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    product_name: response.data.product_name,
                    product_image: response.data.product_image,
                    product_price: response.data.product_price,
                    product_warranty: response.data.product_warranty,
                    product_id: response.data._id,
                    product_discount: response.data.product_discount,


                   
                })
                console.log(this.state)
                 })
             .catch(function (error) {
                console.log(error);
            })

          
console.log(this.state);
         }



onChangeQuantity(e) {
    if(e.target.value !="0"){ 
        this.setState({
            Quantity: e.target.value
        })
    }
    else{
       alert('Enter correct quantity');                         
    }
   
    }
    onSubmit(e) {
      e.preventDefault();
    sessionStorage.setItem('Product_id',this.state.product_id);
    sessionStorage.setItem('Quantity',this.state.Quantity);
    sessionStorage.setItem('Product_name',this.state.product_name);
    sessionStorage.setItem('Final_Cost',this.state.Quantity * (this.state.product_price - (this.state.product_price*(this.state.product_discount/100)))); 
     window.location = '/checkout';   
    
    }
 
   
 
	render(){
        console.log(this.state)
        const discount_cost = this.state.product_price - (this.state.product_price*(this.state.product_discount/100));
        const link_image = process.env.PUBLIC_URL+"/images/"+this.state.product_image;

    return(
        <div className="single_product" style={{ marginTop:'5rem'}}>
         
            <div className="container-fluid" style={{ backgroundColor: '#fff', padding:'11px'}}>
                <div className="row">
                   
                        
                    <div className="col-md-6 order-lg-2 " style={{height:'auto'}}>
                        <div className="p-3">
                
                         <div className="text-center product left-to-right">
                        <img className='' src={link_image} style={{width:'80%',height:'55vh', borderRadius:'25px'}} alt="Product_img"/>
                    </div>

                    </div>
                    </div>
                    <div className="col-md-6 order-3">
                        <div className="product_description">
                          
                            <h4 className="text-dark font-weight-bold">{this.state.product_name}</h4>
                             <div> <span className="product_price   text-muted"> Price: </span><span className=" mx-2 product_price font-weight-bold">&#8377;{discount_cost}</span> </div>
                             <div> <span className="product_price   text-muted"> M.R.P: </span> <strike className=" mx-2 product_discount"><small style={{color:'black'}}>&#8377;{this.state.product_price}</small></strike>  </div>
                            <div> <span className="product_saved">You Saved:</span> <span style={{color:'black'}}>{this.state.product_discount}%</span> </div>
                           
                            <div className='p-3 bg-light rounded' > 

                            <span className="product_info">EMI starts at ₹ 2,000. No Cost EMI Available</span><br/> <span className="product_info">Warranty:{this.state.product_warranty} months warranty</span><br/> <span className="product_info">7 Days easy return policy</span><br/> <span className="product_info">7 Days easy return policy</span><br/> <span className="product_info">In Stock: 25 units sold this week</span> 
                            <div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="br-dashed">
                                            <div className="row">
                                                <div className="col-md-3 col-xs-3"> <img src="https://img.icons8.com/color/48/000000/price-tag.png"/></div> 
                                                <div className="col-md-9 col-xs-9">
                                                    <div className="pr-info"> <span className="break-all">Get 5% instant discount + 10X rewards @ RENTOPC</span> </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-7"> </div>
                                </div>
                               </div>
                            </div>
                            
                            <div className="order_info d-flex flex-row p-4">
                                <form action="#"/>
                           
                            <div className="">
                                <div className="col-sm-12" style={{marginLeft: "13px"}}>
                                    <div className="product_quantity m-2"> <span>QTY: </span> <input id="quantity_input" className='border-bottom' type="text" pattern="[1-9]*" onChange={this.onChangeQuantity} value={this.state.Quantity}/>  <i className="fas fa-edit"></i>
                                         
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center">
                                <form className="form-signin p-2 text-center" onSubmit={this.onSubmit}>
                                    <button className="btn btn-success rounded-pill shadow" type="submit" >Buy Now</button>
                                        </form>
                                </div>
                   
                       		 </div>
                            </div>
                            </div></div>
                             
                            </div></div>

                            </div>
          );
	}

}