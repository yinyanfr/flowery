import React, {useContext} from 'react'
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures"
import AppContext from '../AppContext'

const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80
}

const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections

const swipeDirection = ({dx, dy, vx, vy}) => {
    // console.log({vx, vy})
    // // velocity
    // if(Math.max(Math.abs(vx), Math.abs(vy)) < config.velocityThreshold){
    //     return null
    // }

    // distance 
    if(Math.min(Math.abs(dx), Math.abs(dy)) < 5){
        return null
    }
    
    // direction
    if(Math.abs(Math.abs(dx) - Math.abs(dy)) < 20){
        return null
    }

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

    const {setDirection} = useContext(AppContext)

    const onSwipe = (name, gestureState) => {
        const {dx, dy, vx, vy} = gestureState
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections
        const direction = swipeDirection({dx, dy, vx, vy})

        switch(direction){
            case SWIPE_UP:
                setDirection("Up")
                break
            case SWIPE_DOWN:
                setDirection("Down")
                break
            case SWIPE_LEFT:
                setDirection("Left")
                break
            case SWIPE_RIGHT:
                setDirection("Right")
                break
            default:
                setDirection(null)
        }
    }

    return (
        <GestureRecognizer
            onSwipe={onSwipe}
            config={config}
        >
            <>
                {children}
            </>
        </GestureRecognizer>
    )
}

export default Gesture
