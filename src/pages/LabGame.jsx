import {useOutletContext, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

const LabGame = () => {
    const {handleGameData} = useOutletContext();
    const [isLoading, setIsLoading] = useState(true);
    const {labID} = useParams();

    useEffect(() => {
        const iframe = document.getElementById('lab-iframe');
        const handleLoad = () => {
            setIsLoading(false);
        }
        const handleMessage = (event) => {
            if (event.origin === window.location.origin) {
                const data = {...event.data,lab_id:labID}
                console.log('handleMessage:LabGame exec : ',data);
                handleGameData(data);
            }
        };

        if (iframe) {
            iframe.addEventListener('load', handleLoad);
        }

        window.addEventListener('message',handleMessage);

        return ()=>{
            window.removeEventListener('message', handleMessage);
            iframe.removeEventListener('load', handleLoad);
        }


    }, [labID,handleGameData]);

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