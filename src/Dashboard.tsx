import { useEffect, useState } from "react"
import { fetchAllProducts } from "./apiClients/productsApiClient/productsApiClient"
import { Box, CircularProgress, Stack, Typography } from "@mui/material"
import { List } from "./products/list"
import { Product } from "./products/types"
import { TITLE_DISPLAY_MESSAGE1, TITLE_DISPLAY_MESSAGE2, TITLE_DISPLAY_MESSAGE3 } from "./constants/string"
import { grey, purple } from "./constants/colors"
import { DetailView } from "./products/detailView"

export const Dashboard = ()=>{
    const [productsList, setProductsList] = useState<Product[]>([])
    const [selectedCard, setSelectedCard] = useState<Product | null>(null)

    const getAllProducts = async ()=>{
        const products = await fetchAllProducts()
        console.log('products', products)
        setProductsList(products)
    }

    const onCardClick = (card: Product)=>{
        setSelectedCard(card)
    }

    useEffect(()=>{
        getAllProducts()
    },[])

    return(
        <>
            {
                productsList && productsList.length > 0 ?
            <Stack
                direction={'row'}
                height={'99vh'}
                sx={{overflow: 'hidden'}} >
                {
                    productsList && productsList.length &&
                    <Box
                        width={'30%'}
                        height={'auto'}
                        overflow={'scroll'}
                        padding={'20px'}
                        sx={{border:`1px solid ${grey.light}`}}>
                        <List list={productsList} onCardClick={onCardClick}/>
                    </Box>
                }
                {
                    selectedCard ?
                    <DetailView selectedCard={selectedCard}/>
                    :
                    <Stack
                        width={'70%'}
                        direction={'column'}
                        alignItems={'center'}
                        margin={'auto'}>
                                <Typography variant="h6" fontWeight={'bold'} color={purple.dark}>{TITLE_DISPLAY_MESSAGE1}</Typography>
                                <Typography variant="h3" fontWeight={'bold'} marginTop={'1rem'}>{TITLE_DISPLAY_MESSAGE2}</Typography>
                                <Typography
                                    variant="h6"
                                    width={'30%'}
                                    textAlign={'center'}
                                    marginTop={'2rem'}
                                    color={'#535555'}>
                                        {TITLE_DISPLAY_MESSAGE3}
                                </Typography>
                    </Stack>
                }
            </Stack>
            :
            <CircularProgress
                id='kkkk'
                sx={{
                    color: purple.dark,
                    position:"absolute",
                    top:'35%',
                    left:'50%'
                }}
                size={100}
                thickness={4}/>
}
        </>
    )
}