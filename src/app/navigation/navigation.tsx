import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function DropdownNavigationHoverBox(){
    return (

    );
}

export function DropdownNavigationButton({buttonLink, buttonText, buttonClass}){
    return (
        <div className={['navigation-button-dropdown-format', buttonClass].join(" ")}>
            <a href={buttonLink}>{buttonText}</a>
        </div>
    );
}

export function ClickNavigationButton({buttonLink, buttonText, buttonClass}){
    return (
       <div className={['navigation-button-click-format', buttonClass].join(" ")}>
         <a href={buttonLink}>{buttonText}</a>
       </div>
    );
}
   
export function NavigationBar(){
    return (
        <nav className="navigation-bar">

            <div className="navigation-buttons">


                <ClickNavigationButton
                    buttonLink={'./'}
                    buttonText={'Home'}
                    buttonClass={'home-button'}
                />
                
                <ClickNavigationButton
                    buttonLink={'./professor/'}
                    buttonText={'Professor'}
                    buttonClass={'professor-button'}
                />

                <ClickNavigationButton
                    buttonLink={'./team/'}
                    buttonText={'Team'}
                    buttonClass={'team-button'}
                />

                <ClickNavigationButton
                    buttonLink={'./research/'}
                    buttonText={'Research'}
                    buttonClass={'navigation-button-click-format'}
                />
            </div>
            
        </nav>
    );
}