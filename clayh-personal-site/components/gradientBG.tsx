import React, { ReactNode } from 'react';

type GradientdivProps = {
    children:ReactNode
    className:string
}

const Gradientdiv:React.FC<GradientdivProps> = ({children,className}) =>{
    return(
        <div

            style={{
                backgroundImage: `radial-gradient( circle at ${GradientPosition().x}px ${GradientPosition().y}px, red  , blue 50% )`
            }}

            className={className}>
            {children}
        </div>
    )
}

const GradientPosition = () => {

    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const windowWidth = window.innerHeight

    React.useEffect(() => {
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