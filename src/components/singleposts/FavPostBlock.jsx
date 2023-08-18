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

export default function App({img, name, author}) {
  const [fav, setFav] = useState(false);
  return (
    <TouchableOpacity style={styles.postblock}>
      <Image
        style={{
          width: '100%',
          height: 166,
          borderRadius: 10,
          position: 'relative',
        }}
        source={img}
      />

      {fav ? (
        <TouchableOpacity onPress={() => setFav(false)} style={styles.heart}>
          <LikeActive />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setFav(true)} style={styles.heart}>
          <LikeDisableIcon />
        </TouchableOpacity>
      )}

      <View style={styles.txtBlock}>
        <Text style={styles.nametxt}>{name}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postblock: {
    width: 160,
    backgroundColor: 'rgba(1, 5, 9, 0.46)',
    borderRadius: 10,
    height: 225,
    marginLeft: 10,
  },
  txtBlock: {
    padding: 11,
  },
  nametxt: {
    fontFamily: 'Mulish-Medium',
    fontSize: 12,
    color: '#FFFFFF',
  },
  author: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: '#F0A989',
    marginTop: 4,
  },
  heart: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
});
