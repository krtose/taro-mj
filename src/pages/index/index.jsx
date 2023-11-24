import React, { useState, useRef } from "react";
import { Uploader } from '@nutui/nutui-react-taro';
import './index.scss'

const Index = () => {
    const uploadUrl = '/upload/image'
    return (
            <>
                <Uploader
                    url={uploadUrl}
                    maxCount="1"
                />
            </>
    )
}
export default Index;