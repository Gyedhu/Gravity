import React from "react";
import { Container } from "./style";
// import CodeList from "../CodeList";
import DashboardContainer from "../DashboardContainer";

const Dashboard = ({ goto }) => {

    return (
        <Container>
            <DashboardContainer goto={goto} />
            {/* <CodeList /> */}
        </Container>
    );
}

export default Dashboard;
