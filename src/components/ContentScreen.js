import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchContentInit, fetchContentRemote, navigateToScreen } from '../actions';

class ContentScreen extends Component {

    componentDidMount() {
        this.props.fetchContentInit();
        this.props.fetchContentRemote(this.props.page);
    }


    render() {
        console.log(this.props.page);
        return (
            <ScrollView style={styles.container}>
                <Text 
                    style={styles.contentTextStyle}
                >
                    {this.props.item}
                </Text>
            </ScrollView>
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
        color: '#444444'
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
    fetchContentRemote,
    navigateToScreen
})(ContentScreen);