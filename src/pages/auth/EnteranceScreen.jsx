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
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/buttons/ButtonYellow';
import UserIcon from '../../../assets/images/svg/auth/User';
import HomeIcon from '../../../assets/images/svg/auth/Home';
import SearchIcon from '../../../assets/images/svg/auth/Search';
import ActiveIcon from '../../../assets/images/svg/auth/Active';
import CheckIcon from '../../../assets/images/svg/auth/Check';

const height = Dimensions.get('window').height;

export default function App({navigation}) {
  const [hide, setHide] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/enterance.png')}
        style={styles.fixed}>
        <Text style={styles.welcometext}>
          Добро {'\n'}пожаловать в мир{' '}
          <Text style={{color: '#FFD0A1'}}>NFT!</Text>{' '}
        </Text>
        <Text style={styles.authtext}>
          Авторизуйтесь, чтобы получить доступ ко всему функционалу приложения.
        </Text>
        <ScrollView style={{flex: 1}}>
          <View style={styles.authblock}>
            <TextInput
              placeholder="E-mail  или номер телефона"
              placeholderTextColor={'#F0A989'}
              style={styles.input}
              onFocus={() => setHide(true)}
              onBlur={() => setHide(false)}
            />
            <Button
              onpress={() => navigation.navigate('VerifyCodeScreen')}
              text={'Войти'}
            />
            <View style={styles.selectedblock}>
              {toggleCheckBox ? (
                <TouchableOpacity onPress={() => setToggleCheckBox(false)}>
                  <CheckIcon />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.square}
                  onPress={() => setToggleCheckBox(true)}></TouchableOpacity>
              )}

              <Text style={styles.selectedtext}>
                Соглашаюсь с Политикой Конфиденциальности
              </Text>
            </View>
            <TouchableOpacity style={styles.authbtn}>
              <Image source={require('../../../assets/images/png/fox.png')} />
              <Text style={styles.authbtnText}>
                Войти с помощью <Text style={{color: '#FFD0A1'}}>MetaMask</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {hide ? (
          ''
        ) : (
          <View style={styles.footer}>
            <Image
              style={styles.navigation}
              source={require('../../../assets/images/png/containers.png')}
            />
            <View style={styles.navIconsDiv}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeInAuthScreen')}>
                <HomeIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <SearchIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <UserIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.activeLine}>
              <ActiveIcon />
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: height,
  },
  fixed: {
    flex: 1,
    paddingHorizontal: 16,
    height: height,
  },
  welcometext: {
    marginTop: height < 738 ? '20%' : '40%',
    fontSize: 42,
    color: '#FFFFFF',
    fontFamily: 'Mulish-LightItalic',
    lineHeight: 49,
    textTransform: 'uppercase',
  },
  authtext: {
    marginTop: 20,
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
  authblock: {
    width: '100%',
    marginTop: 40,
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
    marginBottom: 20,
    color: '#F0A989',
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    // borderTopColor: 'rgba(51, 16, 3, 0.32)',
    // borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
  selectedblock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 14,
  },
  square: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#FFD0A1',
    borderRadius: 2,
  },
  selectedtext: {
    fontSize: 12,
    color: '#FFD0A1',
    fontFamily: 'Mulish-Regular',
    marginLeft: 10,
  },
  authbtn: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#FFD0A1',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  authbtnText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  navigation: {
    position: 'relative',
  },
  navIconsDiv: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    paddingHorizontal: 70,
    top: 30,
  },
  activeLine: {
    position: 'absolute',
    bottom: 12,
    right: 32,
  },
});
