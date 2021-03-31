import React from 'react';
import QRCode from 'react-qr-code';
import axios from "axios";
import '../css/invoice.css';
import params from 'params';
export default class Invoice extends React.Component{

    constructor(props) {
        super(props);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.state = {
            
            date:'',
            
        }
     }
 componentDidMount() {  
  if(!sessionStorage.getItem('id')){
     window.location = '/login';
  }
 

    axios.get('http://localhost:5000/orders/'+this.props.match.params.id)
              .then(response => {
                  this.setState({
                    order_id: response.data._id,
                      user_id: response.data.order_User_Id,
                      product_id: response.data.product_id,
                      order_address: response.data.order_address,
                      order_status: response.data.order_status,
                      total_amount: response.data.total_amount,
                      quantity: response.data.quantity,
                      payment_mode: response.data.payment_mode,
                      payment_status: response.data.payment_status, 
                      date: Date(response.data.createdAt),
                      updated_at:  Date(response.data.updatedAt),
                  });
                  axios.get('http://localhost:5000/users/'+this.state.user_id)
                      .then(res => { console.log(res.data)
                          this.setState({
                                username: res.data.username,
                                              });
                      })
                  .catch((error) => {
                    alert('invalid credentials')
                    })
                    axios.get('http://localhost:5000/products/'+this.state.product_id)
                      .then(response => {
                          this.setState({
                            product_name: response.data.product_name,
                              product_discount: response.data.product_discount,
                              product_image: response.data.product_image,
                              product_price: response.data.product_price,
                              product_warranty: response.data.product_warranty,
                              
                               
                          })

                          console.log(response)
                           })
                       .catch(function (error) {
                          console.log(error);
                      })
                  console.log(response)
                   })
               .catch(function (error) {
                  console.log(error);
              })

   if(this.state.user_id == (sessionStorage.getItem('User_id'))){
    console.log('success');
   }
 
  }
 
 
  onClickSubmit(e){
     window.location = "/print/"+this.props.match.params.id ;   
}

