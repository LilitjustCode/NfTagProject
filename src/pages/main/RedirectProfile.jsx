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
import ArrowLeft from '../../../assets/images/svg/profile/ArrowLeft';
import Button from '../../components/buttons/ButtonYellow';

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/profilebackground.png')}
        style={styles.fixed}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyProfileScreen')}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Редактировать профиль</Text>
          <View style={{width: 19}}></View>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={styles.userpic}>
            <Image
              style={{borderRadius: 100}}
              source={require('../../../assets/images/png/profile/userpic.png')}
            />
            <TouchableOpacity>
              <Text style={styles.userpicText}>Изменить фото профиля</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Имя пользователя"
            placeholderTextColor={'#F0A989'}
            style={styles.input}
          />
          <View style={styles.multilineInput}>
            <TextInput
              multiline
              placeholder="О себе"
              placeholderTextColor={'#F0A989'}
              style={{
                color: 'white',
              }}
            />
          </View>
          <TextInput
            placeholder="+7(915) 778-80-80"
            placeholderTextColor={'#F0A989'}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Ссылка на OPENSEA"
            placeholderTextColor={'#F0A989'}
            style={styles.input}
          />
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
    height: 48,
    paddingHorizontal: 18,
    paddingVertical: 18,
    fontFamily: 'Mulish-LightItalic',
    fontSize: 12,
    shadowColor: 'rgba(51, 16, 3, 0.32)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
    marginTop: 20,
    color: 'white',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
  multilineInput: {
    width: '100%',
    backgroundColor: 'rgba(215, 136, 112, 0.2)',
    borderRadius: 10,
    height: 120,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 2,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopColor: 'rgba(51, 16, 3, 0.32)',
    borderLeftColor: 'rgba(51, 16, 3, 0.32)',
  },
});
