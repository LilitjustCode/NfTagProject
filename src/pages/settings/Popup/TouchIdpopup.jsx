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
import CloseIcon from '../../../../assets/images/svg/settings/Close';
import TouchId from '../../../../assets/images/svg/settings/TouchId';
import Button from '../../../components/buttons/ButtonYellow';
import Success from '../../../../assets/images/svg/settings/Success';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeTouchId} from '../../../redux/actions/actions';

export default function App({}) {
  const [yes, setYes] = useState(false);
  const dispatch = useDispatch();

  if (yes) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.browncontainer}>
          <View style={styles.header}>
            <TouchableOpacity></TouchableOpacity>
            <Text style={styles.headerText}>Успешно!</Text>
            <TouchableOpacity onPress={() => dispatch(closeTouchId())}>
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity>
              <Success />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30}}>
            <Button onpress={() => dispatch(closeTouchId())} text={'Ок'} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.browncontainer}>
        <View style={styles.header}>
          <TouchableOpacity></TouchableOpacity>
          <Text style={styles.headerText}>Использовать Touch ID</Text>
          <TouchableOpacity onPress={() => dispatch(closeTouchId())}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%'}}>
          <Text style={styles.descText}>
            Хотите ли вы использовать Touch ID для входа в  приложение при
            следующем использовании?
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <TouchableOpacity>
            <TouchId />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <Button onpress={() => setYes(true)} text={'Использовать Touch ID'} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#DADADA66',
    justifyContent: 'flex-end',
  },
  browncontainer: {
    width: '100%',
    minHeight: 300,
    backgroundColor: '#551F0E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    paddingHorizontal: 16,
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
    fontFamily: 'Mulish-Light',
  },
  descText: {
    fontSize: 14,

    color: '#FFFFFF',
    fontFamily: 'Mulish-Light',
  },
});
