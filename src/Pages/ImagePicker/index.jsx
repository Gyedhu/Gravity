import React from "react";
import { AuthenticationContainer, LogoBox, ImagePickerBox } from "../../components";
import useImageUploader from "../../firebase/useImageUploader";
import { setUrl, changePage } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState } from "react";

const mapDispatchtoProps = dispatch => ({
    setUrl: url => dispatch(setUrl(url)),
    gotoProfile: () => dispatch(changePage("/profile"))
});

export default connect(null, mapDispatchtoProps)(
    function OtherInfo({ setUrl, gotoProfile }) {

        const uploadImage = useImageUploader();
        const [file, setFile] = useState(null);

        const pickImage = file => {
            const url = URL.createObjectURL(file);
            setUrl(url);
            setFile(file);
        }

        const onSubmit = async () => {
            uploadImage(file);
        }

        return (
            <AuthenticationContainer >
                <LogoBox />
                <ImagePickerBox
                    onPick={pickImage}
                    onSkip={gotoProfile}
                    onSubmit={onSubmit}
                />
            </AuthenticationContainer>
        )
    });
