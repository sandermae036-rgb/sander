import { useState } from "react"


export default function Kort({ card, keyName, setCardsList, compare, setCompare }) {





    function handleClick(indexOfClicked, card) {
        // togles visibility for the current cards clicked ----------------------------------------------
        setCardsList(currentCards =>
            currentCards.map((card, index) =>
                index === indexOfClicked ? { ...card, cardVisibility: true } : card
            )
        )

        // chekcing if the cards are the same ------------------------------------------------------
        if (card.cardVisibility != true) {


            const comparisonList = [...compare, card]
            setCompare(comparisonList)

            if (compare.length === 1) {

                if (comparisonList[0].value == comparisonList[1].value) {

                    setCardsList(currentCards =>

                        currentCards.map((card) =>
                            card.cardVisibility == true && card.comparedSucces == false ? { ...card, comparedSucces: true } : card
                        )
                    )

                    setCompare([])
                } else {

                    setCardsList(currentCards =>

                        currentCards.map((card) =>
                            card.cardVisibility == true && card.comparedSucces == false ? { ...card, cardVisibility: false } : card
                        )
                    )

                    setCompare([])
                }
            }
        }
    }

    return (
        <>
            <li key={keyName} onClick={() => handleClick(keyName, card)}>
                {(card.cardVisibility == false) ? <p>Card</p> :
                    <p className="card__value hidden">{card.value + 1}</p>}
            </li>


        </>
    )
}
