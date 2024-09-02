import React from "react";
import { HomePageDescription, RotatingImageGallery, WelcomeText } from "./home/page";

export default function HomePage() {
    return (
        <header className="">
            <WelcomeText/>
            <RotatingImageGallery/>
            <HomePageDescription/>
        </header>
    );
}