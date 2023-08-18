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
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MenuBar from '../../navigation/MenuBar';
import ArrowLeft from '../../../assets/images/svg/profile/ArrowLeft';
import Button from '../../components/buttons/ButtonYellow';

export default function App({navigation}) {
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/profilebackground.png')}
        style={styles.fixed}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate(prevRoute.name)}>
            <ArrowLeft />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.imgBlock}>
            <Image
              style={{width: 70, height: 70, borderRadius: 10}}
              source={require('../../../assets/images/png/image44.png')}
            />

            <View style={styles.multilineInput}>
              <TextInput
                multiline
                placeholder="Название"
                placeholderTextColor={'#F0A989'}
                style={{
                  color: 'white',
                }}
              />
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.multilineInputBox}>
              <TextInput
                multiline
                placeholder="О себе"
                placeholderTextColor={'#F0A989'}
                style={{
                  color: 'white',
                }}
              />
            </View>
          </View>
          <View style={styles.description}>
            <TextInput
              placeholderTextColor={'#F0A989'}
              placeholder="Ссылка на проект OPENSEA"
              style={styles.input}
            />
          </View>
          <View style={{width: '100%', marginTop: 50}}>
            <Button text={'Опубликовать'} />
          </View>
        </ScrollView>
        <MenuBar navigation={navigation} />
      </ImageBackground>
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
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  imgBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  multilineInput: {
    width: '75%',
    backgroundColor: 'rgba(215, 136, 112, 0.2)',
    borderRadius: 10,
    height: 70,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
  description: {
    width: '100%',
    marginTop: 16,
  },
  multilineInputBox: {
    width: '100%',
    backgroundColor: 'rgba(215, 136, 112, 0.2)',
    borderRadius: 10,
    height: 220,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(215, 136, 112, 0.2)',
    borderRadius: 10,
    height: 48,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    paddingHorizontal: 16,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
});
