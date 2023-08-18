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
import PostsBlock from './PostBlock';
import FavPostBlock from './FavPostBlock';

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

export default function App({}) {
  const [activeOne, setActiveOne] = useState(true);
  const [activeTwo, setActiveTwo] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.parts}>
        <TouchableOpacity
          onPress={() => {
            setActiveOne(true);
            setActiveTwo(false);
          }}
          style={activeOne ? styles.btnactive : styles.btndisable}>
          <Text style={activeOne ? styles.activetext : styles.disabletext}>
            Мои проекты
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveOne(false);
            setActiveTwo(true);
          }}
          style={activeTwo ? styles.btnactive : styles.btndisable}>
          <Text style={activeTwo ? styles.activetext : styles.disabletext}>
            Избранное
          </Text>
        </TouchableOpacity>
      </View>
      {activeOne ? (
        <View style={styles.postsBlock}>
          {data.map((value, index) => {
            return (
              <PostsBlock
                key={index}
                name={value.name}
                img={value.img}
                author={value.author}
              />
            );
          })}
        </View>
      ) : (
        ''
      )}
      {activeTwo ? (
        <View style={styles.postsBlock}>
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
      ) : (
        ''
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
  },
  parts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnactive: {
    backgroundColor: 'rgba(85, 31, 14, 0.5)',
    width: '50%',
    height: 42,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
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
    width: '50%',
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  postsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
    paddingBottom: 100,
  },
});
