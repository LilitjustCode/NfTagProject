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
import ScopeIcon from '../../../assets/images/svg/post/Scope';

export default function App({navigation}) {
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/profilebackground.png')}
        style={styles.fixed}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(prevRoute.name);
            }}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Отправить жалобу</Text>
          <View style={styles.headersIconBlock}></View>
        </View>
        <ScrollView style={{flex: 1}}>
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
          <Button text="Отправить" />
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
    paddingHorizontal: 16,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  headerText: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
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
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  scopeIcon: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
});
