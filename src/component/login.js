import React from 'react';
import axios from 'axios'; 

export default class Login extends React.Component {
      constructor(props) {
    super(props);

  
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
      this.state = {
             email: '',
            password: '',
         }
     }

  onChangeEmail(e) {
      this.setState({
       email: e.target.value
      })
    }
 

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
 
 

 onSubmit(e) {
    e.preventDefault();

    const Login = {
      email: this.state.email,
      password: this.state.password
     }

    console.log(Login);

    axios.post('http://localhost:5000/users/auth', Login)
      .then(res => { console.log(res.data)
    if(res.data.username){sessionStorage.setItem('id',res.data.username); 
    sessionStorage.setItem('email',res.data.email);
    sessionStorage.setItem('User_id',res.data._id);
    window.history.back();}else{sessionStorage.clear(); alert('invalid credentials')
    }
      
  })
  .catch((error) => {
    alert('invalid credentials')
    sessionStorage.clear()
   })
 

}


    render() {
        return (      
      <div className=" top-to-down container  my-5">
        <a className='btn btn-outline-success text-shadow shadow rounded-circle press-btn font-weight-bold text-success text-mini m-2 text-uppercase' data-toggle="tooltip" data-placement="top" title="Back to home" href='/' style={{left: '2px'}}> <i className="fas fa-home fa-2x h-svg"  style={{color:'green'}}/></a>
        <div className="row ">
          <div className="col-md-5 m-3 p-4 pl-md-4 pr-md-4  h-svg"  >
             <img className='svg_img pt-3 auth-img ' src="./images/Login.svg" />
          </div>
          <div className="col-md-5 m-4 p-4 bg-white shadow pt-sm-1 pl-md-4 pr-md-4 p-2" style={{ borderRadius: '25px' }}>
            <div className="card-body ">
              <h3 className="card-title text-center ml-5 mr-5">Login</h3>
              <form className="form-signin p-2 text-left" onSubmit={this.onSubmit}>
                 
                <div className="form-label-group mt-2 mb-2">
                    <input type="email" id="inputEmail" className="form-control p-3" placeholder="Email address" value={this.state.email} onChange={this.onChangeEmail}  required />
                    <label for="inputEmail">Email address</label>
                  </div>
                <div className="form-label-group mt-2 mb-2">
                  <input type="password" id="inputPassword" className="form-control p-3" placeholder="Password"  value={this.state.password} onChange={this.onChangePassword} required />
                  <label for="inputPassword">Password</label>
                </div> 
                <button className="btn btn-lg btn-success btn-block text-uppercase mt-4 mb-4 press-btn shadow" type="submit">Login</button>
                  <a className="btn btn-lg btn-outline-success text-center btn-block text-uppercase press-btn shadow " href="/register">Register</a>
              <a className="btn btn-lg btn-outline-danger text-center bg-white btn-block text-uppercase shadow press-btn" href="">Login as DOCTOR</a>
              
              </form>
            </div>
          </div>
        </div>
      </div>
);
    }
     }