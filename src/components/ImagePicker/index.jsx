import React from "react";
import { Container } from "./style";

const ImagePicker = ({ url, onClick }) => {


    // Picking an image from storage
    const imagePicker = () => {
        const filePicker = document.createElement("input");
        filePicker.setAttribute("type", "file");
        filePicker.click();

        filePicker.addEventListener("change", e => {
            const url = URL.createObjectURL(e.target.files[0]);
            onClick(e.target.files[0], url)
        });
    }


    return (
        <Container
            url={url}
            onClick={imagePicker}
        >
            {
                url.length === 0 &&
                <span
                    style={{  fontSize: "10em" }}
                    className="material-icons"
                >
                    add
            </span>
            }
        </Container>
    );
}

export default ImagePicker;
