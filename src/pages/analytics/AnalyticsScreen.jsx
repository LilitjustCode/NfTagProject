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
import MenuBar from '../../navigation/MenuBar';
import {useSelector} from 'react-redux';
import AddPopup from '../addpost/Popup/PostsPopup';

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
        <View style={styles.header}>
          <Text style={styles.headerText}>Активность</Text>
        </View>

        <ScrollView style={{flex: 1}}>
          <View style={styles.block}>
            <Text style={styles.timeText}>Сегодня</Text>

            <View style={styles.notBlock}>
              <View style={styles.txtblock}>
                <Image
                  source={require('../../../assets/images/png/analytics/Ellipseanalytics.png')}
                />
                <View style={styles.txtdiv}>
                  <Text style={styles.nameTxt}>Moonbird</Text>
                  <Text style={styles.descText}>
                    оценил ваш проект{'  '}
                    <Text
                      style={{fontSize: 10, color: '#FFD0A1', opacity: 0.5}}>
                      26 мин
                    </Text>
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/png/analytics/nftnot.png')}
              />
            </View>
            <View style={styles.notBlock}>
              <View style={styles.txtblock}>
                <Image
                  source={require('../../../assets/images/png/analytics/Ellipseanalytics.png')}
                />
                <View style={styles.txtdiv}>
                  <Text style={styles.nameTxt}>Moonbird</Text>
                  <Text style={styles.descText}>
                    оценил ваш проект{'  '}
                    <Text
                      style={{fontSize: 10, color: '#FFD0A1', opacity: 0.5}}>
                      26 мин
                    </Text>
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/png/analytics/nftnot.png')}
              />
            </View>
            <View style={styles.notBlock}>
              <View style={styles.txtblock}>
                <Image
                  source={require('../../../assets/images/png/analytics/Ellipseanalytics.png')}
                />
                <View style={styles.txtdiv}>
                  <Text style={styles.nameTxt}>Moonbird</Text>
                  <Text style={styles.descText}>
                    оценил ваш проект{'  '}
                    <Text
                      style={{fontSize: 10, color: '#FFD0A1', opacity: 0.5}}>
                      26 мин
                    </Text>
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>Подписаться</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.block}>
            <Text style={styles.timeText}>Вчера</Text>
            <View style={styles.notBlock}>
              <View style={styles.txtblock}>
                <Image
                  source={require('../../../assets/images/png/analytics/Ellipseanalytics.png')}
                />
                <View style={styles.txtdiv}>
                  <Text style={styles.nameTxt}>Moonbird</Text>
                  <Text style={styles.descText}>
                    оценил ваш проект{'  '}
                    <Text
                      style={{fontSize: 10, color: '#FFD0A1', opacity: 0.5}}>
                      26 мин
                    </Text>
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/png/analytics/nftnot.png')}
              />
            </View>
            <View style={styles.notBlock}>
              <View style={styles.txtblock}>
                <Image
                  source={require('../../../assets/images/png/analytics/Ellipseanalytics.png')}
                />
                <View style={styles.txtdiv}>
                  <Text style={styles.nameTxt}>Moonbird</Text>
                  <Text style={styles.descText}>
                    оценил ваш проект{'  '}
                    <Text
                      style={{fontSize: 10, color: '#FFD0A1', opacity: 0.5}}>
                      26 мин
                    </Text>
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/png/analytics/nftnot.png')}
              />
            </View>
            <View style={styles.notBlock}>
              <View style={styles.txtblock}>
                <Image
                  source={require('../../../assets/images/png/analytics/Ellipseanalytics.png')}
                />
                <View style={styles.txtdiv}>
                  <Text style={styles.nameTxt}>Moonbird</Text>
                  <Text style={styles.descText}>
                    оценил ваш проект{'  '}
                    <Text
                      style={{fontSize: 10, color: '#FFD0A1', opacity: 0.5}}>
                      26 мин
                    </Text>
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>Подписаться</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.block}>
            <Text style={styles.timeText}>На этой неделе</Text>

            <View style={styles.notBlock}>
              <View style={styles.txtblock}>
                <Image
                  source={require('../../../assets/images/png/analytics/Ellipseanalytics.png')}
                />
                <View style={styles.txtdiv}>
                  <Text style={styles.nameTxt}>Moonbird</Text>
                  <Text style={styles.descText}>
                    оценил ваш проект{'  '}
                    <Text
                      style={{fontSize: 10, color: '#FFD0A1', opacity: 0.5}}>
                      26 мин
                    </Text>
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/png/analytics/nftnot.png')}
              />
            </View>
            <View style={styles.notBlock}>
              <View style={styles.txtblock}>
                <Image
                  source={require('../../../assets/images/png/analytics/Ellipseanalytics.png')}
                />
                <View style={styles.txtdiv}>
                  <Text style={styles.nameTxt}>Moonbird</Text>
                  <Text style={styles.descText}>
                    оценил ваш проект{'  '}
                    <Text
                      style={{fontSize: 10, color: '#FFD0A1', opacity: 0.5}}>
                      26 мин
                    </Text>
                  </Text>
                </View>
              </View>
              <Image
                source={require('../../../assets/images/png/analytics/nftnot.png')}
              />
            </View>
          </View>
        </ScrollView>
        <MenuBar navigation={navigation} active="analytics" />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  headerText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
  block: {
    marginTop: 20,
  },
  timeText: {
    fontSize: 14,
    color: '#F0A989',
    fontFamily: 'Mulish-Regular',
  },
  notBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  txtblock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtdiv: {
    marginLeft: 10,
  },
  nameTxt: {
    color: '#FFD0A1',
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
  },
  descText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
  },
  btn: {
    width: 92,
    backgroundColor: '#FFD0A1',
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    color: '#551F0E',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
  },
});
