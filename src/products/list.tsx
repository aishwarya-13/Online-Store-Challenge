
import { useState } from "react"
import { CardDetail } from "./cardDetail"
import { Product } from "./types"

interface ListProps{
    list: Product[],
    onCardClick: (selectedCard: Product)=> void
}

export const List = ({list, onCardClick}: ListProps)=>{
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null)

    const onCardClickList = (selectedCard: Product)=>{
        const selectedCardId = list.filter((card) => selectedCard.id === card.id)[0].id
        setSelectedCardId(selectedCardId)
        onCardClick(selectedCard)
    }

    return(
        <>
            {
                list?.map((product)=>{
                    return <CardDetail
                            key ={product.id}
                            card={product}
                            onCardClick={onCardClickList}
                            isSelected={selectedCardId === product.id}/>
                })
            }
        </>
    )
}