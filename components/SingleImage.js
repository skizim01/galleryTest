import React from 'react';
import {Image, SafeAreaView, View, Dimensions} from 'react-native';

const SingleImageScreen = ({route}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {url} = route.params;

  return (
    <SafeAreaView>
      <View style={{justifyContent:'flex-start'}}>
      <Image
    style={{width:windowWidth , height: windowHeight}}
    source={{uri: url}}
    resizeMode='contain'
  />
     </View>
    </SafeAreaView>
  );
};

export default SingleImageScreen;
