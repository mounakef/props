import React from 'react'
import PropTypes from "prop-types"




const Profile = ({name, profession, bio,children ,handelName}) => {
    
    Profile.defaultProps={
        name:'amal',
        profession:' ingenieur', 
        bio:'hello ',
        children:'./profile/component/unnamed.jpg'
    }   
    console.log({children})
    return (
        
        <div>
            <h1 style= {{ color : 'blue'}}> fullName: { name} </h1>
            <h1> Profession : {profession}</h1>
            <h1 className= 'bio'> bio : {bio}</h1>
            {children}
             <br></br>
            
            <button
            onClick={()=>handelName(`My name is ${name}`) }> ClicK Here</button>
            
        </div>
   
   )
};
Profile.propTypes= {
    name: PropTypes.string ,
    profession:PropTypes.string ,
    bio:PropTypes.string,
    handelName:PropTypes.func ,
    
};

export default Profile ;
