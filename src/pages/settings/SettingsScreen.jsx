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
import DeleteIcon from '../../../assets/images/svg/settings/Delete';
import DocumentIcon from '../../../assets/images/svg/settings/Document';
import DoneIcon from '../../../assets/images/svg/settings/Done';
import LockIcon from '../../../assets/images/svg/settings/Lock';
import LogoutIcon from '../../../assets/images/svg/settings/Logout';
import NotificationIcon from '../../../assets/images/svg/settings/Notification';
import ArrowRight from '../../../assets/images/svg/settings/Arrow';
import CustomSwitch from 'react-native-custom-switch';
import {stateForPin} from '../../redux/actions/actions';
import {useSelector, useDispatch} from 'react-redux';

export default function App({navigation}) {
  const [active, setActive] = useState(false);
  const [activeLock, setActiveLock] = useState(false);
  const dispatch = useDispatch();

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
          <Text style={styles.headerText}>Настройки</Text>
          <View style={{width: 19}}></View>
        </View>
        <ScrollView style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HelpsScreen')}
            style={styles.descblock}>
            <View style={styles.txtblock}>
              <DoneIcon />
              <Text style={styles.desctxt}>Помощь и поддержка</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('HelpsScreen')}>
              <ArrowRight />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.descblock}>
            <View style={styles.txtblock}>
              <LockIcon />
              <Text style={styles.desctxt}>Безопасность</Text>
            </View>
            <CustomSwitch
              onSwitch={() => {
                setActive(true);

                navigation.navigate('PinScreen');
              }}
              onSwitchReverse={() => setActive(false)}
              buttonWidth={25}
              switchWidth={45}
              buttonColor={'#FFD0A1'}
              switchBackgroundColor={'#D7887033'}
              buttonPadding={2}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.descblock}>
            <View style={styles.txtblock}>
              <NotificationIcon />
              <Text style={styles.desctxt}>Уведомления</Text>
            </View>
            <CustomSwitch
              onSwitch={() => {
                setActiveLock(true);
              }}
              onSwitchReverse={() => setActiveLock(false)}
              buttonWidth={25}
              switchWidth={45}
              buttonColor={'#FFD0A1'}
              switchBackgroundColor={'#D7887033'}
              // onSwitchBackgroundColor={'#FFD0A1'}
              buttonPadding={2}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(stateForPin('close'));
              navigation.navigate('PinScreen');
            }}
            style={styles.descblock}>
            <View style={styles.txtblock}>
              <LogoutIcon />
              <Text style={styles.desctxt}>Выйти из аккаунта</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch(stateForPin('close'));
                navigation.navigate('PinScreen');
              }}>
              <ArrowRight />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(stateForPin('delete'));
              navigation.navigate('PinScreen');
            }}
            style={styles.descblock}>
            <View style={styles.txtblock}>
              <DeleteIcon />
              <Text style={styles.desctxt}>Удалить аккаунт</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch(stateForPin('delete'));
                navigation.navigate('PinScreen');
              }}>
              <ArrowRight />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.descblock}>
            <View style={styles.txtblock}>
              <DocumentIcon />
              <Text style={styles.desctxt}>Политика конденфициальности</Text>
            </View>
            <TouchableOpacity>
              <ArrowRight />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.authbtn}>
            <Image source={require('../../../assets/images/png/fox.png')} />
            <Text style={styles.authbtnText}>
              Войти с помощью <Text style={{color: '#FFD0A1'}}>MetaMask</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
  descblock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 36,
  },
  txtblock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desctxt: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
    marginLeft: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#FFD0A1',
    marginTop: 25,
    opacity: 0.3,
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
    marginTop: 25,
  },
  authbtnText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
});
