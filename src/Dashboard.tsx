import { useEffect, useState } from "react"
import { fetchAllProducts } from "./apiClients/productsApiClient/productsApiClient"
import { Box, CircularProgress, Stack, Typography } from "@mui/material"
import { List } from "./products/list"
import { Product } from "./products/types"
import { TITLE_DISPLAY_MESSAGE1, TITLE_DISPLAY_MESSAGE2, TITLE_DISPLAY_MESSAGE3 } from "./constants/string"
import { purple } from "./constants/colors"

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
            <Stack
                direction={'row'}
                height={'800px'}>
                {
                    productsList && productsList.length &&
                    <Box width={'40%'}>
                        <List list={productsList}/>
                    </Box>
                }
                <Stack
                    width={'60%'}
                    direction={'column'}
                    alignItems={'center'}
                    margin={'auto'}>
                        <Typography variant="h6" fontWeight={'bold'}>{TITLE_DISPLAY_MESSAGE1}</Typography>
                        <Typography variant="h3" fontWeight={'bold'}>{TITLE_DISPLAY_MESSAGE2}</Typography>
                        <Typography variant="h6">{TITLE_DISPLAY_MESSAGE3}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}