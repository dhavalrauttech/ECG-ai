import React,{Component} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link, 
  Redirect
} from 'react-router-dom'

import './App.css';
import './css/main.css';
import './css/invoice.css';
// pages
import IndexPage from './pages/index'

import Blog from './pages/blog'
import AllBlogs from './pages/blogs'
import LoginUser from './pages/login'
import RegisterNew from './pages/register'
import AboutPage from './pages/aboutpage'
import NewBlog from './pages/newblog'
import Admin from './pages/admin'
import Invoice from './pages/invoice'
import Print from './pages/print'
import ProductPage from './pages/viewproduct'
import CheckoutPage from './pages/checkout'
import NotFound from './pages/notfound'
import AdminIndex from './pages/admin/index'
import AddDoctor from './pages/admin/addNew'
import addProduct from './pages/admin/addProduct'
import deleteProduct from './pages/admin/deleteProduct'
import UpdateProduct from './pages/admin/updateProduct'
import MainProduct from './pages/admin/mainProduct'
import AllProducts from './pages/admin/allProducts'
import ALLOrders from './pages/admin/allOrders'
import User from './pages/admin/user'
import EditSTATUS from './pages/admin/editStatus'
import AdminLogin from './pages/admin/login'
import ProfilePage from './pages/profile'
import AddnewDoctor from './pages/doctoradd'
import DoctorDashboard from './pages/Doctordashboard'
import StartTest from './pages/startTest';

 
class App extends Component{
  render(){
    return(
      <Router>
            <Switch>
              <Route  exact path='/' component={IndexPage}/>
              <Route  exact path='/chart/:id' component={Admin}/>
              <Route exact path='/invoice/:id' component={Invoice}/>
              <Route exact path='/print/:id' component={Print}/>
              <Route exact path='/product/:id' component={ProductPage}/>
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route  exact path='/newblog' component={NewBlog}/>
              <Route  exact path='/blogs' component={AllBlogs} />
              <Route  exact path="/blog/:id" component={Blog}/>
              <Route  exact path='/about' component={AboutPage}/>
              <Route  exact path='/register' component={RegisterNew}/>
              <Route  exact path='/profile/:email' component={ProfilePage}/>
              <Route  exact path="/login" component={LoginUser}/>
              <Route  exact path='/notfound' component={NotFound}/>
              <Route  exact path='/admin/index' component={AdminIndex} />
              <Route exact path='/admin/new' component={AddDoctor} />
              <Route exact path='/admin/newProduct' component={addProduct} />
              <Route exact path='/admin/deleteProduct' component={deleteProduct} />
              <Route exact path='/admin/UpdateProduct' component={UpdateProduct} />
              <Route exact path='/admin/mainProduct' component={MainProduct} />
              <Route exact path='/admin/allProducts' component={AllProducts} />
              <Route exact path='/admin/editstatus' component={EditSTATUS} />
              <Route exact path='/admin/allOrders' component={ALLOrders} />
              <Route exact path='/admin/user' component={User} />
              <Route exact path='/admin/login' component={AdminLogin} />
              <Route exact path='/starttest' component={StartTest}/>
              <Route exact path='/newDoctor' component={AddnewDoctor}/>
              <Route exact path='/DoctorDash' component={DoctorDashboard}/>
              <Route component={NotFound}/>

            </Switch>
      </Router>

  );
  }
}

export default App;
