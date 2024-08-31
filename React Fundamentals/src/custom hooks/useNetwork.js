import { useEffect, useState } from "react";

export const useNetwork = () => {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        const isOnline = () => {
            setOnline(true);
        }

        const isOffline = () => {
            setOnline(false);
        }

        window.addEventListener('online', isOnline);
        window.addEventListener('offline', isOffline);

        return () => {
            window.removeEventListener('online', isOnline);
            window.removeEventListener('offline', isOffline);

        }
        
    }, [])

    return online;
}