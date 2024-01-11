
import { CardDetail } from "./cardDetail"
import { Product } from "./types"

interface ListProps{
    list: Product[]
}

export const List = ({list}: ListProps)=>{
    return(
        <>
            {'I am list'}
            {
                list?.map((product)=>{
                    return <CardDetail card={product}/>
                })
            }
        </>
    )
}