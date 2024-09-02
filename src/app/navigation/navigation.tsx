import React from "react";

//Necessary for the icons next to the dropdown buttons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


import '../globals.css';

/*function DropdownNavigationHoverBox({buttonLink, buttonText, buttonClass}){
    return (
        <div className={[''].join(" ")}>

        </div>
    );
}*/

function DropdownNavigationButton({buttonLink, buttonText, buttonClass}){
    return (
        <div className={['navigation-button-dropdown-format', buttonClass].join(" ")}>
            <a href={buttonLink}>{buttonText}</a>
            <FontAwesomeIcon icon={faAngleDown} className="navigation-button-dropdown-icon"/>
        </div>
    );
}

function ClickNavigationButton({buttonLink, buttonText, buttonClass}){
    return (
       <div className={['navigation-button-click-format', buttonClass].join(" ")}>
         <a href={buttonLink}>{buttonText}</a>
       </div>
    );
}

function NavigationImageAndText({websiteLogo}){
    return (
        <div className="navigation-img-text">
            <img src={websiteLogo} className="staar-logo"/>
            <h1 className="group-name">STAAR LAB</h1>
        </div>
    );
}

export function NavigationBar({websiteLogo}){
    return (
        <nav className="navigation-bar">

            <NavigationImageAndText
                websiteLogo = {websiteLogo}
            />


            <div className="navigation-buttons">


                <ClickNavigationButton
                    buttonLink={'../'}
                    buttonText={'Home'}
                    buttonClass={'home-button'}
                />
                
                <ClickNavigationButton
                    buttonLink={'./professor/'}
                    buttonText={'Professor'}
                    buttonClass={'professor-button'}
                />

                <DropdownNavigationButton
                    buttonLink={'./team/'}
                    buttonText={'Team'}
                    buttonClass={'team-button'}
                />

                <DropdownNavigationButton
                    buttonLink={'./research/'}
                    buttonText={'Research'}
                    buttonClass={'navigation-button-click-format'}
                />

                <ClickNavigationButton
                    buttonLink={'./publications/'}
                    buttonText={'Publications'}
                    buttonClass={'publications-button'}
                />

                <ClickNavigationButton
                    buttonLink={'./funding/'}
                    buttonText={'Funding'}
                    buttonClass={'funding-button'}
                />

                <ClickNavigationButton
                    buttonLink={'./gallery/'}
                    buttonText={'Gallery'}
                    buttonClass={'gallery-button'}
                />
            </div>
            
        </nav>
    );
}