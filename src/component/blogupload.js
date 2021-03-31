import React from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import CKEditor from 'ckeditor4-react';
import ImageUploader from 'react-images-upload';
import { save } from 'save-file';

export default class BlogUplaod extends React.Component{

  constructor(props) {
    super(props);

  	this.onChangeTitle = this.onChangeTitle.bind(this); 
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   this.onEditorChange = this.onEditorChange.bind( this );
   this.onChangeShort_Des = this.onChangeShort_Des.bind(this);
     this.onChangeImage = this.onChangeImage.bind(this);
	    this.state = {
            title: '',
            elementName:'editor',
            description: '',
            username: sessionStorage.getItem('id'),
            user_id: 'shshshshs',
            short_des: '',
            image: '',
            img_name: '',
            date: new Date(),
        }
     }

componentDidMount(){
  if(!sessionStorage.getItem('id')){
     window.location = '/login';
  }
}



 	onChangeTitle(e) {
	    this.setState({
	     title: e.target.value
	    });
      

}
    onEditorChange( evt ) {
        this.setState( {
            description: evt.editor.getData()
        } );
    }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeShort_Des(e) {
    this.setState({
      short_des: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
   onChangeImage(e) {

   
       this.setState({
      img_name: e.target.files[0],
    })
  }

 onSubmit(e) {
   
 e.preventDefault();

     const formData = new FormData();
   formData.append('username',this.state.username);
     formData.append( 'description', this.state.description);
      formData.append('short_des',this.state.short_des);
     formData.append( 'title', this.state.title);
     formData.append( 'user_id', this.state.user_id);
          formData.append( 'date', this.state.date);
      formData.append('image', this.state.img_name);
     
     const res =  axios.post('http://localhost:5000/blogs/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        
      })
     .then(res => console.log(res.data));

    // window.location = '/blogs';;
    // Request made to the backend api 
    // Send formData object to my php file for save in folder
    
 


    // axios.post('http://localhost:5000/blogs/add', blog, {
    //   headers:{'Content-Type':'multipart/form-data'}
    // })
    //   .then(res => console.log(res.data));

    // window.location = '/blogs';
  }



	render(){

 console.log(this.state)

		return(

				<div className='container my-5 pt-5'  > 
				<div className="container my-5 p-4  " style={{backgroundColor: 'rgb(245,245,245)', borderRadius: '25px'}}>
				  <h5 className="card-title text-center text-dark font-weight-bold "style={{color: '#a6a6a6'}}>New Blog</h5>
				          <form className="form-signin text-dark"  onSubmit={this.onSubmit}>
				             <div className="form-label-group pt-2 pb-2">
				              <h6 className="pl-2" style={{color: '#000f', marginLeft:'2rem',  }}>Enter Blog Name</h6>
				            <input type="text" id="inputText" className="form-control p-3 border-white  mr-4" value={this.state.title} onChange={this.onChangeTitle}
				               required />
				              </div>
				            <div className="form-label-group pt-2 pb-2">
				              <h6 className="pl-2" style={{color: '#000f', marginLeft:'2rem',  }}>Enter Blog Information</h6>
				              <input type="text" id="inputText" className="form-control border-white p-3"   value={this.state.short_des} onChange={this.onChangeShort_Des}  required  / >
				            </div>
                     <div className="form-label-group pt-2 pb-2">
                      <h6 className="pl-2" style={{color: '#000f', marginLeft:'2rem',  }}>Upload Blog Image</h6>
                      
                        <div className="custom-file col-12">
                              <input type="file" className="custom-file-input col-4 w-50" id="inputGroupFile01"  accept="image/x-png,image/gif,image/jpeg" aria-describedby="inputGroupFileAddon01"  onChange={this.onChangeImage}  required />
                                  <label className="mx-5 custom-file-label col-6 border-white rounded" for="inputGroupFile01">{(this.state.img_name)? this.state.img_name.name : 'upload Image'}</label>
 
                          
               
                          </div>
                          
                      </div>    
                                   
				    <h6 className='pl-2' style={{color: '#a6a6a6'}}> Write Blog: </h6>

				      <CKEditor
				                    data={this.state.description}
				                    onChange={this.onEditorChange} />
				                  
				       
				        <button className="btn btn-outline-success ml-2   row shasow-lg rounded-pill   text-uppercase mt-4 mb-4" type="Submit">Post Blog</button>
				            
				         </form>

                              
				   </div>
				   
				</div>



			);
	}
} 