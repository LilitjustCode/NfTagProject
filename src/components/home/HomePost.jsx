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
import LikeDisableIcon from '../../../assets/images/svg/search/Like';
import LikeActive from '../../../assets/images/svg/search/LikeActive';
import {useState} from 'react';

export default function App({navigation, name, desc, userpic, back}) {
  const [fav, setFav] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SinglePostScreen')}
      style={styles.container}>
      <View style={styles.imgBlock}>
        <Image style={styles.imgback} source={back} />
        {fav ? (
          <TouchableOpacity onPress={() => setFav(false)} style={styles.heart}>
            <LikeActive />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setFav(true)} style={styles.heart}>
            <LikeDisableIcon />
          </TouchableOpacity>
        )}

        <Image style={styles.user} source={userpic} />
      </View>
      <View style={styles.txtblock}>
        <Text style={styles.usertext}>{name}</Text>
        <Text style={styles.desctxt}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 380,
    backgroundColor: 'rgba(1, 5, 9, 0.46)',
    borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  imgBlock: {
    width: '100%',
    borderRadius: 20,
    height: 250,
  },
  imgback: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: 20,
  },
  heart: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  user: {
    position: 'absolute',
    left: '42%',
    bottom: -20,
    borderWidth: 1,
    borderColor: '#F0A989',
    borderRadius: 100,
    width: 56,
    height: 56,
  },
  txtblock: {
    padding: 16,
    marginTop: 10,
  },
  usertext: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Mulish-Regular',
  },
  desctxt: {
    marginTop: 10,
    fontSize: 14,
    color: 'white',
    fontFamily: 'Mulish-Regular',
    width: 311,
  },
});
