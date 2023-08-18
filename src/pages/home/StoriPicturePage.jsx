import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../../components/buttons/ButtonYellow';
import ArrowLeft from '../../../assets/images/svg/profile/ArrowLeft';

export default function App({navigation}) {
  const {
    open_touch_id_popup,
    stateName,
    open_delete_popup,
    open_close_popup,
    open_add_popup,
    storyImage,
  } = useSelector(state => state.justDriveReducer);

  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];

  return (
    <SafeAreaView style={styles.container}>
      {storyImage ? (
        <ImageBackground source={{uri: storyImage}} style={styles.fixed}>
          <TouchableOpacity
            onPress={() => navigation.navigate(prevRoute.name)}
            style={styles.arrow}>
            <ArrowLeft />
          </TouchableOpacity>
          <View style={styles.btnblock}>
            <Button text="Опубликовать" />
          </View>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require('../../../assets/images/png/profilebackground.png')}
          style={styles.fixed}></ImageBackground>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  fixed: {
    flex: 1,
    paddingHorizontal: 16,
    position: 'relative',
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  btnblock: {
    marginBottom: 30,
  },
  arrow: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});
