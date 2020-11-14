import React from "react";
import { SearchBox, FilterBox, SearchField } from "../../components";
import { changeWritePage } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import useFirebase from "../../firebase/useFirebase";


const mapStateToProps = state => ({
    currentPage: state.write.currentPage
});

const mapDispatchToProps = dispatch => ({
    changeWritePage: page => dispatch(changeWritePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(

    function Search({ currentPage, changeWritePage }) {

        const [text, setText] = useState("");
        const { setData } = useFirebase();

        const onTextChange = text => {
            setText(text);
        }

        const onSelect = async selected => {
            changeWritePage(selected);
        }

        const submitData = async () => {
            await setData(text);
            
        }

        return (
            <SearchBox>
                <SearchField
                    onTextChange={onTextChange}
                    onSubmit={submitData}
                />
                <FilterBox
                    onSelect={onSelect}
                    selected={currentPage}
                    items={[
                        "Notes",
                        "Questions",
                        "Ideas",
                        "Info Page",
                        "Thoughts"
                    ]}
                />
            </SearchBox>
        );
    });
