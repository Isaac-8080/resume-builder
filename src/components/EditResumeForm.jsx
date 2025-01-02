import React, { useState } from "react";
import TextInput from "./TextInput";

function EditCertificateForm({closeModal, template, handleEditForm}) {
  // fullname
  const [firstName, setFirstName] = useState(template.firstName);
  const [lastName, setLastName] = useState(template.lastName);

  // contactInfo
  const [email, setEmail] = useState(template.email);
  const [phone, setPhone] = useState(template.phone);
  
  // about
  const [position, setPosition] = useState(template.position);
  const [positionDescription, setPositionDescription] = useState(template.positionDescription);
  
  // experience 1
  const [companyName, setcompanyName] = useState(template.companyName);
  const [companyLocation, setCompanyLocation] = useState(template.companyLocation);
  const [companyDuration, setCompanyDuration] = useState(template.companyDuration);
  const [companyRole, setCompanyRole] = useState(template.companyRole);
  const [companyDescription, setCompanyDescription] = useState(template.companyDescription);
  
  
  // experience 2
  const [companyName2, setcompanyName2] = useState(template.companyName2);
  const [company2Location, setCompany2Location] = useState(template.company2Location);
  const [company2Duration, setCompany2Duration] = useState(template.company2Duration);
  const [company2Role, setCompany2Role] = useState(template.company2Role);
  const [company2Description, setCompany2Description] = useState(template.company2Description);
  
  // education
  const [institute, setInstitute] = useState(template.institute);
  const [instituteLocation, setInstituteLocation] = useState(template.instituteLocation);
  const [instituteDuration, setInstituteDuration] = useState(template.instituteDuration);
  const [instituteDegree, setInstituteDegree] = useState(template.instituteDegree);
  const [instituteDescription, setInstituteDescription] = useState(template.instituteDescription);
  
  // education 2
  const [institute2, setInstitute2] = useState(template.institute2);
  const [institute2Location, setInstitute2Location] = useState(template.institute2Location);
  const [institute2Duration, setInstitute2Duration] = useState(template.institute2Duration);
  const [institute2Degree, setInstitute2Degree] = useState(template.institute2Degree);
  const [institute2Description, setInstitute2Description] = useState(template.institute2Description);
  
  // project
  const [project, setProject] = useState(template.project);
  const [projectDescription, setProjectDescription] = useState(template.projectDescription);
  const [projectLink, setProjectLink] = useState(template.projectLink);
  
  // project 2
  const [project2, setProject2] = useState(template.project2);
  const [project2Description, setProject2Description] = useState(template.project2Description);
  const [project2Link, setProject2Link] = useState(template.project2Link);
  
  const [skillName, setSkillName] = useState(template.skillName);
  const [skillName2, setSkillName2] = useState(template.skillName2);
  
  const [interest, setInterest] = useState(template.interest);
  const [interest2, setInterest2] = useState(template.interest2);


  // Handlers

  const handleFirstName = (e) => setFirstName(e.target.value)

  const handleLastName = (e) => setLastName(e.target.value)
  
  const handleEmail = (e) => setEmail(e.target.value)
  
  const handlePhone = (e) => setPhone(e.target.value)

  const handlePosition = (e) => setPosition(e.target.value)
  
  const handlePositionDescription = (e) => setPositionDescription(e.target.value)

  const handleCompanyName = (e) => setcompanyName(e.target.value);
  const handleCompanyLocation = (e) => setCompanyLocation(e.target.value);
  const handleCompanyDuration = (e) => setCompanyDuration(e.target.value);
  const handleCompanyRole = (e) => setCompanyRole(e.target.value);
  const handleCompanyDescription = (e) => setCompanyDescription(e.target.value);

  const handleCompanyName2 = (e) => setcompanyName2(e.target.value);
  const handleCompany2Location = (e) => setCompany2Location(e.target.value);
  const handleCompany2Duration = (e) => setCompany2Duration(e.target.value);
  const handleCompany2Role = (e) => setCompany2Role(e.target.value);
  const handleCompany2Description = (e) => setCompany2Description(e.target.value);

  const handleInstitute = (e) => setInstitute(e.target.value);
  const handleInstituteLocation = (e) => setInstituteLocation(e.target.value);
  const handleInstituteDuration = (e) => setInstituteDuration(e.target.value);
  const handleInstituteDegree = (e) => setInstituteDegree(e.target.value);
  const handleInstituteDescription = (e) => setInstituteDescription(e.target.value);

  const handleInstitute2 = (e) => setInstitute2(e.target.value);
  const handleInstitute2Location = (e) => setInstitute2Location(e.target.value);
  const handleInstitute2Duration = (e) => setInstitute2Duration(e.target.value);
  const handleInstitute2Degree = (e) => setInstitute2Degree(e.target.value);
  const handleInstitute2Description = (e) => setInstitute2Description(e.target.value);

  const handleProject = (e) => setProject(e.target.value);
  const handleProjectDescription = (e) => setProjectDescription(e.target.value);
  const handleProjectLink = (e) => setProjectLink(e.target.value);

  const handleProject2 = (e) => setProject2(e.target.value);
  const handleProject2Description = (e) => setProject2Description(e.target.value);
  const handleProject2Link = (e) => setProject2Link(e.target.value);

  const handleSkillName = (e) => setSkillName(e.target.value);
  const handleSkillName2 = (e) => setSkillName2(e.target.value);

  const handleInterest = (e) => setInterest(e.target.value);
  const handleInterest2 = (e) => setInterest2(e.target.value);


  const handleSumbit = (e) => {

    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      phone,
      position,
      positionDescription,
      companyName,
      companyLocation,
      companyDuration,
      companyRole,
      companyDescription,
      companyName2,
      company2Location,
      company2Duration,
      company2Role,
      company2Description,
      institute,
      instituteLocation,
      instituteDuration,
      instituteDegree,
      instituteDescription,
      institute2,
      institute2Location,
      institute2Duration,
      institute2Degree,
      institute2Description,
      project,
      projectDescription,
      projectLink,
      project2,
      project2Description,
      project2Link,
      skillName,
      skillName2,
      interest,
      interest2,
      id: template.id,
    };

    handleEditForm(template.id, data);

    closeModal();

  }

  return (
    <form onSubmit={handleSumbit} className="w-full">

      <div><span className="font-bold text-red-600">Note:</span> Blank fields will not be included.</div>

      <div className="flex flex-col gap-4 mt-5">
        
          <TextInput
            labelText="First Name:"
            value={firstName}
            onChange={handleFirstName}
            placeholder={firstName}
          />
          <TextInput
            labelText="Last Name:"
            value={lastName}
            onChange={handleLastName}
            placeholder={lastName}
          />
          <TextInput
            labelText="Email Address:"
            value={email}
            onChange={handleEmail}
            placeholder={email}
          />
          <TextInput
            labelText="Phone Number:"
            value={phone}
            onChange={handlePhone}
            placeholder={phone}
          />
          <TextInput
            labelText="Position:"
            value={position}
            onChange={handlePosition}
            placeholder={position}
          />
          <TextInput
            labelText="Position Description:"
            value={positionDescription}
            onChange={handlePositionDescription}
            placeholder={positionDescription}
          />

          {/* Experience 1 */}
          <TextInput
            labelText="Company Name:"
            value={companyName}
            onChange={handleCompanyName}
            placeholder={companyName}
          />
          <TextInput
            labelText="Company Location:"
            value={companyLocation}
            onChange={handleCompanyLocation}
            placeholder={companyLocation}
          />
          <TextInput
            labelText="Company Duration:"
            value={companyDuration}
            onChange={handleCompanyDuration}
            placeholder={companyDuration}
          />
          <TextInput
            labelText="Company Role:"
            value={companyRole}
            onChange={handleCompanyRole}
            placeholder={companyRole}
          />
          <TextInput
            labelText="Company Description:"
            value={companyDescription}
            onChange={handleCompanyDescription}
            placeholder={companyDescription}
          />

          {/* Experience 2 */}
          <TextInput
            labelText="Second Company Name:"
            value={companyName2}
            onChange={handleCompanyName2}
            placeholder={companyName2}
          />
          <TextInput
            labelText="Second Company Location:"
            value={company2Location}
            onChange={handleCompany2Location}
            placeholder={company2Location}
          />
          <TextInput
            labelText="Second Company Duration:"
            value={company2Duration}
            onChange={handleCompany2Duration}
            placeholder={company2Duration}
          />
          <TextInput
            labelText="Second Company Role:"
            value={company2Role}
            onChange={handleCompany2Role}
            placeholder={company2Role}
          />
          <TextInput
            labelText="Second Company Description:"
            value={company2Description}
            onChange={handleCompany2Description}
            placeholder={company2Description}
          />

          {/* Education 1 */}
          <TextInput
            labelText="Institute Name:"
            value={institute}
            onChange={handleInstitute}
            placeholder={institute}
          />
          <TextInput
            labelText="Institute Location:"
            value={instituteLocation}
            onChange={handleInstituteLocation}
            placeholder={instituteLocation}
          />
          <TextInput
            labelText="Institute Duration:"
            value={instituteDuration}
            onChange={handleInstituteDuration}
            placeholder={instituteDuration}
          />
          <TextInput
            labelText="Degree:"
            value={instituteDegree}
            onChange={handleInstituteDegree}
            placeholder={instituteDegree}
          />
          <TextInput
            labelText="Institute Description:"
            value={instituteDescription}
            onChange={handleInstituteDescription}
            placeholder={instituteDescription}
          />

          {/* Education 2 */}
          <TextInput
            labelText="Second Institute Name:"
            value={institute2}
            onChange={handleInstitute2}
            placeholder={institute2}
          />
          <TextInput
            labelText="Second Institute Location:"
            value={institute2Location}
            onChange={handleInstitute2Location}
            placeholder={institute2Location}
          />
          <TextInput
            labelText="Second Institute Duration:"
            value={institute2Duration}
            onChange={handleInstitute2Duration}
            placeholder={institute2Duration}
          />
          <TextInput
            labelText="Second Degree:"
            value={institute2Degree}
            onChange={handleInstitute2Degree}
            placeholder={institute2Degree}
          />
          <TextInput
            labelText="Second Institute Description:"
            value={institute2Description}
            onChange={handleInstitute2Description}
            placeholder={institute2Description}
          />

          {/* Projects */}
          <TextInput
            labelText="Project Name:"
            value={project}
            onChange={handleProject}
            placeholder={project}
          />
          <TextInput
            labelText="Project Description:"
            value={projectDescription}
            onChange={handleProjectDescription}
            placeholder={projectDescription}
          />
          <TextInput
            labelText="Project Link:"
            value={projectLink}
            onChange={handleProjectLink}
            placeholder={projectLink}
          />
          <TextInput
            labelText="Second Project Name:"
            value={project2}
            onChange={handleProject2}
            placeholder={project2}
          />
          <TextInput
            labelText="Second Project Description:"
            value={project2Description}
            onChange={handleProject2Description}
            placeholder={project2Description}
          />
          <TextInput
            labelText="Second Project Link:"
            value={project2Link}
            onChange={handleProject2Link}
            placeholder={project2Link}
          />

          {/* Skills */}
          <TextInput
            labelText="Skill Name:"
            value={skillName}
            onChange={handleSkillName}
            placeholder={skillName}
          />
          <TextInput
            labelText="Second Skill Name:"
            value={skillName2}
            onChange={handleSkillName2}
            placeholder={skillName2}
          />

          {/* Interests */}
          <TextInput
            labelText="Interest:"
            value={interest}
            onChange={handleInterest}
            placeholder={interest}
          />
          <TextInput
            labelText="Second Interest:"
            value={interest2}
            onChange={handleInterest2}
            placeholder={interest2}
          />



        <div className="flex gap-3">

          <button type="submit" className="btn hover:bg-green-500 bg-green-600 text-whiteText py-2 px-5 md:p-4 rounded ">Save Changes</button>

          <button type="button" onClick={closeModal} className="btn hover:bg-red-500 bg-red-600 text-whiteText py-2 px-5 md:p-4 rounded">Cancel</button>

        </div>

      </div>
      
    </form>
  );
}

export default EditCertificateForm;
