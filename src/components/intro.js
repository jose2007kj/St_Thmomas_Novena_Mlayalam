import React, { Component } from 'react';
import { ScrollView, Text,Image,View } from 'react-native';
import { connect } from 'react-redux';
import { fetchContentInit, fetchContentRemote } from '../actions';
import * as style from './styles';
import LinearGradient from 'react-native-linear-gradient';

class IntroScreen extends Component {

    componentDidMount() {
        this.props.fetchContentInit();
        this.props.fetchContentRemote('intro');
    }


    render() {
       
        return (
            <View style={styles.container}>
                
            <LinearGradient
                colors={['#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
></LinearGradient>
            <ScrollView >
            
                <Text 
                    style={styles.contentTextStyle}
                >
                    {this.props.item}
                </Text>
            </ScrollView></View>
        );
    }
}

const styles = {
    container: {
        padding: 5,
        backgroundColor: 'white',
    },
    
    contentTextStyle: {
        fontSize: 18,
        fontFamily: 'Roboto-Light',
        color: 'white'
    }
};

const mapStateToProps = state => {
    return {
        item: state.content.item,
        page: state.navigation.page
    };
};

export default connect(mapStateToProps, {
    fetchContentInit,
    fetchContentRemote
})(IntroScreen);