	render(){



const status_ontheway =  <div>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className="step0"></li>
                    </div>;
const status_delivered =  <div>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                     <li className="active step0"></li>
                    </div>;
            const status_shipped =  <div>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                     <li className="step0"></li>
                    <li className="step0"></li>
                    </div>;
            const status_orderconfirmed =  <div>
                    <li className="active step0"></li>
                     <li className="step0"></li>
                     <li className="step0"></li>
                    <li className="step0"></li>
                    </div>;

                    console.log(this.state)

                   const  orderconfirmed= <div className="row" id='printtotal'>
                 <div className="col-md-3 col-6   d-flex icon-content"> <img className="icon" src="https://i.imgur.com/9nnc9Et.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold text-success">Order<br/>Processed</p>
                </div>
            </div>
            <div className=" col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/u1AzR7w.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold text-dark">Order<br/>Shipped</p>
                </div>
            </div>
            <div className="col-md-3 col-6   d-flex icon-content"> <img className="icon" src="https://i.imgur.com/TkPm63y.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column ">
                    <p className="font-weight-bold text-dark ">Order<br/>In Route</p>
                </div>
            </div>
            <div className="col-md-3 col-6   d-flex icon-content"> <img className="icon" src="https://i.imgur.com/HdsziHP.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column ">
                    <p className="font-weight-bold text-dark">Order<br/>Deliverd</p>
                </div>
            </div>
            </div>
       ;
                  const  delivered= <div className="row">
                 <div className="col-md-3  col-6 d-flex icon-content"> <img className="icon" src="https://i.imgur.com/9nnc9Et.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold text-success">Order<br/>Processed</p>
                </div>
            </div>
            <div className="col-md-3  col-6 d-flex icon-content"> <img className="icon" src="https://i.imgur.com/u1AzR7w.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold text-success">Order<br/>Shipped</p>
                </div>
            </div>
            <div className="col-md-3  col-6 d-flex icon-content"> <img className="icon" src="https://i.imgur.com/TkPm63y.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column ">
                    <p className="font-weight-bold text-success ">Order<br/>In Route</p>
                </div>
            </div>
            <div className="col-md-3  col-6 d-flex icon-content"> <img className="icon" src="https://i.imgur.com/HdsziHP.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column ">
                    <p className="font-weight-bold text-success">Order<br/>Deliverd</p>
                </div>
            </div>
      
        </div>;
                  const  shipped= <div className="row">
                 <div className="col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/9nnc9Et.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold text-success">Order<br/>Processed</p>
                </div>
            </div>
            <div className="col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/u1AzR7w.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold text-success">Order<br/>Shipped</p>
                </div>
            </div>
            <div className="col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/TkPm63y.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column ">
                    <p className="font-weight-bold text-dark ">Order<br/>In Route</p>
                </div>
            </div>
            <div className="col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/HdsziHP.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column ">
                    <p className="font-weight-bold text-dark">Order<br/>Delivered</p>
                </div>
            </div>
             </div>
         ;
                  const  ontheway= <div className="row">
                 <div className="col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/9nnc9Et.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold text-success">Order<br/>Processed</p>
                </div>
            </div>
            <div className="col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/u1AzR7w.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold text-success">Order<br/>Shipped</p>
                </div>
            </div>
            <div className="col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/TkPm63y.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column ">
                    <p className="font-weight-bold text-success ">Order<br/>In Route</p>
                </div>
            </div>
            <div className="col-md-3 col-6  d-flex icon-content"> <img className="icon" src="https://i.imgur.com/HdsziHP.png" style={{height:'2rem', width:'2rem'}}/>
                <div className="d-flex flex-column ">
                    <p className="font-weight-bold text-dark">Order<br/>Delivered</p>
                </div>
            </div>
      
        </div>;


		return(
				<div className="container mt-5 mb-5 maintop" >
    <div className="row d-flex justify-content-center">
        <div className="col-md-8">
            <div className="card shadow">
                 <div className="invoice p-3" id='print'>
                  	<div className='row p-2 mx-auto'>
                  		<h4 className="my-0 mr-md-auto   font-weight-normal font-weight-bold  float-left" style={{ color: '#343A40' }}>
                        	<i className="badge badge-dark mar">ECG.ai</i></h4>
                	</div>

      		

                    <h5> {this.state.order_status}!</h5> <span className="font-weight-bold d-block mt-4">Hello,{this.state.username}</span> <span>You order has been confirmed and will be shipped in next two days!</span>
                      <div className="py-2"> <span className="d-block text-muted">Shiping Address</span> <span> {this.state.order_address}</span> </div>
                                     
                    <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="py-2 "> <span className="d-block text-muted">Order date</span>{this.state.date} <span> </span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Order No</span> <span>{this.state.order_id}</span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Payment</span> <span>{this.state.payment_mode}</span> </div>
                                    </td>
                                     
                                      
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="product border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                 
                                <tr>
                                    <td width="20%"> <img className='cart cart-shadow shadow-bottom' src={process.env.PUBLIC_URL+"/images/"+this.state.product_image} width="70"/> </td>
                                    <td width="60%"> <span className="font-weight-bold">{this.state.product_name}</span>
                                           <div className="product-qty"> <span className="d-block text-muted">Quantity: {this.state.quantity}</span> <span className="d-block text-muted"> Warranty: <span className='text-dark'> {this.state.product_warranty} Months</span></span> </div>
                                       </td>
                                    <td width="20%">
                                        <div className="text-right"> <span className="d-block text-muted">&#8377; {this.state.total_amount}</span> </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-5">
                            <table className="table table-borderless">
                                <tbody className="totals">
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Subtotal</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>&#8377;{this.state.total_amount}</span> </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted"> Tax Fee (G.S.T 18%)</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>&#8377;{  (this.state.total_amount * 0.18)}</span> </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Shipping fee (FREE)</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>&#8377;0.00</span> </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Discount</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span className="text-success">&#8377;{this.state.product_price * (this.state.product_discount / 100)}</span> </div>
                                        </td>
                                    </tr>
                                    <tr className="border-top border-bottom">
                                        <td>
                                            <div className="text-left"> <span className="font-weight-bold">Subtotal</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span className="font-weight-bold">&#8377;{this.state.total_amount}</span> </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                      <div className="row d-flex justify-content-center">
            <div className="col-12">
            	<div className='m-2 row' > 
                    <div className='col-md-4 text-md-right text-sm-left'>
                        <h5 className=' text-muted' > Order Status: </h5>
                    </div>
                    <div className='col-md-8 '>
                        <span className='  text-muted' > {this.state.order_status} (status changed at {this.state.updated_at})</span>
                    </div>
                 </div>

                <ul id="progressbar" className="text-center">
                    {( this.state.order_status == 'Order Confirmed')? (status_orderconfirmed):"" }
                    {( this.state.order_status =='Delivered')? (status_delivered):"" }
                    {( this.state.order_status == 'Dispatched')? (status_shipped):"" }
                    {( this.state.order_status =='On the way')? (status_ontheway):"" }
                </ul>
            </div>
        </div>
        <div className="row justify-content-between top">
             {( this.state.order_status == 'Order Confirmed')? (orderconfirmed):"" }
                    {( this.state.order_status =='Delivered')? (delivered):"" }
                    {( this.state.order_status == 'Dispatched')? (shipped):"" }
                    {( this.state.order_status =='On the way')? (ontheway):"" }
        </div>

                    <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                    <p className="font-weight-bold mb-0">Thanks for shopping with us!</p> <span className='text-muted'>ECG.ai Team</span>

                    <div className='row d-flex justify-content-end'>
	      		<div className='m-3 p-1' >
	      			<QRCode value= {"/invoice/"+this.props.match.params.id} className='' size='110'/>
	      		</div>
      		</div>
                </div>


                <div className='mx-auto'>
                	<h6 className='btn btn-outline-primary align-items-center rounded-pill shadow-sm p-2' onClick={this.onClickSubmit}>
            			<img src="https://img.icons8.com/ios-glyphs/30/007bff/print.png" className='p-1' style={{ width:'2rem', height: '2rem'}}/> PRINT INVOICE
        			 </h6>
                </div>
            </div>
        </div>
    </div>
</div>
			);
	}
} 