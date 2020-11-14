import React from "react";
import { Container } from "./style";
import useFirebase from "../../../firebase/useFirebase";
import { useSelector } from "react-redux";

export default function UploadList() {
    const { fetchData } = useFirebase();
    const data = useSelector(state => state.write.data);

    return (
        <Container>
            <button onClick={fetchData}>fetch</button>
            message: { data && data.message} <br />
            date: { data && data.date}
        </Container >
    );
}
