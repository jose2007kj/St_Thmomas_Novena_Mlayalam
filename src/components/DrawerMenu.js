import React, { Component } from 'react';
import { View,Image,Dimensions,Text,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreen } from '../actions';
import { Menu } from './common';
import LinearGradient from 'react-native-linear-gradient';
import * as style from './styles';

class DrawerMenu extends Component {

    
    render() {
        return (
            <View style={styles.container}> 
            <Image 
          source={require('../res/saint_thomas.jpg')}
          style={styles.backgroundImage}
          
          resizeMode='cover'
/>
            <LinearGradient
                colors={['#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
></LinearGradient><View style={styles.items}>
            <ScrollView>
                <Menu 
                title="അവതാരിക" 
                
                onPress={() => this.props.navigateToScreen('Intro')} 
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
                /></ScrollView></View>
            {/* </View> */}
            </View>
            
        
        );
    }   
}
const styles = {
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 20,
        backgroundColor: '#5ecae7'
  },backgroundImage: {
        flex: 1,
        position: 'absolute',
        top: 0,
        height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
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