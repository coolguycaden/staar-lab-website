import React from "react";
import { pb } from "../auth";
import PocketBase from 'pocketbase';
import { getPocketbaseUrl } from "../layout";

export function WelcomeText(){
    return (
      <div></div>
    );
}
  
export function RotatingImageGallery(){
    return(
      <div></div>
    );
}


/*
    Error received for the await in HOME_PAGE_DESCRIPTION_INFO, logged here because it has no impact (so far)
    on the running of program, I added the options as required in jsconfig but error is still up. 


    Top-level 'await' expressions are only allowed when the 'module' option is set to 
    'es2022', 'esnext', 'system', 'node16', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher.

*/
const HOME_PAGE_DESCRIPTION_INFO = await pb.collection('assets').getOne('02iw1b097xi8g0x');
const HOME_PAGE_DESCRIPTION_FILE = getPocketbaseUrl(HOME_PAGE_DESCRIPTION_INFO);
getHomePageDescription(HOME_PAGE_DESCRIPTION_FILE);

var description;
  
function getHomePageDescription(file){
    fetch(file)
      .then((res) => res.text())
      .then((text) => {
        description = text;
      })
      .catch((e) => console.log(e));
}
  

  
export function HomePageDescription(){
    return (
      <text>{description}</text>
    );
}
  