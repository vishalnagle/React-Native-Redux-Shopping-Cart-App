import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from './redux/action/Actions';

const ThemeScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();

  const themeState = useSelector(state => state);

  function changeThemeFun(theme: boolean) {
    if (theme) {
      dispatch(changeTheme(false));
    } else {
      dispatch(changeTheme(true));
    }
  }

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: themeState.ThemeReducers ? 'red' : 'blue',
      }}>
      <TouchableOpacity
        onPress={() => {
          changeThemeFun(themeState.ThemeReducers);
        }}
        style={{
          height: '8%',
          width: '80%',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e9e9f0',
        }}>
        <Text>Change Theme </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeScreen;
