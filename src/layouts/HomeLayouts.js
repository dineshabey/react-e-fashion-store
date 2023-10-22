import React from 'react'
import HeaderLayouts from './common/HeaderLayouts'
import ButtonListLayouts from './home/ButtonListLayouts'
import FotterLayouts from './common/FotterLayouts'
import CarouselLayouts from './home/CarouselLayouts'

export default function HomeLayouts() {
    return (
        <div>
            <HeaderLayouts />
            <CarouselLayouts />
            <p>World Largest Fashion Center</p>
            <ButtonListLayouts />
            <FotterLayouts />
        </div>
    )
}
