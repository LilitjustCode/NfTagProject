import React, {useState} from 'react';
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
import Button from '../../components/buttons/ButtonYellow';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

export default function App({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/png/enterance.png')}
        style={styles.fixed}>
        <Text style={styles.verifyText}>Введите код</Text>
        <Text style={styles.verifycodeText}>
          {' '}
          Код подтверждения отправлен на номер {'\n'}+7 (900) 111 22 33{' '}
        </Text>
        <ScrollView style={{flex: 1}}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <View style={styles.textBlock}>
            <Text style={styles.txtCode}>
              Запросить код повторно через 5 секунд
            </Text>
            <TouchableOpacity style={{marginTop: 15}}>
              <Text style={styles.txtCode}>Изменить номер</Text>
            </TouchableOpacity>
          </View>
          <Button
            onpress={() => navigation.navigate('MyProfileScreen')}
            text={'Далее'}
          />
          <TouchableOpacity style={styles.authbtn}>
            <Text style={styles.authbtnText}>Запросить код повторно</Text>
          </TouchableOpacity>
        </ScrollView>
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
  verifyText: {
    marginTop: '40%',
    fontSize: 42,
    color: '#FFFFFF',
    fontFamily: 'Mulish-LightItalic',
    lineHeight: 49,
    textTransform: 'uppercase',
  },
  verifycodeText: {
    marginTop: 20,
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
    lineHeight: 18,
  },
  codeFieldRoot: {
    marginTop: 40,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#FFD0A1',
    borderBottomWidth: 1,
  },
  cellText: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Mulish-LightItalic',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  textBlock: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  txtCode: {
    color: '#F0A989',
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    textAlign: 'center',
  },
  authbtn: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#FFD0A1',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  authbtnText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Mulish-Regular',
  },
});
