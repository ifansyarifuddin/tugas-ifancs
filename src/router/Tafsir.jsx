import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

const Tafsir = ({navigation}) => {
  const tafsirUrl = 'https://equran.id/api/v2/surat';
  const [tafsirData, setTafsirData] = useState([]);

  const getData = async () =>{
    try{
      const respon =await fetch(tafsirUrl);
      const dataJson = await respon.json();
      return setTafsirData(dataJson.data);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() =>{
    getData();
  }, []);

  return (
    <ScrollView style={{backgroundColor:'#A7E6FF'}}>
      {tafsirData &&
      tafsirData.map((item, i) => {
        return(
          <TouchableOpacity
          key={i} style={styles.tombol}
          onPress={() => 
            navigation.navigate('TafsirDetail', {TafsirNumber:item.nomor})
          }>
            <View style={{display:'flex', flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text style={styles.text}>{item.nomor}</Text>
              </View>

            <View style={{flex:1}}>
              <Text style={styles.text}>{item.namaLatin}</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={styles.text}>{item.nama}</Text>
              </View>

            </View>
          </TouchableOpacity>
        );
      })
      }
      
    </ScrollView>
  );
};

export default Tafsir

const styles = StyleSheet.create({
    tombol:{
        borderWidth:1,
        borderColor:'#219C90',
        padding:10
    },
    text:{
        color : 'black',
        fontSize:20
        
    }
})