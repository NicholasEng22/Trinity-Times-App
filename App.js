import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { WebView } from 'react-native-webview';
import { Tab, SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SectionTabs from './SectionTabs';
import {PostComponent} from './PostComponent';
import { SearchContainer } from './Containers/SearchContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARYCOLOR, SECONDARYCOLOR, TERTIARYCOLOR, correctLoginUsername, correctLoginPassword, FONT_FAMILY, LOGIN} from './Constants';
import { AboutPage } from "./AboutPage";

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
      options = {{
    headerTitle:'Post',
    headerTitleStyle: {color:'white'},
    headerStyle: {backgroundColor:'#2C4BEE'},
    headerTintColor: 'white'
  }}
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
  //return (<WebView source={{ uri: 'https://trinitytimes.org/about/' }} style={{ flex: 1 }} /> )
  return (<AboutPage url="https://trinitytimes.org/wp-json/wp/v2/pages/25"/>);
}

export function Search(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SearchContainer}
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

export default function App() {
  const [isNotSignedIn, setIsNotSignedIn] = useState(LOGIN);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function checkAuthentication() {
    if (username !== correctLoginUsername) {
      console.log(username)
      console.log(correctLoginUsername)
      setErrorMsg("Username is incorrect")
    } else if (password !== correctLoginPassword) {
      setErrorMsg("Password is not correct")
    } else {
      setErrorMsg("Login success!")
      setIsNotSignedIn(false)
    }
  }

  return (
    isNotSignedIn ? (
    <SafeAreaView style={styles.safeView}> 
    {/* <View style={styles.backgroundImgBox}> */}
      <Image style={styles.backgroundImg} source={require("./assets/trinityCover2.jpg")}/>
    {/* </View> */}
    <View style={styles.box}>
      <Image style={styles.image} source={require("./assets/Trinity.jpg")} />
      <View style={styles.inputView}>
        {/* <Icon > */}
          <Ionicons style={{paddingLeft: 15}} name={"person-outline"} size={20} color={"white"}/>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="white"
            fontFamily="Arial"
            onChangeText={(username) => setUsername(username)}
          />
        </View>
  
        <View style={styles.inputView}>
          <Ionicons style={{paddingLeft: 15}} name={"ios-lock-closed-outline"} size={20} color={"white"}/>

          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            fontFamily="Arial"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => checkAuthentication()}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.error}>{errorMsg}</Text>
        </View>
    </View>
    </SafeAreaView>
) : (
    <NavigationContainer> 
      <TabNav.Navigator tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
        activeBackgroundColor: '#2C4BEE',
        inactiveBackgroundColor: '#2C4BEE',
        headerTintColor: 'white',
        showLabel: false,
        //  labelStyle: { fontSize: 0 },
      }}
      
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Search') {
              iconName = 'ios-search-outline'
            } else if (route.name=== 'About') {
              iconName = 'ios-information-circle'
            }
            return <Ionicons name={iconName} size={size} color={color} />;

          }})}
      >
        <TabNav.Screen name="Home" component={Home} />
        <TabNav.Screen name="Search" component={Search} />
        <TabNav.Screen name="About" component={About} />
      </TabNav.Navigator>

    </NavigationContainer>
  ))
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    position: "absolute",
   resizeMode: "cover", 
   height: Dimensions.get('window').height,
   width: 400,
  },
  safeView: {
    flex: 1,
    justifyContent: "center",
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: TERTIARYCOLOR,
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignSelf: 'center', // rect box
    alignItems: "center", //text
  },
  tabStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }, 
   TextInput: {
   height: 50,
   flex: 1,
   padding: 10,
   marginLeft: 10,
   color: 'white',
   fontFamily: FONT_FAMILY,
 },
  textInputStyle: {
    height: 50,
    width: 350,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: TERTIARYCOLOR,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Arial',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 40,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: SECONDARYCOLOR,
    alignSelf: 'center', // rect box
    alignItems: "center", //text
  },
  loginText: {
    textAlignVertical: "center",
    textAlign: "center",
    color: PRIMARYCOLOR,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  error: {
    alignSelf: 'center',
    color: 'red',
    fontFamily: "Arial",
    paddingVertical: 20,
  },
  box: {
    backgroundColor: "white",
    elevation: 5,
    marginHorizontal: 40,
    borderRadius: 20,
  },
});
