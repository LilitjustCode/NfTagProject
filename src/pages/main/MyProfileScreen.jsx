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
import Header from '../../components/profile/HeaderAnotherUser';
import HeaderUserBlock from '../../components/profile/UserHeader';
import DescriptionBlock from '../../components/profile/DescriptionPart';
import AllPostsBlock from '../../components/profile/AllPostsBlock';
import MenuBar from '../../navigation/MenuBar';
import AddPopup from '../addpost/Popup/PostsPopup';
import {useSelector} from 'react-redux';

const width = Dimensions.get('window').width;
console.log(width, 'kkkk');

export default function App({navigation}) {
  const {
    open_touch_id_popup,
    stateName,
    open_delete_popup,
    open_close_popup,
    open_add_popup,
  } = useSelector(state => state.justDriveReducer);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/profilebackground.png')}
        style={styles.fixed}>
        <Header navigation={navigation} name={'Judith Rod'} />
        <ScrollView style={{flex: 1}}>
          <HeaderUserBlock navigation={navigation} />
          <DescriptionBlock
            text={
              'А также реплицированные с зарубежных источников, современные исследования своевременно  верифицированы. В частности, убеждённость некоторых оппонентов в значительной степени обусловливает важность существующих условий.'
            }
          />
          <AllPostsBlock />
        </ScrollView>
        <MenuBar navigation={navigation} active="user" />
      </ImageBackground>
      {open_add_popup ? <AddPopup navigation={navigation} /> : ''}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  fixed: {
    flex: 1,
    paddingHorizontal: 16,
    position: 'relative',
  },
  navbar: {
    // position: 'absolute',
    bottom: 40,
    width: '100%',
    left: 20,
    backgroundColor: 'transparent',
  },
});
