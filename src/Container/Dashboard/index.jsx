import React from "react";
import { IconTextBox, VerticalBox } from "../../components";
import { changePage } from "../../Redux/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    gotoWrite: () => dispatch(changePage("/write")),
    gotoChat: () => dispatch(changePage("/chat")),
    gotoSearch: () => dispatch(changePage("/search"))
});

export default connect(null, mapDispatchToProps)(
    function Dashboard({ gotoWrite, gotoChat, gotoSearch }) {
        return (
            <VerticalBox mob-gap="50">
                <IconTextBox
                    iconClass="ri-pen-nib-line"
                    header="Write"
                    text="Write and upload your questions, answer, ideas, thoughts"
                    onClick={gotoWrite}
                />
                <IconTextBox
                    iconClass="ri-chat-3-line"
                    header="Chat"
                    text="Chat and share resources and discuss with your friends"
                    onClick={gotoChat}
                />
                <IconTextBox
                    iconClass="ri-search-2-line"
                    header="Search"
                    text="Search for questions, answers, ideas, and other resources"
                    onClick={gotoSearch}
                />
            </VerticalBox>
        );
    });
