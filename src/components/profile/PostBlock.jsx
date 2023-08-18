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

export default function App({img, name, author}) {
  return (
    <TouchableOpacity style={styles.postblock}>
      <Image
        style={{width: '100%', height: 166, borderRadius: 10}}
        source={img}
      />
      <View style={styles.txtBlock}>
        <Text style={styles.nametxt}>{name}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postblock: {
    width: '48.5%',
    backgroundColor: 'rgba(1, 5, 9, 0.46)',
    borderRadius: 10,
    height: 225,
    marginTop: 10,
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
});
