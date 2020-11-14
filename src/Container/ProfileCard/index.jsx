import React from "react" ;
import { ProfileImage, UserInfo, VerticalBox } from "../../components";

export default function ProfileCard() {
    return (
        <VerticalBox>
            <ProfileImage />
            <UserInfo />
        </VerticalBox>
    );
} 
