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

export default function App({data, onpress, navigation}) {
  return data.map((value, index) => {
    return (
      <TouchableOpacity
        onPress={onpress}
        key={index}
        style={styles.sliderblock}>
        <Image style={styles.img} source={value.img} />
        <Text style={styles.slidertxt}>{value.name}</Text>
      </TouchableOpacity>
    );
  });
}

const styles = StyleSheet.create({
  sliderblock: {
    alignItems: 'center',
    marginLeft: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  slidertxt: {
    marginTop: 5,
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'Milush-Regular',
  },
});
