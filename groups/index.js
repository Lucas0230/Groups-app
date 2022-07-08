
import Page1 from './views/login';
// import Page2 from './Page2';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Login: Page1,
    // About: Page2,
  })
);

export default Routes;