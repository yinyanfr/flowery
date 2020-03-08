import React, { useState } from 'react'
import { TouchableNativeFeedback, View } from "react-native"

const Tap = ({ children, onDoubleTap, delay }) => {
    delay = delay || 350

    const [timer, setTimer] = useState(0)

    const counter = () => {
        const delta = new Date().getTime() - timer
        if (delta < delay) {
            setTimer(0)
            onDoubleTap()
        }
        else {
            setTimer(new Date().getTime())
        }
    }

    return (
        <TouchableNativeFeedback
            onPress={counter}
        >
            <View>
                {children}
            </View>
        </TouchableNativeFeedback>
    )
}

export default Tap
