import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../services/axios';  // Import your axios instance

const LabGame = () => {
    const { handleGameData } = useOutletContext();
    const [isLoading, setIsLoading] = useState(true);
    const [initialScore, setInitialScore] = useState(null);
    const { labID } = useParams();

    useEffect(() => {
        // Fetch the initial score for this lab
        const fetchScore = async () => {
            try {
                const response = await api.get(`/progress/${labID}`, { withCredentials: true });
                setInitialScore(response.data.score || 0);
                handleGameData({ score: response.data.score || 0, lab_id: labID });
            } catch (error) {
                console.error('Error fetching initial score:', error);
            }
        };

        fetchScore();


        const iframe = document.getElementById('lab-iframe');
        const handleLoad = () => {
            setIsLoading(false);
        };
        const handleMessage = (event) => {
            if (event.origin === window.location.origin) {
                const data = { ...event.data, lab_id: labID };
                console.log('Received data from iframe:', data);
                setInitialScore(data.score);
                handleGameData(data); // Send updated score to parent
            }
        };

        if (iframe) iframe.addEventListener('load', handleLoad);
        window.addEventListener('message', handleMessage);

        return () => {
            if (iframe) iframe.removeEventListener('load', handleLoad);
            window.removeEventListener('message', handleMessage);
        };
    }, [labID, handleGameData]);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {isLoading && (
                <div className="loader" style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    color: '#9f79e6', fontSize: '1.5rem', fontWeight: 'bold'
                }}>
                    Loading...
                </div>
            )}
            <iframe
                id="lab-iframe"
                src={`/labs/lab_${labID}/lab_${labID}.html`}
                title="LabPage Game"
                width="100%"
                height="100%"
                style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
            ></iframe>
        </div>
    );
};

export default LabGame;