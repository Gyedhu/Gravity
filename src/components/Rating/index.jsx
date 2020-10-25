import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { colors } from "../../assets/theme";

const Rating = ({count}) => { 
    
    const [ratingArray, setRatingArray] = useState([]);

    useEffect(() => {
        let i = count - 1;
        let newRatingArray = [false, false, false, false, false];

        while (i >= 0) {
            newRatingArray[i] = true;
            i--;
        }

        setRatingArray(newRatingArray);
    }, [count]);

    return (
        <Container>
            {
                ratingArray.map((value, index) =>
                    <span
                        style={{ color: value ? colors.secondary : "#BCD" }}
                        className="material-icons"
                        key={index}
                    >
                        star
                </span>
                )
            }
        </Container>
    );
}

export default Rating;
