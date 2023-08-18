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
  Button,
} from 'react-native';
import SearchIcon from '../../../assets/images/svg/search/SearcIcon';
import SliderBlock from '../../components/search/Slide';
import AllPostsAuth from '../../components/home/AllPostsBlockAuth';
import MenuBar from '../../navigation/MenuBar';
import {useState, useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AddPopup from '../addpost/Popup/PostsPopup';
import InstaStory from 'react-native-insta-story';
import {RNCamera} from 'react-native-camera';
import {
  Camera,
  CameraDeviceFormat,
  CameraRuntimeError,
  FrameProcessorPerformanceSuggestion,
  PhotoFile,
  sortFormats,
  useCameraDevices,
  useFrameProcessor,
  VideoFile,
  frameRateIncluded,
} from 'react-native-vision-camera';
import {useCamera} from 'react-native-camera-hooks';
import CameraBackIcon from '../../../assets/images/svg/home/CameraBack';
import {getStoryImageData} from '../../redux/actions/actions';
import CloseSvg from '../../../assets/images/svg/home/CloseSvg';
import TorchOn from '../../../assets/images/svg/home/TorchOn';
import TorchOff from '../../../assets/images/svg/home/TorchOff';

const storydata = [
  {
    user_id: 1,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: 'Sakura',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    user_name: 'Hall',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?cs=srgb&dl=pexels-jacob-colvin-1761279.jpg&fm=jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Warf',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 4,
    user_image:
      'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    user_name: 'Dukes',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 5,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Elson',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 6,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Elson',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 7,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Elson',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 8,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Elson',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
];

const data = [
  {
    id: 1,
    name: 'Добавить',
    img: require('../../../assets/images/png/search/add.png'),
  },
];

export default function App({navigation}) {
  const [hide, setHide] = useState(true);
  const [dtCamera, setDtCamera] = useState(false);
  const camera = useRef(camera);
  const [imageurl, setImageUrl] = useState('');
  const [torchOn, setTorchOn] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    open_touch_id_popup,
    stateName,
    open_delete_popup,
    open_close_popup,
    open_add_popup,
  } = useSelector(state => state.justDriveReducer);
  const [front, setFront] = useState(false);

  const loadCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission == 'denied') {
      const newCameraPermission = await Camera.requestCameraPermission();
      // setCameraPermission(newCameraPermission)
    }
  };

  const takePhoto = async () => {
    try {
      const photo = await camera.current.takePhoto({
        flash: torchOn ? 'on' : 'off',
      });
      setLoading(true);
      const img = 'file://' + photo.path;
      dispatch(getStoryImageData(img));
      if (img) {
        navigation.navigate('StoriPicturePage');
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const devices = useCameraDevices('wide-angle-camera');
  const device = front ? devices.front : devices.back;

  if (dtCamera) {
    loadCamera();
    return (
      <View style={styles.camera}>
        <Camera
          ref={camera}
          style={{flex: 1}}
          device={device}
          isActive={true}
          photo={true}
          torch={torchOn ? 'on' : 'off'}
          video={false}></Camera>
        <TouchableOpacity
          onPress={() => setDtCamera(false)}
          style={styles.close}>
          <CloseSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTorchOn(!torchOn)}
          style={styles.torch}>
          {torchOn ? <TorchOn /> : <TorchOff />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            takePhoto();
          }}
          style={styles.circle}>
          <TouchableOpacity
            onPress={() => {
              takePhoto();
            }}
            style={styles.mini}></TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setFront(!front);
          }}
          style={styles.icon}>
          <CameraBackIcon />
        </TouchableOpacity>
      </View>
    );
  }

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
        <ScrollView style={{flex: 1, marginTop: 10}}>
          <ScrollView horizontal style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SliderBlock
                onpress={() => {
                  loadCamera();
                  setDtCamera(true);
                }}
                data={data}
              />
              <InstaStory
                pressedAvatarTextColor={'white'}
                avatarSize={50}
                data={storydata}
                duration={10}
              />
            </View>
          </ScrollView>
          <AllPostsAuth navigation={navigation} />
        </ScrollView>
        {hide ? <MenuBar navigation={navigation} active="home" /> : ''}
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
  cameraStyles: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'relative',
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 100,
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    opacity: 0.5,
    left: '38%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mini: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  icon: {
    position: 'absolute',
    right: 20,
    bottom: 50,
  },
  camera: {
    flex: 1,
    position: 'relative',
  },
  close: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 111111111,
  },
  torch: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 111111111,
  },
});
