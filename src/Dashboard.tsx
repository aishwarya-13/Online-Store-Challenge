import { useEffect, useState } from "react"
import { fetchAllProducts } from "./apiClients/productsApiClient/productsApiClient"
import { Box, CircularProgress } from "@mui/material"
import { List } from "./products/list"
import { Product } from "./products/types"

export const Dashboard = ()=>{

    const [productsList, setProductsList] = useState<Product[]>([])

    const getAllProducts = async ()=>{
        const products = await fetchAllProducts()
        console.log('products', products)
        setProductsList(products)
    }

    useEffect(()=>{
        getAllProducts()
    },[])

    return(
        <Box>
            {
                productsList && productsList.length ?
                <List list={productsList}/>
                :
                <CircularProgress color="secondary" />
            }
        </Box>
    )
}