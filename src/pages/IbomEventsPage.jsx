import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import './styles/IbomEventsPage.css';
import Spinner from '../components/Spinner';

const IbomEventsPage = () => {
    
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const API_BASE_URL = import.meta.env.VITE_API_URL;
        const getEvent = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/event/`);
                const fetchedEvents = await response.json();
                setEvents(() => fetchedEvents); // Update state with fetched data;
            } catch (error) {
                console.error('ERROR:', error);
            } finally {
                setLoading(() => false);
            }
        };
    
        getEvent();
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
        <div className='ibomEventsPage'>
            <div className="container-fluid ibom-event-bg subpage-background">
                <div className="center-header">
                    <h2 className="pb-2 text-center bld">IBOM EVENTS</h2>
                </div>
            </div>
            {loading ? (
                <Spinner loading={loading} />
            ) : (
                events.length > 0 ? (
                    <div className="container card-container">
                        {events.map(event => (
                            <div className="flex eventpage-card" key={event.event_id}>
                                <div className='image-wrapper'>
                                    <img src={event.event_image} alt={event.event_name} className="img-flui" />
                                </div>
                                <div className="eventpage-card-text">
                                    <div className="upper">
                                        <h4>{event.event_name}</h4>
                                        <div>
                                            <span>{getLocalTime(event.start_time)}</span>-<span>{getLocalTime(event.end_time)}</span>
                                        </div>
                                    </div>

                                    <p className="mb-2">{event.about}</p>
                                    <Link to={`/events/${event.event_id}`} className="btn btn-primary ibom-event-btn">View Event</Link>
                                </div>
                            </div>
                        ))
                        }
                    </div >
                ) : <h3 className='container'>No events yet</h3>
            )}

        </div>
    )
}

export default IbomEventsPage;
