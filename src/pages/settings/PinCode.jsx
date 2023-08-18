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
import ArrowLeft from '../../../assets/images/svg/profile/ArrowLeft';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ClearIcon from '../../../assets/images/svg/settings/Clearpin';
import TouchId from '../../../assets/images/svg/settings/TouchId';
import {
  openTouchId,
  openDeletePopup,
  openCloseAccountPopup,
} from '../../redux/actions/actions';
import TouchIdPopup from './Popup/TouchIdpopup';
import DeleteAccountPopup from './Popup/DeleteAccount';
import CloseAccount from './Popup/CloseAccount';

export default function App({navigation}) {
  const dispatch = useDispatch();
  const {open_touch_id_popup, stateName, open_delete_popup, open_close_popup} =
    useSelector(state => state.justDriveReducer);
  const [pin, setPin] = useState([{key: ''}, {key: ''}, {key: ''}, {key: ''}]);
  const [count, setCoint] = useState(0);
  const [code, setCode] = useState('');
  useEffect(() => {
    getPascoode();
  }, []);
  const getPascoode = async () => {
    let code = await AsyncStorage.getItem('passcode');

    if (code.length === 4) {
      setPin([{key: ''}, {key: ''}, {key: ''}, {key: ''}]);
      if (stateName == 'delete') {
        dispatch(openDeletePopup());
      }
    } else if (code.length === 6) {
      setPin([
        {key: ''},
        {key: ''},
        {key: ''},
        {key: ''},
        {key: ''},
        {key: ''},
      ]);
    }
  };
  const handelClick = async number => {
    let item = [...pin];
    if (number !== 'd') {
      if (count < pin.length) {
        item[count].key = number;
        setCoint(count + 1);
      }
    } else {
      if (count !== 0) {
        item[count - 1].key = '';
        setCoint(count - 1);
      }
    }
    if (count == pin.length - 1) {
      let code = await AsyncStorage.getItem('passcode');
      let code2 = '';
      pin.map((elm, i) => {
        code2 += elm.key;
      });
      if (stateName == 'delete') {
        dispatch(openDeletePopup());
      }
      if (stateName == 'close') {
        dispatch(openCloseAccountPopup());
      }
      if (title === 'Sending') {
        if (code2 === code) {
          navigation.navigate('Sending');
        } else {
          item.map((elm, i) => {
            elm.key = '';
          });
          Vibration.vibrate();
          setCoint(0);
          setPin(item);
        }
      } else if (title === 'NavigationMenu') {
        if (code2 === code) {
          navigation.navigate('NavigationMenu');
        } else {
          item.map((elm, i) => {
            elm.key = '';
          });
          Vibration.vibrate();
          setCoint(0);
          setPin(item);
        }
      }
    }

    setPin(item);
  };

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
          <Text style={styles.headerText}>Установите PIN код</Text>
          <View style={{width: 19}}></View>
        </View>
        <ScrollView style={{flex: 1, marginTop: '25%'}}>
          <View style={styles.pinBlock}>
            {pin.map((elm, i) => {
              if (elm.key === '') {
                return <View key={i} style={styles.pinCode}></View>;
              } else {
                return <View key={i} style={styles.activePin}></View>;
              }
            })}
          </View>
          <View style={styles.touchBlock}>
            <TouchableOpacity
              onPress={() => handelClick(1)}
              style={styles.number}>
              <Text style={styles.pinText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handelClick(2)}
              style={styles.number}>
              <Text style={styles.pinText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handelClick(3)}
              style={styles.number}>
              <Text style={styles.pinText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchBlock}>
            <TouchableOpacity
              onPress={() => handelClick(4)}
              style={styles.number}>
              <Text style={styles.pinText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handelClick(5)}
              style={styles.number}>
              <Text style={styles.pinText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handelClick(6)}
              style={styles.number}>
              <Text style={styles.pinText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchBlock}>
            <TouchableOpacity
              onPress={() => handelClick(7)}
              style={styles.number}>
              <Text style={styles.pinText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handelClick(8)}
              style={styles.number}>
              <Text style={styles.pinText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handelClick(9)}
              style={styles.number}>
              <Text style={styles.pinText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchBlock}>
            <TouchableOpacity
              onPress={() => dispatch(openTouchId())}
              style={{paddingLeft: 25}}>
              <TouchId />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handelClick(0)}
              style={styles.number}>
              <Text style={styles.pinText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handelClick('d')}
              style={{paddingRight: 20}}>
              <ClearIcon />
            </TouchableOpacity>
          </View>
        </ScrollView>
        {open_touch_id_popup ? <TouchIdPopup /> : ''}
        {open_delete_popup ? <DeleteAccountPopup /> : ''}
        {open_close_popup ? <CloseAccount /> : ''}
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
  },
  activePin: {
    width: 14,
    height: 14,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFD0A1',
    backgroundColor: '#FFD0A1',
    marginBottom: 59,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
  pinBlock: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 134,
  },
  pinCode: {
    width: 14,
    height: 14,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFD0A1',
    marginBottom: 59,
  },
  touchBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 19,
    paddingHorizontal: 50,
  },
  number: {
    width: 75,
    height: 75,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFD0A1',
  },
  pinText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Milush-Regular',
  },
});
