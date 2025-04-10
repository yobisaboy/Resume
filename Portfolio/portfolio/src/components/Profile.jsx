import React, { Component }  from 'react';
//
// this is the home page component
function Profile()
{


    return (
        <div>
            <h2>Profile</h2>
            <p>React front-end calls Express REST API to add, 
            list, update, or delete a user, create an article, etc.</p>
        </div>
    );

}
// withRouter will pass updated match, location, and history props 
// to the wrapped component whenever it renders.
export default Profile;