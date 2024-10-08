import React from "react";
//import { pb } from "../auth.js";
//import PocketBase from 'pocketbase';
//import { getPocketbaseUrl } from "../layout.js";
//import { HOME_PAGE_DESCRIPTION_INFO } from "../layout.js";
//import readTextFromFile from "../universalFunctions.js";

function WelcomeText(){
    return (
      <div>
        <h1>Placeholder</h1>
      </div>
    );
}
  
function RotatingImageGallery(){
    return(
      <div>
        <h1>Placeholder</h1>
      </div>
    );
}


/*
    Error received for the await in HOME_PAGE_DESCRIPTION_INFO, logged here because it has no impact (so far)
    on the running of program, I added the options as required in jsconfig but error is still up. 


    Top-level 'await' expressions are only allowed when the 'module' option is set to 
    'es2022', 'esnext', 'system', 'node16', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher.

*/

//const HOME_PAGE_DESCRIPTION_FILE = getPocketbaseUrl(HOME_PAGE_DESCRIPTION_INFO);
//const HOME_PAGE_DESCRIPTION_FILE = "../assets/content/home_page_text.txt"
//const HOME_PAGE_DESCRIPTION_TEXT = "hi"//readTextFromFile(HOME_PAGE_DESCRIPTION_FILE);
function HomePageDescription(){
    return (
      <text>Hi</text>
      //<text>{HOME_PAGE_DESCRIPTION_TEXT}</text>
    );
}

export default function HomePage(){
  return (
    <div>
        <WelcomeText/>
        <RotatingImageGallery/>
        <HomePageDescription/>
    </div>
  );
}