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
import {useEffect, useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeAddPopup} from '../../../redux/actions/actions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import {getImageData} from '../../../redux/actions/actions';

export default function App({navigation}) {
  const dispatch = useDispatch();
  const [opensea, setOpenSea] = useState(false);
  const [response, setResponse] = useState(null);

  const onButtonPress = useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
      dispatch(getImageData(response));
      if (response != null) {
        navigation.navigate('AddPostGallery');
      }
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
      dispatch(getImageData(response));
      if (response != null) {
        navigation.navigate('AddPostGallery');
      }
    }
  }, []);

  if (opensea) {
    return (
      <SafeAreaView style={[styles.container]}>
        <ImageBackground
          blurRadius={800}
          style={{flex: 1, width: '100%', justifyContent: 'flex-end'}}
          source={require('../../../../assets/images/png/blur.png')}>
          <View style={[styles.browncontainer, {minHeight: 220}]}>
            <View style={styles.header}>
              <TouchableOpacity></TouchableOpacity>
              <Text style={styles.headerText}>Загрузить с OPENSEA</Text>
              <TouchableOpacity onPress={() => dispatch(closeAddPopup())}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Ссылка на проект OPENSEA"
              placeholderTextColor={'#F0A989'}
              style={styles.input}
            />
            <View style={{marginTop: 30}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddPostOpensea');
                }}
                style={styles.yellowbtn}>
                <Text style={styles.yellowtxt}>Далее</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        blurRadius={100}
        style={{flex: 1, width: '100%', justifyContent: 'flex-end'}}
        source={require('../../../../assets/images/png/blur.png')}>
        <View style={styles.browncontainer}>
          <View style={styles.header}>
            <TouchableOpacity></TouchableOpacity>
            <Text style={styles.headerText}>Добавить проект</Text>
            <TouchableOpacity onPress={() => dispatch(closeAddPopup())}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={{width: '100%'}}>
            <TouchableOpacity
              onPress={() =>
                onButtonPress('library', ImagePicker.ImageLibraryOptions)
              }
              style={styles.btn}>
              <Text style={styles.btnText}>Загрузить из галереи</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOpenSea(true);
              }}
              style={[styles.btn, {marginTop: 10}]}>
              <Text style={styles.btnText}>Загрузить с OPENSEA</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              onPress={() => {
                dispatch(getImageData(response));
                navigation.navigate('AddPostGallery');
              }}
              style={styles.yellowbtn}>
              <Text style={styles.yellowtxt}>Далее</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    height: '100%',
    // backgroundColor: '#D7887033',
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
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#D7887033',
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    fontFamily: 'Mulish-Light',
    color: 'white',
  },
  yellowbtn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FFD0A1',
    paddingHorizontal: 18,
    justifyContent: 'center',
    opacity: 0.5,
    alignItems: 'center',
  },
  yellowtxt: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#551F0E',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#D7887033',
    paddingHorizontal: 18,
    justifyContent: 'center',
    fontSize: 14,
    fontFamily: 'Mulish-Light',
    color: 'white',
  },
});
