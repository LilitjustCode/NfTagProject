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
import {useState, useRef, useEffect} from 'react';
import SearchIcon from '../../../assets/images/svg/search/SearcIcon';
import SliderBlock from '../../components/search/Slide';
import AllPostsAuth from '../../components/home/AllPostsBlockInAuth';
import UserIcon from '../../../assets/images/svg/menu/UserDisable';
import HomeIcon from '../../../assets/images/svg/menu/HomeActive';
import SearchMenuIcon from '../../../assets/images/svg/auth/Search';
import ActiveIcon from '../../../assets/images/svg/auth/Active';
import {useSelector, useDispatch} from 'react-redux';
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

const data = [
  {
    id: 1,
    name: 'Добавить',
    img: require('../../../assets/images/png/search/add.png'),
  },
];

export default function App({navigation}) {
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
            />
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          <ScrollView style={{flex: 1, marginTop: 15}} horizontal>
            <SliderBlock
              onpress={() => {
                loadCamera();
                setDtCamera(true);
              }}
              data={data}
            />
          </ScrollView>

          <AllPostsAuth navigation={navigation} />
        </ScrollView>
        <View style={styles.footer}>
          <Image
            style={styles.navigation}
            source={require('../../../assets/images/png/containers.png')}
          />
          <View style={styles.navIconsDiv}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeInAuthScreen')}>
              <HomeIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <SearchMenuIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('EnteranceScreen')}>
              <UserIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.activeLine}>
            <ActiveIcon />
          </View>
        </View>
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
  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 20,
  },

  navIconsDiv: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    paddingHorizontal: 80,
  },
  activeLine: {
    position: 'absolute',
    bottom: -5,
    left: 41,
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
