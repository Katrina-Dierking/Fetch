import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const ToggleBar = () => {

    const[darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {

        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <>
        <h4>Need dark mode? </h4>
        <nav className="toggleBar">
            <div className="dark-mode__toggle">
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
        </>
    );
};

export default ToggleBar;