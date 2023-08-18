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
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  openDeletePopup,
  closeDeletePopup,
} from '../../../redux/actions/actions';

export default function App({}) {
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(openDeletePopup());
  //   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.browncontainer}>
        <View style={styles.header}>
          <TouchableOpacity></TouchableOpacity>
          <Text style={styles.headerText}>Удалить аккаунт</Text>
          <TouchableOpacity onPress={() => dispatch(closeDeletePopup())}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%'}}>
          <Text style={styles.descText}>
            Вы уверены, что хотите удалить аккаунт навсегда? Это действие
            невозвратно.
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <TouchableOpacity
            onPress={() => dispatch(closeDeletePopup())}
            style={styles.btn}>
            <Text style={styles.btnText}>Отмена</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <Button
            onpress={() => {
              dispatch(closeDeletePopup());
            }}
            text={'Удалить'}
          />
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
    minHeight: 280,
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
  btn: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFD0A1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'Mulish-Light',
    color: 'white',
  },
});
