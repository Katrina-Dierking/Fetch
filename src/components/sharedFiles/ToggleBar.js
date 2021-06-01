import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import {TogglePg} from '../designFiles/ToggleDesign'

const ToggleBar = () => {

    const[darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {

        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <TogglePg>
            <nav className="toggleBar">
                <div className="dark-mode__toggle">
                    <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    />
                </div>
            </nav>
            <h4>Need dark mode? </h4>
        </TogglePg>
    );
};

export default ToggleBar;
