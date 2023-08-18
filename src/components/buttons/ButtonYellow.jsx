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
  TouchableOpacity,
} from 'react-native';

export default function App({text, onpress}) {
  return (
    <TouchableOpacity onPress={onpress} style={styles.button}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD0A1',
    width: '100%',
    borderRadius: 10,
    height: 50,
    shadowColor: 'rgba(84, 30, 14, 0.21)',
    shadowOffset: {width: -4, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: '#551F0E',
    fontFamily: 'Mulish-Regular',
  },
});
