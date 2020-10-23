import React, { useEffect } from "react";
import { Container, NotificationLogo, NotificationText } from "./style";
import { setNotification } from "../../Redux/actions";
import { connect } from "react-redux";



const mapStateToProps = state => ({
    notification: state.process.notification
});

const mapDispatchToProps = dispatch => ({
    setNotification: value => dispatch(setNotification(value))
});

const Notification = ({ notification, setNotification }) => {

    useEffect(() => {
        if (notification.length > 0) {
            setTimeout(() => {
                setNotification("");
            }, 3000);
        }
    }, [notification, setNotification]);

    if (notification.length > 0)
        return (
            <Container>
                <NotificationLogo className="material-icons">notifications_active</NotificationLogo>
                <NotificationText>{notification}</NotificationText>
            </Container>
        );
    else return null
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
