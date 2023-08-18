import {BlurView} from '@react-native-community/blur';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AddIcon from '../../assets/images/svg/menu/Add';
import HomeDisableIcon from '../../assets/images/svg/menu/Home';
import UserActiveIcon from '../../assets/images/svg/menu/User';
import AnalyticsDisableIcon from '../../assets/images/svg/menu/Analytics';
import SeachDisableIcon from '../../assets/images/svg/menu/Search';
import ActiveButton from '../../assets/images/svg/menu/Active';
import UserDisableIcon from '../../assets/images/svg/menu/UserDisable';
import AnalyticsActiveIcon from '../../assets/images/svg/menu/AnalyticsAcive';
import SearchActive from '../../assets/images/svg/menu/ActiveSearch';
import HomeActive from '../../assets/images/svg/menu/HomeActive';
import {useSelector, useDispatch} from 'react-redux';
import {openAddPopup} from '../redux/actions/actions';

const width = Dimensions.get('window').width;
console.log(width, 'kkkk');

export default function App({navigation, active}) {
  const dispatch = useDispatch();
  return (
    <View
      style={[
        styles.absolutestyle,
        active == 'search' || active == 'home' || active == 'add'
          ? {paddingHorizontal: 16, left: 0}
          : '',
      ]}>
      <View style={styles.navbar}>
        <Image
          style={{width: '106%', height: '100%'}}
          source={require('../../assets/images/png/Subtract.png')}
        />
        <TouchableOpacity
          onPress={() => dispatch(openAddPopup())}
          style={styles.addIcon}>
          <AddIcon />
        </TouchableOpacity>
        <View style={styles.iconsdiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeAuthScreen')}>
            {active === 'home' ? <HomeActive /> : <HomeDisableIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            {active === 'search' ? <SearchActive /> : <SeachDisableIcon />}
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AnalyticsScreen')}>
            {active === 'analytics' ? (
              <AnalyticsActiveIcon />
            ) : (
              <AnalyticsDisableIcon />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyProfileScreen')}>
            {active === 'user' ? <UserActiveIcon /> : <UserDisableIcon />}
          </TouchableOpacity>
        </View>
        {active === 'user' ? (
          <TouchableOpacity style={styles.activebtnuser}>
            <ActiveButton />
          </TouchableOpacity>
        ) : (
          ''
        )}
        {active === 'analytics' ? (
          <TouchableOpacity style={styles.activebtnanalytics}>
            <ActiveButton />
          </TouchableOpacity>
        ) : (
          ''
        )}
        {active === 'search' ? (
          <TouchableOpacity style={styles.activebtnsearch}>
            <ActiveButton />
          </TouchableOpacity>
        ) : (
          ''
        )}
        {active === 'home' ? (
          <TouchableOpacity style={styles.activebtnhome}>
            <ActiveButton />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  absolutestyle: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    height: 69,
    alignItems: 'center',
    left: 16,
  },
  navbar: {
    width: '100%',
    alignItems: 'center',
  },
  iconsdiv: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    paddingHorizontal: 30,
    top: 25,
  },
  addIcon: {
    position: 'absolute',
    left: width <= 360 ? '42%' : '43%',
    top: -10,
  },
  activebtnuser: {
    position: 'absolute',
    bottom: -20,
    right: 4,
  },
  activebtnanalytics: {
    position: 'absolute',
    bottom: -20,
    right: width <= 360 ? 70 : 80,
  },
  activebtnsearch: {
    position: 'absolute',
    bottom: -20,
    left: width <= 360 ? 75 : 82,
  },
  activebtnhome: {
    position: 'absolute',
    bottom: -20,
    left: width <= 360 ? 3 : 3,
  },
});
