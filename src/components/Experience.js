import { useState } from "react"
import { Link } from "react-router-dom"
import './styles/experience.scss'

let Experience = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Instructional Associate",
      company: "General Assembly",
      date: 'March 2023 - Present',
      description: ['Provided code review & feedback for a group of 22 of students on adaily basis, as well as 4 major projects feedback.', 'Orchestrated tutorials among various tech stacks', 'Focus on improving coding best practices', 'Provide general and technical instructional support for the students inthe cohort']
    },
    {
    id: 1,
    title: "Sales & Marketing Manager",
    company: 'Sunshade Shutters & Blinds',
    date: 'February 2021-May 2022',
    description: ['Managed sales growth by targeting key markets effectively.', 'Led targeted marketing campaigns to key demographics via analysis', 'Used Data Analysis for market segmentation'],
    show: false
    },
    {
      id: 2,
      title: "Sales Executive",
      company: 'Alsco Australia',
      date: 'November 2019 - February 2021',
      description: ['Proactively targeted demographics through analysis to deliver successful sales results.', 'Managed Stakeholder relationships both internally and externally.', 'Established relationships with several high profile businesses and worked in tangent with account managers.'],
      show: false
      },
      {
        id: 3,
        title: "Business Development Consultant",
        company: 'Staples/Winc Australia',
        date: 'April 2017 - July 2019',
        description: ['Managed successful sales growth with a focus on Software and Hardware.', 'Worked in tangent with business units to consistently deliver results.', 'Maintained relationships ranging from lower management to executives with companies up to 500 staff'],
        show: false
        }
      
  ])

  const handleToggle = (id) => {
    setJobs(
      jobs.map((job) => 
        job.id === id ? {...job, show: !job.show} : job
      )
    )
  }

  return (
    <div className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
      </div>
      <div className="job">
        {jobs.map((job) => 
          <div key={job.id}>
            <h3>{job.title}
            <button onClick={() => handleToggle(job.id)}>Click here to find out more</button>
            </h3>
            <p>{job.company}<br />{job.date}</p>
            
            {job.show && (
              <ul>
                {job.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>  
        )}
      </div>
    </div>

   
  )
}

export default Experience
