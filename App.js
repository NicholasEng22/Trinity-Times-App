import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { WebView } from 'react-native-webview';
import { Tab, SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, TextInput, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SectionTabs from './SectionTabs';
import {PostComponent} from './PostComponent';
import SectionComponent from './SectionComponent';
import {SearchSection} from './Categories';


const TabNav = createBottomTabNavigator();
const Stack = createStackNavigator();


export function Home(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SectionTabs}
        options={{
          title: <Image style={{width: 200, height: 30, resizeMode: 'contain'}} source={require("./assets/Trinity.jpg")}></Image>,
          headerStyle: {
            backgroundColor: '#2C4BEE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
      <Stack.Screen
      name="Post"
      component={PostComponent}
      />
    </Stack.Navigator>
  )
}

export function About(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AboutWeb}
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#2C4BEE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export function AboutWeb(){
  return (<WebView source={{ uri: 'https://trinitytimes.org/about/' }} style={{ flex: 1 }} /> )
}

export function Search(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SearchArticles}
        options={{
          title: 'Search',
          headerStyle: {
            backgroundColor: '#2C4BEE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export function SearchArticles(){
  return(
    <SearchSection/>
  )
}

export default function App() {
  return (
    <NavigationContainer> 
      <TabNav.Navigator tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
        activeBackgroundColor: '#2C4BEE',
        inactiveBackgroundColor: '#2C4BEE'
      }}>
        <TabNav.Screen name="Home" component={Home} />
        <TabNav.Screen name="Search" component={Search} />
        <TabNav.Screen name="About" component={About} />
      </TabNav.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }, 
  textInputStyle: {
    height: 50,
    width: 350,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#2C4BEE',
    backgroundColor: '#FFFFFF',
  },
});
