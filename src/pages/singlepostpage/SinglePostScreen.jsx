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
import MenuBarIcon from '../../../assets/images/svg/profile/MenuBar';
import ArrowLeft from '../../../assets/images/svg/profile/ArrowLeft';
import MenuBar from '../../navigation/MenuBar';
import LikeIcon from '../../../assets/images/svg/post/LikeIcon';
import Button from '../../components/buttons/ButtonYellow';
import FavPostBlock from '../../components/singleposts/FavPostBlock';
import SupportIcon from '../../../assets/images/svg/post/Support';
import {useState} from 'react';
import AddPopup from '../addpost/Popup/PostsPopup';
import {useSelector} from 'react-redux';

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
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  console.log(prevRoute.name);
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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate(prevRoute.name)}>
            <ArrowLeft />
          </TouchableOpacity>
          <View style={styles.headersIconBlock}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SettingsScreen')}>
              <MenuBarIcon />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={styles.imgBlock}>
            <Image
              style={styles.img_back}
              source={require('../../../assets/images/png/post/post.png')}
            />
            <TouchableOpacity style={styles.icon}>
              <LikeIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SupportPage')}
              style={styles.support}>
              <SupportIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.descblock}>
            <Text style={styles.postName}>Levitation</Text>
            <Text style={styles.levitationdesc}>
              Cherry blossoms signal the arrival of Spring in many parts of the
              world, transforming parks, neighborhoods and countrysides into
              fairytale scenes of gentle pink and white flowers that appear as
              clouds from a distance. The brief presence of these splendid
              blooms is much celebrated in Japan as an annual event referred to
              as “Hanami” with picnics, family gatherings, and prolific picture
              taking among the ephemeral flowers.
            </Text>
          </View>
          <View style={styles.userrBlock}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UsersPageScreen')}
              style={styles.user}>
              <Image
                style={styles.userImage}
                source={require('../../../assets/images/png/home/userpic1.png')}
              />
              <View style={{marginLeft: 20}}>
                <Text style={styles.userName}>Judith Rodriguez</Text>
                <Text style={styles.followers}>387 подписчиков</Text>
              </View>
            </TouchableOpacity>
            <Button text={'Купить'} />
          </View>
          <View style={styles.favblock}>
            <Text style={styles.favTxt}>Вам может понравится</Text>
          </View>
          <ScrollView
            horizontal
            style={{
              flex: 1,
              paddingLeft: 6,
              marginTop: 20,
              paddingBottom: 150,
            }}>
            <View
              style={{
                flex: 1,
                marginRight: 20,
                flexDirection: 'row',
              }}>
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
        </ScrollView>
        <MenuBar navigation={navigation} active="home" />
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
    position: 'relative',
  },
  navbar: {
    // position: 'absolute',
    bottom: 40,
    width: '100%',
    left: 20,
    backgroundColor: 'transparent',
  },
  header: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  imgBlock: {
    marginTop: 10,
    width: '100%',
    height: 343,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  img_back: {
    width: '100%',
    position: 'relative',
    borderRadius: 20,
  },
  icon: {
    position: 'absolute',
    top: 16,
    right: 26,
  },
  descblock: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  postName: {
    fontSize: 24,
    fontFamily: 'Mulish-LightItalic',
    color: '#FFFFFF',
  },
  levitationdesc: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#FFFFFF',
    marginTop: 16,
    textAlign: 'justify',
  },
  userrBlock: {
    marginTop: 16,
    marginBottom: 56,
    paddingHorizontal: 16,
  },
  userImage: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#F0A989',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#FFFFFF',
  },
  followers: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    color: '#F0A989',
  },
  favblock: {
    paddingHorizontal: 16,
  },
  favTxt: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#FFFFFF',
  },
  support: {
    position: 'absolute',
    top: 46,
    right: 26,
  },
});
