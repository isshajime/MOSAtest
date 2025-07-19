import React from 'react';
import './css/ProfilePage.css';


function ProfilePage() {
    const user = {
        name: 'Issey Suzuki',
        occupation: 'Software Engineer',
        email: 'issuzuki@seas.upenn.edu',
        profilePicture: 'src/assets/2019_NYG_wbg.png',
      };
    
      return (
        <div className="profile-page">
            <div className="profile-picture">
                <img src={user.profilePicture} alt={`${user.name}'s profile pic`} />
            </div>
          <div className="profile-card">
            <h2>{user.name}</h2>
            <p className="email">{user.email}</p>
            <p className="occupation">{user.occupation}</p>
            <button className="edit-btn">Edit Profile</button>
          </div>
        </div>
      );
    
};

export default ProfilePage;