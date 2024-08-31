import {useEffect, useState} from 'react';

export const useSubscription = () => {
    const [position, setPosition] = useState({ x:0, y:0});

    useEffect(() => {
        const handlePosition = (e) => setPosition({x:e.clientX, y:e.clientY});

        window.addEventListener('mousemove', handlePosition);

        return () =>  {
            window.removeEventListener('mousemove', handlePosition);
        }
    }, [])

    return position;

}
