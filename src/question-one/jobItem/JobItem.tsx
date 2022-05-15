import React from "react"
import { DateFormatOption, Job } from '../../common/types'
import './jobItem.css'

export const JobItem: React.FC<{ job: Job }> = ({ job }) => {

  const dateFormatOption: DateFormatOption = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

  return (<div className='job-info'>
    <p><span className='bold-text'>Job's name: </span>{job.name}</p>
    <p><span className='bold-text'>Start date: </span>{new Date(job.start).toLocaleString("en-US", dateFormatOption)}</p>
    <p><span className='bold-text'>End date: </span>{new Date(job.end).toLocaleString("en-US", dateFormatOption)}</p>
    <p><span className='bold-text'>Contact ID: </span>{job.contactId}</p>
  </div>)
}