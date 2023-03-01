'use client';
import { useState, useEffect } from "react"

const useDeviceSize = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [aspect, setAspect] = useState(0)
    const [devicePixelRatio, setDevicePixelRatio] = useState(1)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setAspect(window.innerWidth / window.innerHeight);
        setDevicePixelRatio(window.devicePixelRatio);
    }

    useEffect(() => {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return { width, height, aspect, devicePixelRatio }

}

export default useDeviceSize 