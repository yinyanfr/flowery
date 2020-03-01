import React, {useContext} from 'react'
import { Dimensions } from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    faChevronUp, faChevronDown,
    faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import AppContext from '../AppContext'

const style = {
    grid: {
        width: Math.floor(0.8 * Dimensions.get("window").width),
        height: Math.floor(0.8 * Dimensions.get("window").width),
        opacity: 0.75,
        marginLeft: "auto",
        marginRight: "auto"
    },
    row: {
        justifyContent: "center",
        alignItems: "center",
    }
}

const highlight = "limegreen"

const Joystick = () => {

    const {direction} = useContext(AppContext)

    return (
        <Grid style={style.grid}>
            <Col>
                <Row></Row>
                <Row style={style.row}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        size={50}
                        color={
                            direction === "Left"
                            ? highlight
                            : "black"
                        }
                    />
                </Row>
                <Row></Row>
            </Col>
            <Col>
                <Row style={style.row}>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        size={50}
                        color={
                            direction === "Up"
                            ? highlight
                            : "black"
                        }
                    />
                </Row>
                <Row></Row>
                <Row style={style.row}>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        size={50}
                        color={
                            direction === "Down"
                            ? highlight
                            : "black"
                        }
                    />
                </Row>
            </Col>
            <Col>
                <Row></Row>
                <Row style={style.row}>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        size={50}
                        color={
                            direction === "Right"
                            ? highlight
                            : "black"
                        }
                    />
                </Row>
                <Row></Row>
            </Col>
        </Grid>
    )
}

export default Joystick
