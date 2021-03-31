import React ,{ Component }from 'react';
import axios from 'axios';
import params from 'params';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment'
import getdata from '../pages/blog';
import '../css/main.css';
import { parse } from 'date-format-parse';


export default class Blog extends React.Component {

    constructor(props) {
        super(props);
	    this.state = {
            title: '',
            description: '',
            username: 'Unknown user',
            date:'',
            loc:'',
        }
     }

  	componentDidMount() {
         
        axios.get('http://localhost:5000/blogs/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    user: response.data.username,
                    image: response.data.img_loc,

                    date: response.data.date,  
                })
                console.log(this.state)
                 })
             .catch(function (error) {
                console.log(error);
            })

           
console.log(this.state);
         }

    render() {
        const comment_href='http://localhost:5000/blogs/'+this.props.match.params.id;
        const link= this.state.image;
        const date = this.state.date;
        return (
			<div className="container " style={{minHeight: '25rem', marginTop: '5rem'}}>
			    <div className="top-to-down">
			        <div className="container ">
				       <div className='p-5 text-white mt-5  shadow' style={{borderTopLeftRadius:'25px', width: 'auto', backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${process.env.PUBLIC_URL+"/images/"+this.state.image})`, backgroundSize: 'cover',  borderTopRightRadius:'25px'}}>
                            <span className="font-weight-bold p-2 m-2 text-white float-right"> </span>
                            <h1 className="pl-4 pt-4"  > {this.state.title} </h1>
                            <i className="mb-3 pl-4 pb-2 text-white ">Author: {this.state.user}</i>
                             <span className=" p-2 m-2 text-white float-right">Posted on  <Moment format="D MMM YYYY" withTitle>{ this.state.date}</Moment></span>
                        </div>
 
				        <p className=' bg-light p-md-4 p-sm-3 container shadow overflow-hidden'  style={{ borderBottomLeftRadius:'25px',borderBottomRightRadius:'25px'}}>{ReactHtmlParser(this.state.description)}</p>
                        <div className='container m-2'>
			           </div>
                    </div>
                    
                    <div className='container m-2  '>
                        <div id="fb-root" className='mt-md-3 '></div>
                        <div className="fb-comments" data-href={comment_href} data-numposts="10" data-width=""></div>
                    </div>
			   </div>
			</div>
            
        );       
    }
}


