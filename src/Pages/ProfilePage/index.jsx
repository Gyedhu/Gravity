import React, { useEffect } from "react";
import { Navigation, ProfileCard, Dashboard } from "../../Container";

export default function ProfilePage() {

    const preventReload = e => {
        e.preventDefault();
        e.returnValue = "";
    };

    useEffect(() => {
        window.addEventListener("beforeunload", preventReload);
        return () => window.removeEventListener("beforeunload", preventReload);
    }, []);

    return (
        <>
            <Navigation />
            <ProfileCard />
            <Dashboard />
        </>
    );
} 
