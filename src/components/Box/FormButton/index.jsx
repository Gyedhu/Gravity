import React from "react";
import { Container, Button, SubButton } from "./style";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    changePage: toPage => dispatch({ type: "CHANGE_PAGE", payload: toPage })
});

export default connect(null, mapDispatchToProps)(
    function FormButton({ title, subtext, changePage, to }) {

        const goto = e => {
            e.preventDefault();
            changePage(to);
        }

        return (
            <Container>
                <Button>{title}</Button>
                <SubButton onClick={goto}>{subtext}</SubButton>
            </Container>
        )
    });
