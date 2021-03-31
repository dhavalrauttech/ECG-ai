import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import nodemailer from 'nodemailer';
export default class Register extends React.Component{





	constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
      this.state = {
             email: '',
             username:'',
             password: '',
             password2:'',
         }
     }

  onChangeEmail(e) {
      this.setState({
       email: e.target.value
      })
    }
 
   onChangeUsername(e) {
      this.setState({
       username: e.target.value
      })
    }
 

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
 
  onChangePassword2(e) {
    this.setState({
      password2: e.target.value
    })
  }
 


  onSubmit(e) {
    e.preventDefault();

    const Login = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
     }

      console.log(Login);
        if(this.state.password == this.state.password2){
            axios.post('http://localhost:5000/users/add', Login)
            .then(res => { console.log(res.data)
                alert('Your account created successfully')
                window.location = '/';
                }) 
            .catch((error) => {
            alert('This email already exists')
            })
        }
        else{
          alert('password and confirm password does not matched');
        }
    
  }
render(){




	return(
		<div>
  		<div className=" top-to-down container  my-5">
  		  <a className='btn btn-outline-success text-shadow shadow rounded-pill font-weight-bold text-success text-mini m-2 text-uppercase' data-toggle="tooltip" data-placement="top" title="Back to home" href='/' style={{left: '2px'}}> Home</a>
  		    <div className="row ">
		      	<div className="col-md-5 m-3 p-4 pl-md-4 pr-md-4  h-svg"  >
 			       <img className='svg_img pt-3 auth-img ' src="./images/Login.svg" />
    				</div>
  		      <div className="col-md-5 m-4 p-4 bg-white shadow pt-sm-1 pl-md-4 pr-md-4 p-2" style={{ borderRadius: '25px' }}>
  		        <div className="card-body ">
  		          <h3 className="card-title text-center font-weight-bold  ml-5 mr-5">Register</h3>
  		          <form className="form-signin p-2"  onSubmit={this.onSubmit}>
  		            <div className="form-label-group mt-2 mb-2"> 
  		              <input type="text " id="inputUserame" className="form-control p-3" placeholder="Username"  value={this.state.username} onChange={this.onChangeUsername}  required  />
  		              <label for="inputUserame">Username</label> 
  		            </div>
  		            <div className="form-label-group mt-2 mb-2">
  		              <input type="email" id="inputEmail" className="form-control p-3" placeholder="Email address" value={this.state.email} onChange={this.onChangeEmail} required />
  		              <label for="inputEmail">Email address</label>
  		            </div>
  		             <div className="form-label-group mt-2 mb-2">
  		              <input type="password" id="inputPassword" className="form-control p-3" placeholder="Password"   value={this.state.password} onChange={this.onChangePassword} required />
  		              <label for="inputPassword">Password</label>
  		             </div>
  		             <div className="form-label-group mt-2 mb-2">
  		              <input type="password" id="inputConfirmPassword" className="form-control" placeholder="confirm Password" value={this.state.password2} onChange={this.onChangePassword2} required />
  		              <label for="inputConfirmPassword">Confirm password</label>
  		            </div>
  		            <button className="btn btn-lg btn-success btn-block text-uppercase mt-4 mb-4 shadow" type="submit">Register</button>
  		            <a className="btn btn-lg btn-outline-success text-center btn-block text-uppercase shadow " href="/login">Login</a>
  		         </form>
  		        </div>
  		      </div>
  		  	</div>
  		  </div>
		  </div>
			);
	}
}