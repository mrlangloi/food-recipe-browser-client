import React from "react";

function DarkModeBox(props) {

    // const darkMode = useTheme();
    // const toggleTheme = useThemeUpdate();

    return (
        <div className="dark-mode-div">
            <form action="#">
                <label className="dark-mode-label">
                    <input type="checkbox" className="filled-in" checked={props.darkMode}
                    onChange={() => props.setDarkMode(!props.darkMode)}
                    id="darkMode"/> 
                    <span><i className="dark-mode-icon material-icons">brightness_2</i></span>
                </label>
            </form>
        </div>
    );
}

export default DarkModeBox;
