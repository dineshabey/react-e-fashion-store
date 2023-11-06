import React from 'react'
import ButtonListLayouts from './innerLayouts/ButtonListLayouts'
import CarouselLayouts from './innerLayouts/CarouselLayouts'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'

export default function HomeLayouts() {
    return (
        <div>
            <CommonWrapperLayouts>
                <CarouselLayouts />
                <p>World Largest Fashion Center</p>
                <ButtonListLayouts />
            </CommonWrapperLayouts>
        </div>
    )
}
