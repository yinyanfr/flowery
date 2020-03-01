import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';

import styles from "./bodyStyle"
import Joystick from './Joystick';

const Body = () => {

    return (
        <SafeAreaView>
            <View
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                {global.HermesInternal == null ? null : (
                    <View style={styles.engine}>
                        <Text style={styles.footer}>Engine: Hermes</Text>
                    </View>
                )}
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Bienvenu</Text>
                        <Text style={styles.sectionDescription}>
                            C'est fait, votre App <Text style={styles.highlight}>Flowery </Text>
                            est connectée et près d'utlisation.
                        </Text>
                    </View>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Guide</Text>
                        <View>
                            <Text style={styles.sectionDescription}>Touchez l'écran avec votre doigt pour déplacer le tuyau d'eau.</Text>
                            <Text style={styles.sectionDescription}>Double cliquez pour arroser.</Text>
                        </View>
                    </View>

                    <View style={styles.imageWrapper}>
                        <Joystick />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Body
