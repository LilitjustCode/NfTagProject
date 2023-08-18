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

export default function App({text}) {
  return (
    <View style={styles.desccontainer}>
      <Text style={styles.descText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  desccontainer: {
    width: '100%',
    marginTop: 16,
  },
  descText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    lineHeight: 18,
  },
});
