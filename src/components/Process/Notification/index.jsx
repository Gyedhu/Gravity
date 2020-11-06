import React, { useEffect, useState } from "react";
import { Container, NotificationText } from "./style";
import { popNotification } from "../../../Redux/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    notifications: state.process.notifications
});

const mapDispatchToProps = dispatch => ({
    popNotification: () => dispatch(popNotification())
});

const Notification = ({ notifications, popNotification }) => {

    const setTimer = useState(null)[1];

    useEffect(() => {
        if (notifications !== null) {
            setTimer(timer => {
                clearTimeout(timer);
                return setTimeout(() => {
                    popNotification();
                }, 3000);
            });
        }

    }, [notifications, popNotification, setTimer]);

    if (notifications)
        return (
            <Container>
                <NotificationText>{notifications}</NotificationText>
            </Container>
        );
    else return null
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
