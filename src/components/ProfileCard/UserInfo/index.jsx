import React, { useState, useEffect } from "react";
import { Container, BigText, Text, StarContainer, Star } from "./style";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    name: state.user.name,
    email: state.user.email,
    url: state.user.imageUrl,
    profession: state.user.profession,
    stars: state.user.stars
});


export default connect(mapStateToProps)(
    function UserInfo({ name, email, url, profession, stars }) {

        const [starList, setStarList] = useState([]);

        useEffect(() => {
            const starList = [];
            let count = stars;

            for (let i = 0; i < 5; i++) {
                count > 0 ? starList.push(true) : starList.push(false);
                count--;
            }

            setStarList(starList);
        }, [stars]);

        return (
            <Container>
                <BigText>{name}</BigText>
                <Text>{email}</Text>
                <Text>{profession}</Text>
                <StarContainer>
                    {
                        starList.map((value, index) =>
                            <Star active={value} key={index} className="ri-star-line" />)
                    }
                </StarContainer>
            </Container>
        )
    });
