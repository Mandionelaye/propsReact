import React from 'react';
import propTypes from 'prop-types'; 
import image2 from "./photo.jpeg";
function Profile({fullName ='Le nom de Profile', bio = 'biografie', profession="profession",handleName, children}) {
  handleName(fullName);
  const stylename = {color:"rgb(120, 48, 183)",fontWeight: "bolder",fontSize: "30px",};
const styleprfs={ color:'rgb(218, 255, 11)',fontWeight:'bolder'};
const divestyle={  paddingTop: "10px",paddingLeft:"5px"};
const block1 = {  display: "flex", flexDirection: "row",  paddingTop: "30px"};
const block2 = {  display: "flex",flexDirection: "column",justifyContent: "center"};
const img2 = { minWidth: "70px"};
const img1 = { width: "18vmin", borderRadius: "10px"};
  return(
    <>
   <div className="row">
      <div className="col col-md-12" style={block1}>
        <img src={children} style={img1} alt="img" />
      <div style={divestyle}>   
      <h1 style={stylename}>{fullName}</h1>
      <h3 style={styleprfs}>{profession}</h3>
      </div>
      </div>
      <div className='col-md-12' style={block2}>
      <h4>{bio}</h4>
      <img src={image2} style={img2}  alt="img2" />
      </div>
  </div>
  </>
  );
 };
Profile.propTypes={
    fullName:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string,
    handlename:propTypes.func,
};
export default Profile;