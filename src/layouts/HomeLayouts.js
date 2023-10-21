import React from 'react'
import HeaderLayouts from './home/HeaderLayouts'
import ButtonListLayouts from './home/ButtonListLayouts'
import FotterLayouts from './home/FotterLayouts'
import CarouselLayouts from './home/CarouselLayouts'

export default function HomeLayouts() {
    return (
        <div>
            <HeaderLayouts />
            <CarouselLayouts />
            <h3>Title</h3>
            <ButtonListLayouts />
            <FotterLayouts />
        </div>
    )
}
