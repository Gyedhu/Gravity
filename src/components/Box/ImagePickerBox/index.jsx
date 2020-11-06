import React from "react";
import { Container, Image, Buttons, Label, PickButton } from "./style";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    url: state.user.imageUrl
});

export default connect(mapStateToProps)(
    function ImagePickerBox({ onPick, url, onSubmit, onSkip }) {
        const pickImage = () => {
            const filePicker = document.createElement("input");
            filePicker.setAttribute("type", "file");
            filePicker.addEventListener("change", e => {
                const file = e.target.files[0];
                onPick(file);
            })
            filePicker.click();
        }

        return (
            <Container>
                <Label>Pick an Image (Optional)</Label>
                <Image url={url}></Image>
                <PickButton type="button" onClick={pickImage} >
                    <i className="ri-folder-line"></i>
                    <span>Pick from file</span>
                </PickButton>
                <Buttons>
                    <button type="button" onClick={onSubmit}>Submit</button>
                    <button type="button" onClick={onSkip}>skip</button>
                </Buttons>
            </Container>
        )
    });
