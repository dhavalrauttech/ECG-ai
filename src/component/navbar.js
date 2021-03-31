import React from 'react';
import { PageTransition } from '@steveeeie/react-page-transition';
export default class Navbar extends React.Component {

constructor(props) {
    super(props);
    this.onClickLogout = this.onClickLogout.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.state = {
         login:false,
         menu: false
    }
}
componentDidMount() {
    console.log(sessionStorage.getItem('id'))
    if(sessionStorage.getItem('id'))
        { this.setState({
            login:true
        }) 
    }
}

 
onClickLogout(e) {
        this.setState({
            login:false
        })
        sessionStorage.clear();
        window.location.reload();
    }


onClickMenu(e) {
    if (this.state.menu == false){   
        this.setState({
            menu:true
        })
    }
    else{
     this.setState({
            menu:false
        })   
    }
    }

 
    render() {
        console.log(this.state)
        
        const Login =   <div>
                        <a className="p-2 text-dark  font-weight-bold" href="/register">Sign up</a> 
                        <a className="p-2 text-dark mx-2 font-weight-bold" href="/login">login</a> 
                        </div>
                        
                        ; 
                        
        const authProfile ="/profile/"+sessionStorage.getItem("email");
     
        const one = (sessionStorage.getItem("id"))?(sessionStorage.getItem("id")):('') ;
        const imglink = 'https://img.icons8.com/cute-clipart/64/000000/'+ one.charAt(0) +'.png'
        
        const loggedin =    <div className="text-center">
                                <h5 className="rounded-circle p-2 bg-light" style={{ height: '3rem', width: '3rem', border: '5px solid #d8d8d8', borderRadius: '25px'}}>{one.charAt(0)}</h5>
                        
                            
                            </div>
                            ;
        const LogoutBtn = 
        <li className=' text-center row pt-2 pb-2'><a className="p-3 ml-3 border-dark" >
        <div className="" style={{border: 'none'}}>
                                <a className=" text-danger" onClick={this.onClickLogout} >Logout</a>
                            </div>
                            </a></li>;
        const dropdown = <a className="nav-item  ">
                            <a className="nav-link text-dark p-2 text-dark mx-2 font-weight-bold"   href={authProfile} role="button" >{sessionStorage.getItem("id")}</a>
                            
                        </a>;
        const menuLogin =  <div className=' ' ><li className='m-3 pt-2 pb-2'><a className="p-3 text-dark border-bottom border-dark"  href="/register">Sign up</a></li>  <li className='m-3 pt-2 pb-2'><a className="p-3 text-dark border-dark"   href="/login">login</a> </li></div>;
                  
        const Menu =
                    
                     <div className=' col-12 my-4'>     
                        <ul className='font-weight-bold list-unstiled p-2 text-center top-to-down bg-light rounded'>
                        <li className='m-3 pt-2 pb-2'><a className="p-3 text-dark border-bottom border-dark" data-toggle="tooltip" data-placement="top" title="Go to home page" href='/'>Home</a></li>
                        <li className='m-3 pt-2 pb-2'><a className="p-3 text-dark border-bottom border-dark" data-toggle="tooltip" data-placement="top" title="Go to blogs" href='/blogs'>Blogs</a></li>
                        <li className='m-3 pt-2 pb-2'><a className="p-3 text-dark border-bottom border-dark" data-toggle="tooltip" data-placement="top" title="Go to ECG test menu" href='/starttest'>Test</a></li>
                        <li className='m-3 pt-2 pb-2'><a className="p-3 text-dark border-bottom border-dark" data-toggle="tooltip" data-placement="top" title="Go to about us" href="/about">About</a></li>
                                  {
                        (sessionStorage.getItem("id"))?(<div className='mx-3'>{loggedin}</div>):(menuLogin)} {(sessionStorage.getItem("id"))? (dropdown) : ''} 
                        {(sessionStorage.getItem("id"))? (LogoutBtn) : ''}
                    </ul>
                    </div>
                
                ;

        const white = <svg  width="2rem" height="2rem" viewBox="0 0 24 24" fill="#001200"><path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/></svg>;
        const cancel = <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="#000000" ><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>;       

        

        return (
        <div>
            <div className='d-none d-md-block'>
                <div className="d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-2 bg-white shadow fixed-top " id="navbar_top">
                    <h1 className="my-0 mr-md-auto font-weight-normal font-weight-bold  " style={{ color: '#343A40' }}>
                        <i className="badge badge-dark shadow-sm">ECG.ai</i></h1>
                    <nav className="my-2 my-md-0 mr-md-3 font-weight-bold nav-change-color-black" id='nav_change_col'>
                        <a className="p-2 text-dark mx-2" data-toggle="tooltip" data-placement="top" title="Go to home page" href="/">Home</a>
                        <a className="p-2 text-dark mx-2" href="/blogs"  data-toggle="tooltip" data-placement="top" title="Go to blogs page">Blogs</a>
                        <a className="p-2 text-dark mx-2" href='/starttest'  data-toggle="tooltip" data-placement="top" title="Go to ECG test page">Test</a>
                        <a className="p-2 text-dark mx-2" href='/about'  data-toggle="tooltip" data-placement="top" title="Go to About us page">About</a>
                    </nav>
                    <div className="row-sm login ">
                    {
                        (sessionStorage.getItem("id"))?(loggedin):(Login)
                    }
                    </div>
                    {( sessionStorage.getItem("id"))?(dropdown) : ''}
                        {( sessionStorage.getItem("id"))?(LogoutBtn) : ''}
                </div>
            </div>
            
            <div className='d-sm-block d-md-none '>
                <div className="navbar fixed-top navbar-dark bg-white shadow-sm">
                    <div className="container d-flex justify-content-between">
                      <i   className="navbar-brand font-weight-bold badge-dark rounded shadow-sm d-flex p-2 align-items-center">
                        <strong>ECG.ai</strong>
                      </i>
                      <div className="text-center p-2"  onClick={this.onClickMenu}>
                      {(this.state.menu == true)? cancel : white}
                      </div>
                    </div>
                    <div className='mx-auto'>
                     {(this.state.menu == true)? Menu : ''}
                </div>
            </div>
            </div>
        </div>
        );
    }
}
