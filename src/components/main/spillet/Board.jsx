import { useEffect, useState } from "react"
import Kort from "./Kort"


export default function Board() {

    const numberOfDifferentCards = 5
    const [cardsList, setCardsList] = useState([])
    // const [compare, setCompare] = useState([])

    // console.log(compare);

    useEffect(() => {
        const newCardsList = []

        for (let index = 0; index <= numberOfDifferentCards; index++) {
            newCardsList.push(
                { value: index, cardVisibility: false },
                { value: index, cardVisibility: false }
            )
        }

        setCardsList(newCardsList)
    }, [])


    function toggleVisible(indexOfClicked, card) {

        setCardsList(currentCards =>

            currentCards.map((card, index) =>
                index === indexOfClicked ? { ...card, cardVisibility: true } : card
            )
        )

        // console.log(card);
        // const comparisonList = [...compare, card]
        // setCompare(comparisonList)

        // console.log(compare.length);

        // if (compare.length == 1) {

        //     console.log(compare[0], compare[1]);


        //     if (compare[0].value == compare[1].value) {
        //         console.log("same");
        //     } else {
        //         console.log("wrong");

        //     }
        // }

    }



    return (
        <>
            <main>
                <ul>
                    {cardsList.map((card, index) => {
                        return (
                            <li key={index} onClick={() => toggleVisible(index, card)}>
                                {(card.cardVisibility == false) ? "" : <Kort card={card} />}
                            </li>
                        )
                    }
                    )

                    }

                    {/* map så mange kort som spillern ville have */}

                    {/* hvert kort skal have en værdi (object) som gemmes i et array og det skal være random hvor numrende er*/}

                    {/* on click skal kortene vendes(display deres nummer) */}

                    {/* når to kort bliver vendt skal den matches objectets værdi med det andet valgte (det første korts værdi skal gemmes i state og compares) */}

                    {/* vis værdi ikke matcher skal den skjule de to kort (ikke display deres numer) */}

                    {/* hvis det er rigtigt skal de være markeret som færdigog kan ikke interageres med mere */}


                    {/* component mugligheder (header), (et board hvor kort bliver spredt ud), (korts html structur) */}
                </ul>
            </main>
        </>
    )
}
