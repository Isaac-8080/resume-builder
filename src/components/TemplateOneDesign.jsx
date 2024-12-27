// exported to TemplateOne
import { Link } from "react-router-dom"

import EditModal from "./EditModal"
import { FaExchangeAlt } from "react-icons/fa"

const TemplateOneDesign = ({handleEditForm, templateDetails}) => {

  return (
    <>
      {
        templateDetails.map((template) => {
          return(
            <div key={template.id} className="shadow-xl mt-10">

                <div className="flex flex-col md:flex-row gap-2 justify-between bg-[#F2F2F2] rounded-t-md p-3 md:p-0">

                  <Link to="/templates">
                    <button className='flex items-center justify-center gap-1 bg-darkBg py-3 px-5 w-full md:w-fit'>
                      <FaExchangeAlt className='text-whiteText text-xl' />
                      <span className='text-whiteText'>Change Template</span>
                    </button>
                  </Link>          

                  <EditModal handleEditForm={handleEditForm} template={template} />

                </div>

              
                <div className="w-full md:w-[700px] mx-auto my-0 p-10 rounded-[3px] bg-[#fff] container">
                  <div className="mb-[30px]">
                    <div className="text-[40px] uppercase mb-[5px]">
                      <span className="font-bold">{template.firstName}</span> 
                      <span className="font-light">{template.lastName}</span>
                    </div>
                    <div className="mb-5">
                      <span className="text-[#999] font-light">Email: </span>
                      <span className="text-[#999] font-light">{template.email}</span>
                      <span className="h-2.5 inline-block mx-2.5 my-0 border-l-2 border-l-[#999] border-solid"></span>
                      <span className="phone">Phone: </span>
                      <span className="phone-val">{template.phone}</span>
                    </div>
                    
                    <div className="about">
                      <span className="font-[bold] inline-block underline mr-2.5">{template.position} </span>
                      <span className="desc">
                        {template.positionDescription}
                      </span>
                    </div>
                  </div>
                  <div className="leading-5">
                    <div className="mb-10">
                      <div className="text-[#54AFE4] font-bold mb-[10px] uppercase">Experience</div>
                      <div className="section__list">
                        <div className="mb-10">
                          <div className="left   align-top inline-block w-[60%]">
                            <div className="name   font-bold">{template.companyName}</div>
                            <div className="addr">{template.companyLocation}</div>
                            <div className="duration">{template.companyDuration}</div>
                          </div>
                          <div className="right   align-top inline-block w-[39%]">
                            <div className="name   font-bold">{template.companyRole}</div>
                            <div className="desc">{template.companyDescription}</div>
                          </div>
                        </div>

                        <div className="mb-10">
                          <div className="left   align-top inline-block w-[60%]">
                            <div className="name   font-bold">{template.companyName2}</div>
                            <div className="addr">{template.company2Location}</div>
                            <div className="duration">{template.company2Duration}</div>
                          </div>
                          <div className="right   align-top inline-block w-[39%]">
                            <div className="name   font-bold">{template.company2Role}</div>
                            <div className="desc">{template.company2Description}</div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="section last-of-type:mb-0">
                      <div className="text-[#54AFE4] font-bold mb-[10px] uppercase">Education</div>
                      <div className="section__list">
                        <div className="mb-10">
                          <div className="left   align-top inline-block w-[60%]">
                            <div className="name   font-bold">{template.institute}</div>
                            <div className="addr">{template.instituteLocation}</div>
                            <div className="duration">{template.instituteDuration}</div>
                          </div>
                          <div className="right   align-top inline-block w-[39%]">
                            <div className="name   font-bold">{template.instituteDegree}</div>
                            <div className="desc">{template.instituteDescription}</div>
                          </div>
                        </div>
                        <div className="mb-10">
                          <div className="left   align-top inline-block w-[60%]">
                            <div className="name   font-bold">{template.institute2}</div>
                            <div className="addr">{template.institute2Location}</div>
                            <div className="duration">{template.institute2Duration}</div>
                          </div>
                          <div className="right   align-top inline-block w-[39%]">
                            <div className="name   font-bold">{template.institute2Degree}</div>
                            <div className="desc">{template.institute2Description}</div>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                    <div className="section last-of-type:mb-0">
                      <div className="text-[#54AFE4] font-bold mb-[10px] uppercase">Projects</div> 
                      <div className="section__list">
                        <div className="mb-10">
                          <div className="name   font-bold">{template.project}</div>
                          <div className="text">{template.projectDescription}
                          <a href={template.project2Link} className="no-underline text-black italic hover:underline hover:text-black">{template.project2Link}</a>
                          </div>
                        </div>
                        
                        <div className="mb-10">
                          <div className="name   font-bold">{template.project2}</div>
                          <div className="text">{template.project2Description}
                            <a href={template.project2Link} className="no-underline text-black italic hover:underline hover:text-black">{template.project2Link}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section last-of-type:mb-0">
                      <div className="text-[#54AFE4] font-bold mb-[10px] uppercase tracking-[2px]">Skills</div>
                      <div className="skills">

                        <div className="mb-[10px]">

                          <div className="left   align-top inline-block w-[60%]">
                            <div className="name   font-bold">
                              {template.skillName}
                            </div>
                          </div>

                        </div>
                        
                      </div>
                      <div className="mb-[10px]">
                        <div className="left   align-top inline-block w-[60%]">
                          <div className="name   font-bold">
                          {template.skillName2}
                          </div>
                        </div>
                          
                    </div>
                        
                      </div>
                    <div className="section last-of-type:mb-0">
                    <div className="text-[#54AFE4] font-bold mb-[10px] uppercase">
                      Interests
                      </div>
                      <div className="section__list">
                        <div className="mb-10">
                          {template.interest + ", " + template.interest2}
                        </div>
                      </div>
                    </div>
                    </div>
                </div>

            </div>
            
          )
        })
      }
      
    </>
  )
}

export default TemplateOneDesign
