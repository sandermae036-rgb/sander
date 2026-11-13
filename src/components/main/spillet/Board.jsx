import { useEffect, useState } from "react"
import Kort from "./Kort"


export default function Board() {

    const numberOfDifferentCards = 6
    const [cardsList, setCardsList] = useState([])
    const [compare, setCompare] = useState([])

    useEffect(() => {
        const newCardsList = []

        for (let index = 0; index < numberOfDifferentCards; index++) {
            newCardsList.push(
                { value: index, cardVisibility: false, comparedSucces: false },
                { value: index, cardVisibility: false, comparedSucces: false }
            )
        }

        for (let i = newCardsList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[newCardsList[i], newCardsList[j]] = [newCardsList[j], newCardsList[i]]
        }

        setCardsList(newCardsList)
    }, [])


    // function handleClick(indexOfClicked, card) {

    //     // togles visibility for the current cards clicked ----------------------------------------------
    //     setCardsList(currentCards =>
    //         currentCards.map((card, index) =>
    //             index === indexOfClicked ? { ...card, cardVisibility: true } : card
    //         )
    //     )

    //     // chekcing if the cards are the same ------------------------------------------------------
    //     if (card.cardVisibility != true) {


    //         const comparisonList = [...compare, card]
    //         setCompare(comparisonList)

    //         if (compare.length === 1) {

    //             if (comparisonList[0].value == comparisonList[1].value) {

    //                 setCardsList(currentCards =>

    //                     currentCards.map((card) =>
    //                         card.cardVisibility == true && card.comparedSucces == false ? { ...card, comparedSucces: true } : card
    //                     )
    //                 )

    //                 setCompare([])
    //             } else {

    //                 setCardsList(currentCards =>

    //                     currentCards.map((card) =>
    //                         card.cardVisibility == true && card.comparedSucces == false ? { ...card, cardVisibility: false } : card
    //                     )
    //                 )

    //                 setCompare([])
    //             }
    //         }
    //     }
    // }



    return (
        <>
            <main>
                <ul>
                    {cardsList.map((card, index) => {
                        return <Kort card={card} key={index} keyName={index} setCardsList={setCardsList} compare={compare} setCompare={setCompare} />
                    })}
                </ul>
            </main>
        </>
    )
}
