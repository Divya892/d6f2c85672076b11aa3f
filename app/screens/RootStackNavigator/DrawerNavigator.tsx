import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from '../TabScreen/MainTabScreen';
import DrawerContent from '../Drawer/DrawerContent';
import styles from './DrawerNavigatorStyle';

const Drawer = createDrawerNavigator();

const DrawerStackScreen = (drawerProps) => {
    return (
        <Drawer.Navigator 
            drawerStyle={styles.drawer} 
            overlayColor="transparent" 
            drawerContent={props => <DrawerContent toggleTheme={drawerProps.route.params.toggleTheme} {...props} />}
        >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerStackScreen;