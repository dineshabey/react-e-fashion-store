import React from 'react'
import HeaderLayouts from './HeaderLayouts'
import FooterLayouts from './FooterLayouts'

export default function CommonWrapperLayouts({ children }) {
    return (
        <div>
            <HeaderLayouts />
            <div style={{padding:'0 8%'}}>
                {children}
            </div>
            <FooterLayouts />
        </div>
    )
}

