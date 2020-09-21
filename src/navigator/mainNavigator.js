import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps104932Navigator from '../features/Maps104932/navigator';
import Add-Item104931Navigator from '../features/Add-Item104931/navigator';
import Maps104927Navigator from '../features/Maps104927/navigator';
import UserProfile104923Navigator from '../features/UserProfile104923/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps104932: { screen: Maps104932Navigator },
Add-Item104931: { screen: Add-Item104931Navigator },
Maps104927: { screen: Maps104927Navigator },
UserProfile104923: { screen: UserProfile104923Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
