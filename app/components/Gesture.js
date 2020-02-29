import React, {useState} from 'react'
import {View} from "react-native"
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures"
import { Snackbar } from 'react-native-material-ui'

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
}

const swipeDirection = (dx, dy) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections
    // up
    if(dy < 0 && Math.abs(dy) > Math.abs(dx)){
        return SWIPE_UP
    }
    // down
    if(dy > 0 && Math.abs(dy) > Math.abs(dx)){
        return SWIPE_DOWN
    }
    // left
    if(dx < 0 && Math.abs(dx) > Math.abs(dy)){
        return SWIPE_LEFT
    }
    // right
    if(dx > 0 && Math.abs(dx) > Math.abs(dy)){
        return SWIPE_RIGHT
    }
    return null
}

const Gesture = ({children}) => {

    const [noti, setNoti] = useState("ready")
    const [snack, setSnack] = useState(false)

    const onSwipe = (name, gestureState) => {
        const {dx, dy} = gestureState
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections
        const direction = swipeDirection(dx, dy)
        switch(direction){
            case SWIPE_UP:
                setNoti("Up")
                break
            case SWIPE_DOWN:
                setNoti("Down")
                break
            case SWIPE_LEFT:
                setNoti("Left")
                break
            case SWIPE_RIGHT:
                setNoti("Right")
                break
            default:
                setNoti("Unknown")
        }
        setSnack(true)
    }

    return (
        <GestureRecognizer
            onSwipe={onSwipe}
            config={config}
        >
            <>
                {children}
                <View>
                    <Snackbar 
                        visible={snack}
                        message={noti}
                        onRequestClose={() => {
                            setSnack(false)
                        }}
                    />
                </View>
            </>
        </GestureRecognizer>
    )
}

export default Gesture
