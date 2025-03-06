import React, { ReactNode } from 'react';

type GradientdivProps = {
    children:ReactNode
    className:string
}

function GradientBG({children, className}: GradientdivProps) {    
    return(
        <div

            style={{
                backgroundImage: `radial-gradient( circle at ${GradientPosition().x}px ${GradientPosition().y}px, red  , blue 50% )`
            }}

            className={className}>
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