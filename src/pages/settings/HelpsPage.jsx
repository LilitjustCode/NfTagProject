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
import ArrowLeft from '../../../assets/images/svg/profile/ArrowLeft';
import ScopeIcon from '../../../assets/images/svg/post/Scope';
import Button from '../../components/buttons/ButtonYellow';

export default function App({navigation}) {
  const [active, setActive] = useState(false);
  const [activeLock, setActiveLock] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/profilebackground.png')}
        style={styles.fixed}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsScreen')}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Помощь и поддержка</Text>
          <View style={{width: 19}}></View>
        </View>
        <ScrollView style={{flex: 1}}>
          <TextInput
            placeholder="Тема обращения"
            placeholderTextColor={'#F0A989'}
            style={styles.input}
          />
          <View style={styles.multilineInput}>
            <TextInput
              multiline
              placeholder="Текст обращения"
              placeholderTextColor={'#F0A989'}
              style={{
                color: 'white',
                paddingRight: 25,
              }}
            />
            <TouchableOpacity style={styles.scopeIcon}>
              <ScopeIcon />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button text="Отправить" />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  headerText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
  multilineInput: {
    width: '100%',
    backgroundColor: '#D7887033',
    borderRadius: 10,
    height: 210,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 7,
    position: 'relative',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
  scopeIcon: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(215, 136, 112, 0.2)',
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 18,
    paddingVertical: 18,
    fontFamily: 'Mulish-LightItalic',
    fontSize: 12,
    shadowColor: 'rgba(51, 16, 3, 0.32)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
    marginTop: 20,
    color: 'white',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
});
