import React from 'react'
import { Container, Header, SubHeader, HeaderIcon } from './style'
import { useDispatch } from 'react-redux'
import { changePage } from '../../../Redux/actions';

export default function WriteHeader() {

    const dispatch = useDispatch();

    return (
        <Container>
            <HeaderIcon
                className="ri-arrow-drop-left-line"
                onClick={() => dispatch(changePage("/profile"))}
            />
            <Header>Write</Header>
            <SubHeader>
                Write, upload and share you questions, answers, ideas, thoughts and more...
            </SubHeader>
            {/* <AddButton className="ri-add-line" /> */}
        </Container>
    )
}
