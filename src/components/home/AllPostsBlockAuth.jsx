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
import React, {useState} from 'react';
import HomePost from './HomePost';

const data = [
  {
    id: 1,
    name: 'Levitation',
    backimage: require('../../../assets/images/png/home/post1.png'),
    userimage: require('../../../assets/images/png/home/userpic1.png'),
    desc: 'Living an adventure beyond time and space each piece has a unique story out of this world.',
  },
  {
    id: 2,
    name: 'Pro Property Maintenance',
    backimage: require('../../../assets/images/png/home/back2.png'),
    userimage: require('../../../assets/images/png/home/user2.png'),
    desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. ',
  },
  {
    id: 3,
    name: 'Pacific Stereo',
    backimage: require('../../../assets/images/png/home/back3.png'),
    userimage: require('../../../assets/images/png/home/user3.png'),
    desc: 'Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus eros, faucibus sit amet augue id, tempus pellentesque eros.',
  },
];

export default function App({navigation}) {
  const [activeOne, setActiveOne] = useState(true);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  const [activeFour, setActiveFour] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.parts}>
        <TouchableOpacity
          onPress={() => {
            setActiveOne(true);
            setActiveTwo(false);
            setActiveThree(false);
            setActiveFour(false);
          }}
          style={activeOne ? styles.btnactive : styles.btndisable}>
          <Text style={activeOne ? styles.activetext : styles.disabletext}>
            Новые
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveOne(false);
            setActiveTwo(true);
            setActiveThree(false);
            setActiveFour(false);
          }}
          style={activeTwo ? styles.btnactive : styles.btndisable}>
          <Text style={activeTwo ? styles.activetext : styles.disabletext}>
            Подписки
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveOne(false);
            setActiveTwo(false);
            setActiveThree(true);
            setActiveFour(false);
          }}
          style={activeThree ? styles.btnactive : styles.btndisable}>
          <Text style={activeThree ? styles.activetext : styles.disabletext}>
            Популярные
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveOne(false);
            setActiveTwo(false);
            setActiveThree(false);
            setActiveFour(true);
          }}
          style={activeFour ? styles.btnactive : styles.btndisable}>
          <Text style={activeFour ? styles.activetext : styles.disabletext}>
            Горячие
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.allPost}>
        {data.map((value, index) => {
          return (
            <HomePost
              key={index}
              back={value.backimage}
              userpic={value.userimage}
              name={value.name}
              desc={value.desc}
              navigation={navigation}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  parts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnactive: {
    backgroundColor: 'rgba(85, 31, 14, 0.5)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 17,
  },
  activetext: {
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
    color: 'white',
    fontSize: 12,
  },
  disabletext: {
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: '#F0A989',
  },
  btndisable: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 17,
  },
  postsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});
