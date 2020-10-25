import React from "react";
import { Container, ProfileImage, UserInfo } from "./style";
import Rating from "../Rating";

const ProfileCard = ({ url, name, email, profession, rating }) => {
    return (
        <Container>
            <ProfileImage url={url} />
            <UserInfo>
                <div>{name}</div>
                <div>{email}</div>
                <div>{profession}</div>
                <Rating count={rating} />
            </UserInfo>
        </Container>
    );
}

export default ProfileCard;
