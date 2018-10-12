import React, { Component } from "react";
import { Router, Scene, Actions,Drawer } from "react-native-router-flux";
import { StyleSheet } from "react-native";

import Home from "./Home";
import ImageGallerySelection from "./ImageGallerySelection";
import TripDetailsUpload from "./TripDetailsUpload";
import AddTravalourBuddy from "./AddTravalourBuddy";
import PlaceTagFlatList from "./PlaceTagFlatList";
import About from './components/About';
import Drawer from './components/Drawer';
import ContentScreen from './components/ContentScreen'
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
      <Drawer
        key="drawer"
        contentComponent={DrawerMenu}
        drawerImage={MenuIcon}
        >
        <Scene
          key="intro"
          component={ContentScreen}
          title="അവതാരിക"
          titleStyle={styles.navigationBarTitleStyle}
          initial
        />
        <Scene
        key="introSong1"
          component={ContentScreen}
          title="പ്രാരംഭഗാനം-1"
          titleStyle={styles.navigationBarTitleStyle}
          
        />
        <Scene
        key="introSong2"
          component={ContentScreen}
          title="പ്രാരംഭഗാനം-2"
          titleStyle={styles.navigationBarTitleStyle} 
        />
        <Scene
        key="praiseSongs"
          component={ContentScreen}
          title="സതൂതികീ൪ത്തനങ്ങൾ"
          titleStyle={styles.navigationBarTitleStyle} 
        />
        <Scene
        key="thanksGiving"
          component={ContentScreen}
          title="കൃതജ്ഞത"
          titleStyle={styles.navigationBarTitleStyle} 
        />
        <Scene
        key="lastBlessing"
          component={ContentScreen}
          title="സമാപനാശീ൪വാദം"
          titleStyle={styles.navigationBarTitleStyle} 
        />
        <Scene
        key="finalSong1"
          component={ContentScreen}
          title="സമാപനഗാനം-1"
          titleStyle={styles.navigationBarTitleStyle} 
        />
         <Scene
        key="finalSong2"
          component={ContentScreen}
          title="സമാപനഗാനം-2"
          titleStyle={styles.navigationBarTitleStyle} 
        />
        </Drawer>

        

       
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  navigationBarTitleStyle: {
    flex: 1,
    textAlign: "center",
    fontSize: 15
  }
});

export default RouterComponent;