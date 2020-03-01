import {StyleSheet, Dimensions} from "react-native"

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    imageWrapper: {
        marginTop: 32,
        paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
        height: Math.floor(0.7 * Dimensions.get("window").width),
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    image: {
        width: Math.floor(0.6 * Dimensions.get("window").width),
        height: Math.floor(0.6 * Dimensions.get("window").width),
        opacity: 0.75
    }
})
