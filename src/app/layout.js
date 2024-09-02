//Import Global Stylesheet
import './globals.css';

//Import Widgets
import { NavigationBar } from './navigation/navigation.tsx';

//Import Arsenal Font 
import { Arsenal } from 'next/font/google';


//Import PocketBase requirements
import { authData } from './auth';
import { pb } from './auth';

const arsenal = Arsenal({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    style: 'normal'
})


const websiteLogo = await pb.collection('assets').getList(1, 1, {
  sort: '-created',
});


export const metadata = {
  title: 'STAAR LAB',
  description: 'Lab Website for Simulating Transportation and Automative Aging Research',
  
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <main>
          <NavigationBar/>
          {children}
        </main>
      </body>
    </html>
  )
}
