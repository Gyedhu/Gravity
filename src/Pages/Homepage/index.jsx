import React from "react";
import { View } from "../../components/index";
import styled from "styled-components";
import { colors } from "../../assets/theme";

const Header = styled.div`
    background: ${colors.secondary};
    box-sizing: border-box;
    display: flex;
    flex: 1; 
    flex-direction: column;
    justify-content: center;
    width: 100vw;

    & > h1 {
        color: ${colors.light};
        font-family: "Expletus Sans";
        font-size: 3em;
        padding: 20px;
        text-align: right;
    }
`;

const Container = styled.div`
    background: ${colors.light};
    box-sizing: border-box;
    flex: 1.5;
    position: relative;
    width: 100vw;
`;

const ProfileBox = styled.div`
    background: ${colors.light};
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    color: ${colors.primary};
    display: flex;
    flex-direction: column;
    font-family: "Expletus Sans";
    height: 400px;
    left: 50px;
    position: absolute;
    ${'' /* top: -30%; */}
    width: 250px; 
    padding: 10px;

        & > * {
            margin: 0;
            text-align: center;
        }

        & > div {
        background: url("https://www.pngitem.com/pimgs/m/516-5167304_transparent-background-white-user-icon-png-png-download.png") center center;
        background-size: cover;  
        flex: 1;
    }

    & > p:nth-child(2) {
        font-size: 2em; 
        margin-top: 20px;
    }
    

    & > p:nth-child(3) { 
        text-decoration: underline;
    }
    
    & > p  {
        font-size: 1.5em;   
    }
`;

const Homepage = () => {
    return (
        <View>
            {/* <Header>
                <h1>Share you knowledge</h1>
            </Header> */}
            <Container>
                <ProfileBox>
                    <div></div>
                    <p>Yedhumohanan.G</p>
                    <p>gyedhumohanan@gmail.com</p>
                    <p>Full Stack Web Developer</p>
                    <p>Student</p>
                </ProfileBox>
            </Container>
        </View >
    );
}

export default Homepage;
