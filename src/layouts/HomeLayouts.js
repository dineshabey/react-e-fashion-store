import React from 'react'
import ButtonListLayouts from './home/ButtonListLayouts'
import CarouselLayouts from './home/CarouselLayouts'
import CommonWrapperLayouts from './common/CommonWrapperLayouts'

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
