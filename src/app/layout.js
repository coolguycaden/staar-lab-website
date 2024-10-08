//Import Global Stylesheet
import './globals.css';

//Import Widgets
import { NavigationBar } from './navigation/navigation.tsx';

//Import Arsenal Font 
import { Arsenal } from 'next/font/google';


//Import PocketBase requirements
//import { authData } from './auth.js';
//import { pb } from './auth';

//CREATE ARESENAL FONT
const ARSENAL = Arsenal({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    style: 'normal'
})


//FETCH LOGO FROM DATABASE

// const WEBSITE_LOGO_INFO = await pb.collection('assets').getOne('xk9pst3nshy18p2');

// export function getPocketbaseUrl(itemToGetUrl){
//   const API_URL = "http://127.0.0.1:8090/api/files/"
//   const pbUrl = API_URL + itemToGetUrl.collectionId + '/' + itemToGetUrl.id + '/' + itemToGetUrl.uploadedFile;
//   return pbUrl
// }

//const WEBSITE_LOGO = getPocketbaseUrl(WEBSITE_LOGO_INFO);





const WEBSITE_LOGO = "../assets/images/staar-lab-image.png"

export const metadata = {
  title: 'STAAR LAB',
  description: 'Lab Website for Simulating Transportation and Automative Aging Research',
  
}

//export const HOME_PAGE_DESCRIPTION_INFO = await pb.collection('assets').getOne('02iw1b097xi8g0x');
//const HOME_PAGE_DESCRIPTION_INFO = 

//MAIN LAYOUT
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='main-body'>
        <main>
          <NavigationBar
            websiteLogo = {WEBSITE_LOGO}          
          />
          {children}
        </main>
      </body>
    </html>
  )
}
