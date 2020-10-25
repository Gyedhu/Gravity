import React, { useState } from "react";
import { View, NavHeader, ProfileCard, ContentContainer, Dashboard } from "../../components/index";
import { connect } from "react-redux";
import Code from "../Code";


const mapStateToProps = state => ({
    name: state.user.name,
    email: state.user.email,
    imageUrl: state.user.imageUrl,
    profession: state.user.profession,
    stars: state.user.stars
});

const mapDispatchToProps = dispatch => ({
});

const Homepage = ({ name, email, imageUrl, profession, stars }) => {

    const [currentRoute, setCurrentRoute] = useState("profile");

    const goto = route => setCurrentRoute(route);

    return (
        <View>
            <NavHeader />
            <ContentContainer>
                {
                    currentRoute === "profile" &&
                    <>
                        <ProfileCard
                            url={imageUrl}
                            name={name}
                            email={email}
                            profession={profession}
                            rating={stars}
                        />
                        <Dashboard goto={goto} />
                    </>
                }
                {
                    currentRoute === "code" &&
                    <Code></Code>
                } 
            </ContentContainer>
        </View >
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
