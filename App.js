import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import BookScreen from './src/screens/BookScreen';
import AccountScreen from "./src/screens/AccountScreen";

const BottomNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{  
      tabBarLabel:'Home',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={20} name={'home'}/>  
          </View>),  
    }
  },
  List: {
    screen: ListScreen,
    navigationOptions:{  
      tabBarLabel:'Whishlist',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={20} name={'list-alt'}/>  
          </View>),  
    }  
  },
  Book: {
    screen: BookScreen,
    navigationOptions:{  
      tabBarLabel:'Book',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={20} name={'cart-arrow-down'}/>  
          </View>),  
    }  
  },
  Account: {
    screen: AccountScreen,
    navigationOptions:{  
      tabBarLabel:'Account',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={20} name={'user-tie'}/>  
          </View>),  
    }  
  }
},
{
  barStyle: {
    backgroundColor: '#cf0e04'
  }
});

export default createAppContainer(BottomNavigator);