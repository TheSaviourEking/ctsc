import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const LatestJobsCard = ({ job }) => {
    const [viewAllRequirements, setViewAllRequirements] = useState(false);

    let requirements = job.requirements.split(',');
    let allRequirements = job.requirements.split(',');

    if (!viewAllRequirements) {
        requirements = requirements.slice(0, 3);
    }

    return (
        <div className="col-11 col-md-5 col-lg-4 job-opportunities">
            <div>
                <div className="top-section mb-2">
                    <div className="div">
                        <h5 className="job-title"><i className="fa-solid fa-briefcase"></i> {job.title.toUpperCase()}</h5>
                        <p>{job.hiring_company} <span className="job-status">{job.tag}</span></p>
                    </div>
                    <div className="circle-bg"></div>
                </div>

                <div className="bottom-section">
                    <h5 className="mb-2">Requirements & Skills</h5>
                    {requirements.map((requirements, i) => {
                        return (
                            <h6 key={i}>{requirements}</h6>
                        )
                    })}

                    <Link onClick={() => setViewAllRequirements(r => !r)}>{allRequirements.length <= 3 ? '' : viewAllRequirements ? 'view less' : 'view all'}</Link>
                </div>
            </div>
            <div className="apply-btn">
                <Link to='/apply' className="btn btn-primary" style={{ padding: '0em 1em' }}>Apply</Link>
            </div>
        </div>
    )
}

export default LatestJobsCard;
