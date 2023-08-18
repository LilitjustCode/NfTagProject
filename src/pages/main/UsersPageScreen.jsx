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
import Header from '../../components/profile/Header';
import HeaderUserBlock from '../../components/profile/UserHeaderAnother';
import DescriptionBlock from '../../components/profile/DescriptionPart';
import AllPostsBlock from '../../components/profile/AllPostsBlock';
import MenuBar from '../../navigation/MenuBar';
import AddPopup from '../addpost/Popup/PostsPopup';
import {useSelector} from 'react-redux';
import FavPostBlock from '../../components/search/FavPostBlock';

const width = Dimensions.get('window').width;
console.log(width, 'kkkk');

const data = [
  {
    id: 1,
    img: require('../../../assets/images/png/profile/sakura.png'),
    name: 'Sakura Vista',
    author: 'Judith Rod',
  },
  {
    id: 2,
    img: require('../../../assets/images/png/profile/owl.png'),
    name: 'Pacific Stereo',
    author: 'Judith Rod',
  },
  {
    id: 3,
    img: require('../../../assets/images/png/profile/sakura.png'),
    name: 'Pacific Stereo',
    author: 'Judith Rod',
  },
  {
    id: 4,
    img: require('../../../assets/images/png/profile/sakura.png'),
    name: 'Cala Foods',
    author: 'Judith Rod',
  },
  {
    id: 5,
    img: require('../../../assets/images/png/profile/bear.png'),
    name: 'Cala Foods',
    author: 'Judith Rod',
  },
  {
    id: 6,
    img: require('../../../assets/images/png/profile/sakura.png'),
    name: 'Cala Foods',
    author: 'Judith Rod',
  },
];

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
              'С другой стороны, социально-экономическое развитие требует определения и уточнения инновационных методов управления процессами.'
            }
          />
          <View style={styles.postsBlock}>
            {data.map((value, index) => {
              return (
                <FavPostBlock
                  key={index}
                  name={value.name}
                  img={value.img}
                  author={value.author}
                />
              );
            })}
          </View>
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
  postsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
    paddingBottom: 100,
    width: '100%',
  },
});
