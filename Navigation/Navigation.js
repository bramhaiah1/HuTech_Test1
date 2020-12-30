import React from "react";
import { StatusBar } from 'expo-status-bar';

import {
  SafeAreaView, View, Text, StyleSheet, ScrollView,TouchableOpacity
} from "react-native";
import Home from '../Screens/Home'
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import NavigationDrawerHeader from "../Screens/NavigationHeader"
import Icon from "react-native-vector-icons/FontAwesome5";


const AllProductsStack = createStackNavigator(
    {

        Home: {
            screen: Home,
      
            navigationOptions: ({ navigation }) => ({
      
      
              headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
            
               headerTitleStyle: {color:"#0480C8", paddingBottom:20, fontFamily:"Times New Roman",bottom:40,textAlign:"center",fontWeight:"bold", alignSelf: 'center' },
          title:"ABC Store"


            }),
            
              

            
          },

    }
)  
const AppContainer = createAppContainer(AllProductsStack);
export default AppContainer;
