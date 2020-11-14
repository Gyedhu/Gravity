import React, { useState } from "react";
import { Button, FilterIcon, FilterText } from "./style";
import { ExpantableButton } from "../..";
import { useEffect } from "react";


export default function FilterBox({ items, onSelect, selected, ...rest }) {

    const [expand, setExpand] = useState(false);
    const [showLabel, setShowLabel] = useState(true);
    const toggleFilter = () => {
        setExpand(prev => !prev);
        setShowLabel(true);
    }

    useEffect(() => {
        if (showLabel && !expand) {
            setTimeout(() => {
                setShowLabel(false);
            }, 1000);
        }
    }, [showLabel, expand]);

    const selectItem = e => {
        onSelect(e.target.innerHTML);
        toggleFilter();
    }

    return (
        <ExpantableButton
            expand={expand}

            button={
                <Button
                    onClick={toggleFilter}
                    {...rest}
                >
                    <FilterText showLabel={showLabel}>{selected}</FilterText>
                    <FilterIcon
                        className="ri-arrow-drop-down-line"
                        expand={expand}
                    />
                </Button>
            }

            options={
                <>
                    {
                        items.map((value, index) =>
                            <button
                                onClick={selectItem}
                                key={index}
                            >
                                {value}
                            </button>
                        )
                    }
                </>
            }
        >
        </ExpantableButton >
    );
};
