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
import MenuBarIcon from '../../../assets/images/svg/profile/MenuBar';
import Icon from '../../../assets/images/svg/profile/Icon';
import {useSelector} from 'react-redux';
import BlockIcon from '../../../assets/images/svg/profile/Block';

export default function App({name, navigation}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{name}</Text>
      <View style={styles.headersIconBlock}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BlockUserScreen');
          }}
          style={{marginRight: 15}}>
          <BlockIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 15}}>
          <Icon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <MenuBarIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  headerText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontFamily: 'Mulish-LightItalic',
    textTransform: 'uppercase',
  },
  headersIconBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
