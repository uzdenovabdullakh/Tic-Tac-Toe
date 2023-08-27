import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './scss/introduction.scss';

function Intro() {
    const [time, setTime] = useState(5)
    const navigate = useNavigate()
    
    useEffect(() => {
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
    }, [time]);

    if (time===0){
        navigate('/game')
    }
   
    return (
        <div className="introduction-container">
            <p>Wait...{time}</p>
        </div>
    );
}

export default Intro;
