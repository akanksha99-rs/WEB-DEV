import React, { Component } from "react";
import "./skin1.css";
class Skin extends Component {
  state = {
    contactDetails: {
      fname: "Akanksha",
      lname: "Nagpal",
      summary: "I am  a Btech student",
      email: "akanksha_nagpal@outlook.com",
      phone: "9899770701",
      profession: "Engineer",
      street: "IP Extension",
      city: "Delhi",
      state: "Delhi",
      country: "India",
      pin: "110092",
    },
    educationDetails: {
      collegeName: "IGDTUW",
      degree: "BTech",
      cgpa: "9",
      collegeCity: "Delhi",
      collegeState: "Delhi",
      graduationMonth: "May",
      graduationYear: "2022",
    },
    experienceDetails: [
      { companyName: "Microsoft", duration: "2 months", position: "intern" },
      { companyName: "", duration: "", position: "" },
      { companyName: "", duration: "", position: "" },
    ],
    projects: [
      { projectName: "A", techStack: ["E", "F", "G"], summary: "abc" , projectLink:"" },
      { projectName: "B", techStack: ["J", "I", "H"], summary: "abcd" , projectLink:""},
      { projectName: "C", techStack: ["K", "L", "M"], summary: "abcde"  , projectLink:""},
      { projectName: "D", techStack: ["P", "O", "N"], summary: "abcdef"  , projectLink:""}
    ],
    skills : {
        language : ["C++" , "" , ""] ,
        frameworks : ["" , "" , ""] ,
        software : ["" , "" , ""] ,
        ide : ["" , "" , ""]
    } ,
    profileLinks : {
        linkedIn : "" ,
        github : "" 
    } ,
    achievements : ["" ,"" ,"" , "" ,""] ,
    hobbies : ["Reading" , "" , "" , "" , ""] 
  };
  render() {
    let {
      fname,
      lname,
      summary,
      email,
      phone,
      profession,
      street,
      city,
      state,
      country,
      pin,
    } = this.state.contactDetails;
    let {
      collegeName,
      degree,
      cgpa,
      collegeCity,
      collegeState,
      graduationMonth,
      graduationYear,
    } = this.state.educationDetails;
    let experienceDetails = this.state.experienceDetails;
    let projects = this.state.projects;
    let skills = this.state.skills;
    let profileLinks = this.state.profileLinks;
    let achievements = this.state.achievements;
    let hobbies = this.state.hobbies;
    
    return (
      <div class="resume-skin">
        <div className="resume-left-strap">

        <div className="contact-details-skin1">
        <div className="contact-full-name">
          {fname} {lname}
        </div>

        <div className="email-phone">
          <div className="email-details">{email}</div>
          <div className="phone-details">{phone}</div>
        </div>
        
        <div className="address-details">
          {street} {city} {pin} {state} {country}
        </div>
        <div className="profession-details">{profession}</div>
      </div>

      <div className="professional-summary-skin1">
        <div className="professional-summary-heading">Summary</div>
        <div className="professional-summary-details">{summary}</div>
      </div>

      <div className="resume-body">
  <div className="education-details-skin1">
        <div className="education-details-heading">Education</div>
        <div className="education-details">
          <div className="education-details-degree">
            {degree} with GPA : {cgpa}
          </div>

          <div className="education-details-name">
            {collegeName}  ,  {graduationMonth}{" "}
            {graduationYear}
          </div>
        </div>
      </div>

  </div>



      <div className="Skills-details-skin1">
        <div className="skills-details-heading">Skills</div>
        <div className="skills-details">
          <ul><li>C++</li>
          <li>Java</li>
          <li>JavaScript</li>
          </ul>
        </div>
      </div> 

      <div className="projects-details-skin1">
        <div className="projects-details-heading">Projects</div>
        <div className="projects-details">
          <ul><li>project 1</li>
          <li>project 2</li>
          <li>project 3</li>
          </ul>
        </div>
      </div> 

      
  
  </div>
  <div className="resume-header">
    <div className="user-Details">
      <div className="user-information">
       <div className="div-line"></div>
        
      </div>
      
    </div>

  </div>

  
</div>
    );
  }
}
export default Skin;