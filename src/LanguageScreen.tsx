import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { languageChange } from './redux/action/Actions';

const LanguageScreen = ({navigation}: {navigation: any}) => { 

    const namesArray = [
        { english: 'John', hindi: 'जॉन' },
        { english: 'Mary', hindi: 'मेरी' },
        { english: 'David', hindi: 'डेविड' },
        { english: 'Samantha', hindi: 'समंथा' },
        { english: 'Daniel', hindi: 'डैनियल' },
        { english: 'Priya', hindi: 'प्रिया' },
        { english: 'Michael', hindi: 'माइकल' },
        { english: 'Sara', hindi: 'सारा' },
        { english: 'Rahul', hindi: 'राहुल' },
        { english: 'Emily', hindi: 'एमिली' }
      ];

      const lang = useSelector(state  => state.LanguageReducer)
      const dispatch = useDispatch(); 
      function changeTheme({langProp} : {langProp: string}) {
        if(langProp == 'ENGLISH'){
            dispatch(languageChange('HINDI'));
        }else{
            dispatch(languageChange('ENGLISH'));
        }
      }

    const renderItem = ({ item  }: { item: { english: string; hindi: string } }) => (
        <View  style={{ marginBottom: 20 }}>
          <Text>{lang == 'ENGLISH'? item.english : item.hindi}</Text>
        </View>
      ) ;

    return <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>

        <TouchableOpacity onPress={() => {changeTheme(lang) }} style={{height: 30}}> 
        <Text>Change Language </Text>
        </TouchableOpacity>
       
        <FlatList 
         data={namesArray}
         renderItem={renderItem}
        />

    </View>
}

export default LanguageScreen;
