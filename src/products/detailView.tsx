import { Stack, Typography } from "@mui/material"
import { Product } from "./types"
import { capitalizeFirstLetter } from "../utitlities/strings"
import { grey, purple, yellow, backgroundForImage } from "../constants/colors"
import StarIcon from '@mui/icons-material/Star';
import React from "react";

interface DetailViewProps{
    selectedCard: Product
}

export const DetailView = ({selectedCard}:DetailViewProps )=>{

    const getStars = ():React.ReactNode=>{
        let html = []
        let limit = Math.round(selectedCard.rating.rate)
        for(let i=0; i<limit; i++){
            html.push(<StarIcon sx={{fontSize:'20px', color: yellow.middle}} key={`${i}`}/>)
        }
        for(let i=limit; i<5; i++){
            html.push(<StarIcon sx={{fontSize:'20px', color: grey.dark}} key={`${i}`}/>)
        }
        return html
    }

    return(
        <Stack direction={'column'} padding={'2rem'} spacing={2} width={'70%'}>
            <Stack sx={{
                    backgroundColor: backgroundForImage
                }}
                alignItems={'center'}
                maxWidth={'100%'}
                maxHeight={'100%'}>
                <img src={selectedCard.image} style={{
                    maxWidth:'500px',
                    maxHeight:'500px',
                    margin:'auto',
                    mixBlendMode:'multiply'
                }}/>
            </Stack>
            <Typography color={purple.dark} variant="body1" fontWeight={'bold'}>{capitalizeFirstLetter(selectedCard.category)}</Typography>
            <Typography color={'black'} variant="h4" sx={{wordBreak: 'break-word'}} >{selectedCard.title}</Typography>
            <Typography color={grey.dark} variant="h6" sx={{wordBreak: 'break-word'}}>{selectedCard.description}</Typography>
            <Stack direction={'row'} alignItems={'center'}>
                {getStars()}
                <Typography>{`${selectedCard.rating.rate}(${selectedCard.rating.count})`}</Typography>
            </Stack>
            <Typography color={'black'} fontSize={'20px'}>{`$${selectedCard.price}`}</Typography>
        </Stack>
    )
}