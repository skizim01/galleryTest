import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchImgs} from '../store/imgSlice';
import HeaderCostom from './Header';

function ImageListScreen(props) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.imgReducer.imgData);
  const sucsess = useSelector(state => state.imgReducer.sucsess);
  const isLoading = useSelector(state => state.imgReducer.isLoading);
  const error = useSelector(state => state.imgReducer.error);

  useEffect(() => {
    dispatch(fetchImgs());
  }, []);

  const onClick = uri =>
    props.navigation.push('SinglImage', {
      url: uri,
    });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <HeaderCostom />
      {sucsess && !isLoading ? 

        <SafeAreaView>
          <ScrollView>
            <View style={style.imgContainer}>
              {data.map(item => (
                <TouchableOpacity
                  key={item.small}
                  onPress={() => onClick(item.largeImg)}
                  style={{height: 220, width: 185, marginHorizontal: 5}}>
                  <Image
                    source={{
                      uri: item.small,
                    }}
                    style={{height: 180, width: 185}}
                    resizeMode="contain"></Image>
                  <Text>{'Автор - ' + item.user}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      
      :
      
        <Text>{isLoading ? 'завантаження' : error}</Text>
      }
    </View>
  );
}

const style = StyleSheet.create({
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
});

export default ImageListScreen;
