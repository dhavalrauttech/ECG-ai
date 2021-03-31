import React from 'react';
import '../css/main.css';
import '../css/profile.css';


import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Profile from '../components/profile';



const ProfilePage = ({match}) => {

    return (
        <div>
            <Navbar  />
            <Profile match={match}/>
            <div>
			 	
			 	</div>
            <Footer />
        </div>

    );


};


export default ProfilePage;