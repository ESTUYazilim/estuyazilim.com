import * as React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

export default function SliderCarousel(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "../logo.svg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "../logo.svg"
        }
    ]

    return (
        <Carousel sx={{
            marginX: 8
        }}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper
            sx={{
                minHeight: '75vh',
                padding: 5
            }}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}