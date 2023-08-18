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
import {useState} from 'react';
import MenuBar from '../../navigation/MenuBar';
import SearchIcon from '../../../assets/images/svg/search/SearcIcon';
import SliderBlock from '../../components/search/Slide';
import FavPost from '../../components/search/FavPostBlock';
import {useSelector} from 'react-redux';
import AddPopup from '../addpost/Popup/PostsPopup';

const datas = [
  {
    id: 1,
    name: 'Sakura',
    img: require('../../../assets/images/png/search/user1.png'),
  },
  {
    id: 2,
    name: 'Hall',
    img: require('../../../assets/images/png/search/user2.png'),
  },
  {
    id: 3,
    name: 'Warf',
    img: require('../../../assets/images/png/search/user3.png'),
  },
  {
    id: 4,
    name: 'Dukes',
    img: require('../../../assets/images/png/search/user4.png'),
  },
  {
    id: 5,
    name: 'Dukes',
    img: require('../../../assets/images/png/search/user5.png'),
  },
  {
    id: 6,
    name: 'Dukes',
    img: require('../../../assets/images/png/search/user6.png'),
  },
  {
    id: 7,
    name: 'Dukes',
    img: require('../../../assets/images/png/search/user4.png'),
  },
  {
    id: 8,
    name: 'Dukes',
    img: require('../../../assets/images/png/search/user5.png'),
  },
  {
    id: 9,
    name: 'Dukes',
    img: require('../../../assets/images/png/search/user6.png'),
  },
];

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
  const [hide, setHide] = useState(true);
  const {open_add_popup} = useSelector(state => state.justDriveReducer);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/profilebackground.png')}
        style={styles.fixed}>
        <View style={styles.header}>
          <View style={styles.inpdiv}>
            <SearchIcon />
            <TextInput
              placeholder="Поиск"
              placeholderTextColor={'#F0A989'}
              style={styles.input}
              onFocus={() => setHide(false)}
              onBlur={() => setHide(true)}
            />
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          <ScrollView horizontal style={{flex: 1, marginTop: 15}}>
            <SliderBlock
              onpress={() => {
                navigation.navigate('UsersPageScreen');
              }}
              navigation={navigation}
              data={datas}
            />
          </ScrollView>

          <View style={styles.postsBlock}>
            {data.map((value, index) => {
              return (
                <FavPost
                  key={index}
                  name={value.name}
                  img={value.img}
                  author={value.author}
                />
              );
            })}
          </View>
        </ScrollView>
        {hide ? <MenuBar navigation={navigation} active="search" /> : ''}
        {open_add_popup ? <AddPopup navigation={navigation} /> : ''}
      </ImageBackground>
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
    // paddingHorizontal: 16,
    position: 'relative',
  },
  header: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  inpdiv: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    // paddingVertical: 16,
    backgroundColor: '#D7887033',
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  input: {
    width: '100%',
    height: '100%',
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Milush-Regular',
    color: 'white',
  },
  postsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
});
