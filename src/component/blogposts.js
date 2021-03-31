import React from 'react';

const Posts = ({blogs, loading}) =>{
if(loading){
    return(<h4>Loading.......</h4>);
}
return <ul> 
    
   { blogs.map(currentblog => (
      <div className="container right-to-left my-3 shadow border border-white container-btn bg p-1 mt-5 text-lg-center" style={{ borderRadius: '25px' }}>
          <div className="row p-4 m-2" id="blog">
              <div className="col-md-5 " id="blog-area-img">
                  <a href="#">
                      <img className="img-fluid mb-3 mb-md-0"
                          src="https://ak.picdn.net/shutterstock/videos/24322460/thumb/1.jpg" id="blog-img" style={{ height: '15rem', borderRadius: '25px' }} alt="" />
                  </a>
              </div>
              <div className="col-md-7 text-left">
                  <div className='p-2'>
                      <h3 className='p-1'>{currentblog.title} </h3>
                      <p className="p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                      laborum at
                      voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque
                      eveniet unde ......
                                    </p>
                      <a className="btn float-left position-bottom rounded-pill btn-outline-primary align-text-bottom  " href={"/blog/" + currentblog._id}>View Blog</a>
                      <div className="row mt-2 pt-2">
                          <div className="col float-left text-right align-items-end">
                              <h6 className="align-text-bottom">~{currentblog.username ? currentblog.username : this.state.Unknown}</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
 ) )}

</ul>;

};

export default Posts;