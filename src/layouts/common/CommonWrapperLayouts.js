import React from 'react'
import HeaderLayouts from './HeaderLayouts'
import FooterLayouts from './FooterLayouts'

export default function CommonWrapperLayouts({ children, isFromHome }) {
    return (
        <div>
            <HeaderLayouts />
            <div style={{ padding: isFromHome ? '0' : '0 8%' }}> {children} </div>
            
                <br/>
            <FooterLayouts/>
        </div>
    )
}

