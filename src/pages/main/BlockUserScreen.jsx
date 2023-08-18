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
import ArrowLeft from '../../../assets/images/svg/profile/ArrowLeft';
import Button from '../../components/buttons/ButtonYellow';
import ScopeIcon from '../../../assets/images/svg/post/Scope';

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/profilebackground.png')}
        style={styles.fixed}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UsersPageScreen')}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Заблокировать пользователя</Text>
          <View style={{width: 19}}></View>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={styles.input}>
            <Image
              style={{borderRadius: 100, width: 40, height: 40}}
              source={require('../../../assets/images/png/profile/userpic.png')}
            />
            <Text style={styles.nametxt}>GSIOPPP</Text>
          </View>
          <View style={styles.multilineInput}>
            <TextInput
              multiline
              placeholder="Текст обращения"
              placeholderTextColor={'#F0A989'}
              style={{
                color: 'white',
                paddingRight: 30,
              }}
            />
            <TouchableOpacity style={styles.scopeIcon}>
              <ScopeIcon />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button text={'Сохранить'} />
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
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 35,
  },
  headerText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
  userpic: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  userpicText: {
    color: '#F0A989',
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  footer: {
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(215, 136, 112, 0.2)',
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 18,
    paddingVertical: 18,

    alignItems: 'center',

    shadowColor: 'rgba(51, 16, 3, 0.32)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
    marginTop: 20,

    borderLeftWidth: 2,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
  multilineInput: {
    width: '100%',
    backgroundColor: '#D7887033',
    borderRadius: 10,
    height: 210,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 7,
    position: 'relative',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
    marginBottom: 100,
  },
  nametxt: {
    marginLeft: 10,
    fontFamily: 'Mulish-LightItalic',
    fontSize: 16,
    color: 'white',
  },
  scopeIcon: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
});
