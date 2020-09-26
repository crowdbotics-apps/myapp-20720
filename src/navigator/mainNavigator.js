import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps8111275Navigator from '../features/Maps8111275/navigator';
import ArticleList111258Navigator from '../features/ArticleList111258/navigator';
import ArticleList111257Navigator from '../features/ArticleList111257/navigator';
import ArticleList111256Navigator from '../features/ArticleList111256/navigator';
import BlankScreen1111255Navigator from '../features/BlankScreen1111255/navigator';
import BlankScreen0111254Navigator from '../features/BlankScreen0111254/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps8111275: { screen: Maps8111275Navigator },
ArticleList111258: { screen: ArticleList111258Navigator },
ArticleList111257: { screen: ArticleList111257Navigator },
ArticleList111256: { screen: ArticleList111256Navigator },
BlankScreen1111255: { screen: BlankScreen1111255Navigator },
BlankScreen0111254: { screen: BlankScreen0111254Navigator },

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
