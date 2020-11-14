import React from "react";
import { Container, SearchIcon, Input } from "./style";

export default function SearchField({ onSubmit, onTextChange }) {

    const readText = e => {
        onTextChange(e.target.value);
    }

    return (
        <Container>
            <SearchIcon
                className="ri-search-2-line"
            />
            <Input
                onChange={readText}
                type="text"
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        onSubmit();
                    }
                }}
            />
        </Container>
    );
}
