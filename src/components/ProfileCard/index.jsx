import React from "react";
import { Container, ProfileImage, UserInfo } from "./style";
import Rating from "../Rating";

const ProfileCard = ({ url, name, email, profession, rating }) => {
    return (
        <Container>
            <ProfileImage url={url} delay="0" />
            <UserInfo>
                <div  delay=".1">{name}</div>
                <div  delay=".2">{email}</div>
                <div  delay=".3">{profession}</div>
                <Rating count={rating}  delay=".4" />
            </UserInfo>
        </Container>
    );
}

export default ProfileCard;
