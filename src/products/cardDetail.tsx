import { Product } from "./types"

export interface CardProps{
    card: Product
}

export const CardDetail = ({card}:CardProps )=>{
    return(
        <>
            {`I am card`}   
        </>
    )
}