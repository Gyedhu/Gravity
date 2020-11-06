import React from "react";
import { Image } from "./style";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    url: state.user.imageUrl
});

export default connect(mapStateToProps)(
    function ProfileImage({ url }) {
        return (
            <Image
                url={url}
            />
        )
    });
