import React from "react";
import {StyleSheet, Dimensions} from "react-native";

const BR = 10;
var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;

module.exports = StyleSheet.create({
    gradient:{
        height: height, width: width, alignItems: 'center', justifyContent: 'center',
        opacity:0.8,
        position: "absolute"
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        top: 0,
        height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
    }
});