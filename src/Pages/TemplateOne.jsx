import { useEffect, useState } from "react";
import MarginX from '../components/MarginX';
import TemplateOneDesign from "../components/TemplateOneDesign";
import { v4 as uuid } from "uuid";

const TemplateOne = () => {

  const [templateDetails, setTemplateDetails] = useState([
    {

      // fullname
      firstName: "John",
      lastName: "Doe",
      
      // contactInfo
      email: "john.doe@gmail.com",
      phone: "111-222-3333",
      
      // about
      position: "Front-End Developer",
      positionDescription: "I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
      
      // experience
      companyName: "KlowdBox",
      companyLocation: "San Fr, CA",
      companyDuration: "Jan 2011 - Feb 2015",
      companyRole: "Fr developer",
      companyDescription: "did This and that",
     
      companyName2: "Akount",
      company2Location: "San Monica, CA",
      company2Duration: "Jan 2011 - Feb 2015",
      company2Role: "Fr developer",
      company2Description: "did This and that",
       
      // education  
      institute: "Sample Institute of technology",
      instituteLocation: "San Fr, CA",
      instituteDuration: "Jan 2011 - Feb 2015",
      instituteDegree: "Fr developer",
      instituteDescription: "did This and that",

      institute2: "Akount",
      institute2Location: "San Monica, CA",
      institute2Duration: "Jan 2011 - Feb 2015",
      institute2Degree: "Fr developer",
      institute2Description: "did This and that",
        
      // projects
      project: "DSP",
      projectDescription: "I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
      projectLink: "link",

      
      project2: "DSP",
      project2Description: "I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
      project2Link: "link",
        
      // skills
      skillName: "Javascript",
      skillName2: "CSS",
       
      // interests
      interest: "Football",
      interest2: "Programming",

      id: uuid()
      
    },
  ])

  const handleEditForm = (id, FormData) => {

    setTemplateDetails(

      templateDetails.map((template) => template.id === id ? FormData : template)

    )

  }

  // useEffect( () => {
  //   localStorage.setItem('object', JSON.stringify(templateDetails))
  // },[])
  
  // useEffect( () => {
  //   localStorage.getItem('object')
  // },[templateDetails])


  return (
    <>
     
      <MarginX>

        <div className="flex flex-col items-center justify-center">
          {
            <TemplateOneDesign templateDetails={templateDetails} handleEditForm={handleEditForm} />
          }
        </div>

      </MarginX>

    </>
  )
}

export default TemplateOne