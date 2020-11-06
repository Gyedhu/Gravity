import React from "react";
import { Container, LoadingIcon, LoadingText } from "./style";
import { connect } from "react-redux";


const mapStateToProps = state => ({
    loading: state.process.loading
});


const Loading = ({ loading }) => {
    if (loading.length > 0)
        return (
            <Container>
                <LoadingIcon className="ri-loader-line"></LoadingIcon>
                <LoadingText>{loading}</LoadingText>
            </Container>
        );
    else return null;
}

export default connect(mapStateToProps)(Loading);
