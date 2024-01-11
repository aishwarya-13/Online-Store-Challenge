import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import { Product } from "./types"
import StarIcon from '@mui/icons-material/Star';
import { backgroundForImage, grey, purple, yellow } from "../constants/colors";
import { capitalizeFirstLetter } from "../utitlities/strings";


export interface CardProps{
    card: Product,
    onCardClick: (selectedCard: Product)=> void,
    isSelected: boolean
}

export const CardDetail = ({card, onCardClick, isSelected}: CardProps)=>{

    return(
        <Card
            onClick={()=>{
                onCardClick(card)
            }}
            sx={{
                cursor:'pointer',
                border:`1px solid ${ isSelected ? purple.dark :grey.light }`,
                borderRadius:'10px',
                boxShadow:'0px 0px 0px 0px' + grey.dark,
                marginBottom:'1rem'}}>
            <CardContent>
                <Stack direction={'row'} spacing={4}>
                    <Stack direction={'column'} width={'30%'}>
                        <Stack direction={'column'} justifyContent={'space-between'} alignItems={'center'}
                            sx={{backgroundColor: backgroundForImage, borderRadius:'10px', height:'100%'}}>
                            <img src={card.image} style={{mixBlendMode:'multiply', height:'70px', width:'70px', margin:'auto'}}/>
                        <Stack direction={'row'} alignItems={'center'}>
                            <StarIcon sx={{fontSize:'16px', color: yellow.middle}}/>
                            <Typography>{`${card.rating.rate}(${card.rating.count})`}</Typography>
                        </Stack>
                        </Stack>
                    </Stack>
                <Box width={'70%'}>
                    <Typography color={purple.dark} variant="h6" paddingRight={'10px'}>{capitalizeFirstLetter(card.category)}</Typography>
                    <Typography color={'black'} fontSize={'20px'} sx={{wordBreak: 'break-word', paddingRight:'10px'}} >{card.title}</Typography>
                    <Typography color={grey.dark} fontSize={'18px'} noWrap paddingRight={'10px'}>{card.description}</Typography>
                    <Typography color={'black'} fontSize={'20px'} paddingRight={'10px'} fontWeight={'bold'}>{`$${card.price}`}</Typography>
                </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}