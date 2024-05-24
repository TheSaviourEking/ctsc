import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import API_BASE_URL from "../config/config";

import './FeatureStoryHome.css';

const FeatureStory = ({ isHome }) => {

    const [featureStory, setFeatureStory] = useState([]);

    useEffect(() => {
        const getFeatureStories = async () => {
            let response = null;
            if (isHome) response = await fetch(`${API_BASE_URL}/story/feature-story/`);
            const featureStories = await response.json();

            setFeatureStory(() => featureStories[0]);
        };
        getFeatureStories();
    }, []);

    function getLocalTime(timeStamp) {
        const date = new Date(timeStamp);

        // Convert UTC time to local time
        const localDate = date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        return localDate
    }

    return (
        isHome ? (
            <section className="HomeFeatureStory">
                <div className="container-fluid ctsc-story">
                    <div className="container content-section">
                        <div className="row justify-content-center">
                            <div className="col-11 col-md-7 ">
                                <h2>This Week's Feature Story</h2>
                                {/* <img src="." alt="" className="img-fluid" /> */}
                                {Object.keys(featureStory).length > 0 ? (
                                    <div>
                                        <div className="image-container">
                                            <img src={featureStory.image} alt={featureStory.topic} className="img-fluid" />
                                        </div>
                                        <div className="ctsc-story-detail">
                                            <div className="ctsc-story-header">
                                                <h2>{featureStory.topic}</h2>
                                                <span>{getLocalTime(featureStory.created_at)}</span>

                                            </div>
                                            <p className="ctsc-story-p">
                                                {featureStory.short_description}
                                            </p>

                                            <Link to={`/stories/${featureStory.story_id}`} className="btn-tetiary">Read More</Link>
                                        </div>
                                    </div>
                                ) : (
                                    <h1>No Featured story for this week</h1>
                                )}

                                <Link to="/news-and-stories" className="btn-primary ctsc-story-btn"> EXPLORE ALL NEWS &
                                    STORIES</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </section>) : (
            ''
        )
    )
}

export default FeatureStory;
