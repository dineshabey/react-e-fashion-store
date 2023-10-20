import React from 'react'
import HeaderLayouts from './home/HeaderLayouts'
import ButtonListLayouts from './home/ButtonListLayouts'

export default function HomeLayouts() {
    return (
        <div>
            <HeaderLayouts />
            <h3>Swiper</h3>
            <h3>Title</h3>
            <ButtonListLayouts/>
            <h3>Footer</h3>
        </div>
    )
}
