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
import PlusIcon from '../../../assets/images/svg/profile/Plus';

const width = Dimensions.get('window').width;
console.log(width, 'kkkk');

export default function App({navigation}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.pictureBlock}>
        <TouchableOpacity style={styles.usepic}>
          <Image
            source={require('../../../assets/images/png/profile/userpic.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addpic}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.followsandredirectblock}>
        <View style={styles.followersblock}>
          <TouchableOpacity>
            <Text style={styles.numbertext}>54</Text>
            <Text style={styles.desctxt}>проекта</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numbertext}>1298</Text>
            <Text style={styles.desctxt}>подписчиков</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numbertext}>328</Text>
            <Text style={styles.desctxt}>подписчиков</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.redirectblock}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RedirectProfileScreen')}
            style={styles.btn}>
            <Text style={styles.btntext}>Редактировать профиль</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    marginTop: 15,
  },
  usepic: {
    position: 'relative',
  },
  addpic: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  followsandredirectblock: {
    width: width <= 360 ? '65%' : '70%',
  },
  followersblock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numbertext: {
    textAlign: 'center',
    marginBottom: 6,
    fontSize: 14,
    color: '#FFD0A1',
    fontFamily: 'Mulish-Regular',
  },
  desctxt: {
    textAlign: 'center',
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
  redirectblock: {
    marginTop: 16,
  },
  btn: {
    width: '100%',
    height: 30,
    backgroundColor: '#FFD0A1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 18,
    paddingHorizontal: 30,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 12,
    color: '#551F0E',
    fontFamily: 'Mulish-Regular',
  },
});
