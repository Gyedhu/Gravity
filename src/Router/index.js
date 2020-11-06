import React from "react";
import { ProfilePage, Signin, Signup, OtherInfo, ImagePicker } from "../Pages/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    currentPage: state.route.currentPage
});

export default connect(mapStateToProps)(function Router({ currentPage }) {
    switch (currentPage) {
        case "/":
            return <Signin />;
        case "/signup":
            return <Signup />;
        case "/profile":
            return <ProfilePage />
        case "/other_info":
            return <OtherInfo />
        case "/image_picker":
            return <ImagePicker />
        default:
            return null;
    }
});
