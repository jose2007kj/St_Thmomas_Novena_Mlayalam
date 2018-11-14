import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as style from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class About extends Component {
    render() {
        return (
            <View style={styles.container}>
            <LinearGradient
                colors={['#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
></LinearGradient>
                <Text style={styles.welcome}>
                    Please read the contents in the order as shown in the side menu for continuity.App Developed by VadakkekaraApps. Novena is manually copied from a book published by MARLOUIS PUBLICATIONS Ernakulam
                </Text>
            </View>
        )
    }
}

/**
 * special styles for this page
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        justifyContent: 'flex-start',
        backgroundColor:'#F6F6F6'
    },
    welcome: {
        width: "100%",
        marginTop: 100,
        fontSize: 24,
        color: "#aa360b",
        textAlign: 'center',
    }
    
});