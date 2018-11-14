import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Menu = ({ onPress, title }) => {
    const { menuStyle, menuTextStyle, menuImageStyle } = styles;
    
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View 
                style={menuStyle}
            >
                
                <Text style={menuTextStyle}>{title}</Text>
            </View>
             
        </TouchableOpacity>
    );
};

const styles = {
    menuStyle: {
        
        padding: 8,
        paddingLeft: 35,
        flexDirection: 'row'
    },
    menuTextStyle: {
        fontSize: 16,
        color: '#f9f7f7',
        marginLeft: 30
    },
    menuImageStyle: {
        height: 25,
        width: 25
    }
};

export { Menu };