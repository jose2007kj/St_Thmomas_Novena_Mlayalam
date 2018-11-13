import React, { Component } from 'react';
import { View,Image,Dimensions,Text,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreen } from '../actions';
import { Menu } from './common';
// import LinearGradient from 'react-native-linear-gradient';
import * as style from './styles';

class DrawerMenu extends Component {

    
    render() {
        return (
            <View style={styles.container}> 
            <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          resizeMode='cover'
          />

          
            <View style={styles.items}>
            <ScrollView>
                <Menu 
                title="അവതാരിക" 
                
                onPress={() => this.props.navigateToScreen('Content','intro')} 
                />
                <Menu 
                title="പ്രാരംഭഗാനം-1" 
                
                onPress={() => this.props.navigateToScreen('Content','introSong1')} 
                />
                <Menu 
                title="പ്രാരംഭഗാനം-2" 
                
                onPress={() => this.props.navigateToScreen('Content','introSong2')} 
                />
                 <Menu 
                title="സതൂതികീ൪ത്തനങ്ങൾ" 
                
                onPress={() => this.props.navigateToScreen('Content','praiseSongs')} 
                />
                 <Menu 
                title="കൃതജ്ഞത" 
                
                onPress={() => this.props.navigateToScreen('Content','thanksGiving')} 
                />
                 <Menu 
                title="സമാപനാശീ൪വാദം" 
                
                onPress={() => this.props.navigateToScreen('Content','lastBlessing')} 
                />
                <Menu 
                title="സമാപനഗാനം-1" 
                
                onPress={() => this.props.navigateToScreen('Content','finalSong1')} 
                />
                <Menu 
                title="സമാപനഗാനം-2" 
                
                onPress={() => this.props.navigateToScreen('Content','finalSong2')} 
                />
                <Menu 
                title="About" 
                
                onPress={() => this.props.navigateToScreen('About')} 
                /></ScrollView>
            </View></View>
            
        
        );
    }   
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        top: 0,
        height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
    },
    headerView: {
        height: 210,
        backgroundColor: '#b3181c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    logoImage: {
        height: 50,
        width: 50,
       
    },
    logoText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'KaushanScript-Regular',
        marginTop: 6
    },
    items:{
        marginTop:150
    }
};
const mapStateToProps = (state) => {
    return {
        menu: state.navigation.menu
    };
};

export default connect(mapStateToProps, { navigateToScreen })(DrawerMenu);