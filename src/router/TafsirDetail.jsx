import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';


const TafsirDetail = ({route}) => {
  const {TafsirNumber} = route.params;
  const [dataTafsirDetail, setTafsirDetail] = useState([]);

  const getData = async () =>{
    try{
      const respon =await fetch(`https://equran.id/api/v2/tafsir/${TafsirNumber}`);
      const dataJson = await respon.json();
      return setTafsirDetail(dataJson.data.tafsir);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() =>{
    getData();
  }, []);

  return (
    <ScrollView>
      {dataTafsirDetail &&
      dataTafsirDetail.map((item, i) => {
        return(
          <View
          key={i} style={{backgroundColor:'#A7E6FF', borderWidth:2, borderColor:'black'}}>
            <View style={{display:'flex', flexDirection:'column', padding:17}}>
              <View style={{flex:1}}>
              <Text style={{fontWeight:'bold', fontSize:25, textAlign:'center', borderWidth:1, borderColor:'black', marginBottom:7}}>{item.ayat}</Text>
              </View>
              <View style={{flex:1}}>
              <Text style={{color:'black', textAlign:'justify',fontSize:17}}>{item.teks}</Text>
              </View>
            </View>
          </View>
        );
      })
      }
      
    </ScrollView>
  );
};

export default TafsirDetail

const styles = StyleSheet.create({})