import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    About
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