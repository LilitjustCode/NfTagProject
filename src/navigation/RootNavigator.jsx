import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import EnteranceScreen from '../pages/auth/EnteranceScreen';
import VerifyCodeScreen from '../pages/auth/VerifyCodeScreen';
import MyProfileScreen from '../pages/main/MyProfileScreen';
import RedirectProfileScreen from '../pages/main/RedirectProfile';
import SettingsScreen from '../pages/settings/SettingsScreen';
import AnalyticsScreen from '../pages/analytics/AnalyticsScreen';
import SearchScreen from '../pages/search/SearchPageScreen';
import HomeAuthScreen from '../pages/home/HomeScreenAuth';
import HomeInAuthScreen from '../pages/home/HomeScreenInAuth';
import SingePostScreen from '../pages/singlepostpage/SinglePostScreen';
import SupportPage from '../pages/singlepostpage/SupportPage';
import HelpsScreen from '../pages/settings/HelpsPage';
import PinCode from '../pages/settings/PinCode';
import AddPostGallery from '../pages/addpost/AddPostGallery';
import AddPostOpensea from '../pages/addpost/AddPostOpensea';
import AddPostGalleryOpensea from '../pages/addpost/AddPostGalleryOpensea';
import UsersPageScreen from '../pages/main/UsersPageScreen';
import StoriPicturePage from '../pages/home/StoriPicturePage';
import SupportPageSlider from '../components/home/SupportPageSLider';
import BlockUserScreen from '../pages/main/BlockUserScreen';

const Stack = createStackNavigator();

export default function RootNavigator({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EnteranceScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="EnteranceScreen"
          component={EnteranceScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="VerifyCodeScreen"
          component={VerifyCodeScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="MyProfileScreen"
          component={MyProfileScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="RedirectProfileScreen"
          component={RedirectProfileScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="HomeAuthScreen"
          component={HomeAuthScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="HomeInAuthScreen"
          component={HomeInAuthScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="SinglePostScreen"
          component={SingePostScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="SupportPage"
          component={SupportPage}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="HelpsScreen"
          component={HelpsScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="PinScreen"
          component={PinCode}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="AddPostGallery"
          component={AddPostGallery}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="AddPostOpensea"
          component={AddPostOpensea}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="AddPostGalleryOpensea"
          component={AddPostGalleryOpensea}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="UsersPageScreen"
          component={UsersPageScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="StoriPicturePage"
          component={StoriPicturePage}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="SuportPageSlider"
          component={SupportPageSlider}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
        <Stack.Screen
          name="BlockUserScreen"
          component={BlockUserScreen}
          options={({route}) => ({
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
