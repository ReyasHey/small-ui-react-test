import { useState } from "react";

import './JobPostings.css';

export const JobPostings = () => {
  const [jobs, setJobs] = useState([
    {
      id: 77874,
      title: "E - commerce Video Editing | Photo Editing",
      desc: "Looking for a graphic designer. Some photoshop or gimp experience is a plus as I will ahve you do some of this, but I will teach you ajust about everything you need to know. You will be doing a variety of tasks, almost all of which I will create the tutorials for you.",
      pay: "$3 hourly",
      applicationSent: "23 hours ago",
      poster: "Angel Trujilio",
      isClosed: false
    },
    {
      id: 94574,
      title: "Virtual Assistant | Amazon listing dropshipping",
      desc: "Looking for a graphic designer. Some photoshop or gimp experience is a plus as I will ahve you do some of this, but I will teach you ajust about everything you need to know. You will be doing a variety of tasks, almost all of which I will create the tutorials for you.",
      pay: "$100 weekly",
      applicationSent: "2 days ago",
      poster: "Dhamielyn Sarmiento",
      isClosed: false
    },
    {
      id: 94676,
      title: "E - commerce Video Editing | Photo Editing",
      desc: "Looking for a graphic designer. Some photoshop or gimp experience is a plus as I will ahve you do some of this, but I will teach you ajust about everything you need to know. You will be doing a variety of tasks, almost all of which I will create the tutorials for you.",
      pay: "$3 hourly",
      applicationSent: "23 hours ago",
      poster: "Angel Trujilio",
      isClosed: true
    }
  ])

  return (
    <div>
        <h2>Job Application</h2>
        <div style={{ backgroundColor: "#1a1a1a" }}>
            {jobs.map((job) => (
                <article key={job.id} className="post">
                    <header>
                        <h3>{job.title}</h3>
                        <p>&nbsp;| Job ID: {job.id}</p>
                    </header>
                    <i style={{ display: "block", textAlign: "left" }}>Posted by {job.poster}</i>
                    <p>{job.desc}</p>
                    <div className="postFooter">
                        <p>{job.pay}</p>
                        { job.isClosed ? <p>Status: <span style={{ color: "orange" }}>Closed</span></p> : <p>Sent: {job.applicationSent}</p> }
                    </div>
                </article>
            ))}
        </div>
    </div>
  )
}
