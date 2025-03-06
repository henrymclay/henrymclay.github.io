import React, { ReactNode } from 'react';

type GradientdivProps = {
    children:ReactNode
    className:string
    lightSize:string
}

function GradientBG({children, className, lightSize}: GradientdivProps) {    
    return(
        <div
            style={{
                backgroundImage: `radial-gradient( circle at ${GradientPosition().x}px ${GradientPosition().y}px, rgba(255,255,0,1) 0%, rgba(255,0,255,1) 1%, rgba(127,255,255,1) 2%, rgba(0,0,0,1) ${lightSize}%, rgba(165,163,163,0.15) 99% )`
            }}
            className={className}
        >
            {children}
        </div>
    )
};

const GradientPosition = () => {

    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    React.useEffect(() => {
        const windowWidth = window.innerHeight
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (mousePosition)
};

export default GradientBG