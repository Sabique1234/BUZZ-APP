import React from 'react';

import { createAppContainer} from 'react-navigation'; 

import { createBottomTabNavigator } from 'react-navigation-tabs';

import fb from './screens/fb';
import ig from './screens/ig';

export default class App extends React.Component 
{
  render() 
  {
    return (
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator
({
  Facebook:  {screen:fb},
  Instagram: {screen:ig}
})

const AppContainer = createAppContainer(TabNavigator)
