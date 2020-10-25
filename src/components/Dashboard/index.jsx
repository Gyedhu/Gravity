import React, { useState } from "react";
import { Container, Content } from "./style";
import CodeList from "../CodeList";
import DashboardContainer from "../DashboardContainer";

const Dashboard = () => {
    const [page, setPage] = useState(1);

    return (
        <Container page={page}>
            <span onClick={() => setPage(page => page === 1 ? 2 : 1)} className="material-icons">{page === 1 ? "navigate_next" : "navigate_before"}</span>
            <DashboardContainer />
            <CodeList />
        </Container>
    );
}

export default Dashboard;
