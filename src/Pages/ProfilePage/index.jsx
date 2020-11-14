import React, { useEffect } from "react";
import { Navigation, ProfileCard, Dashboard } from "../../Container";
import { ScrollView } from "../../components";

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
            <ScrollView>
                <ProfileCard />
                <Dashboard />
            </ScrollView>
        </>
    );
} 
