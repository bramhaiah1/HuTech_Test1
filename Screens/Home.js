import React from "react";
import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/AntDesign";

import {
  SafeAreaView, View, Text,TouchableOpacity, StyleSheet, ScrollView,Image,FlatList
} from "react-native";

import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function App1() {
    
    
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      
           <Text style={styles.Text1}>Wearable Technology</Text>
      <View style={{top:-200,backgroundColor:"green"}}>
        <Text style={styles.Text2}>Refine</Text>
      </View>
      <View>
      <Text style={styles.Text3}>Departments</Text>
      <View  >
      <Text style={styles.Text4}>Fitness watches Monitors</Text>

      </View>
      <View  >
      <Text style={styles.Text5}>Ceel phone warches</Text>

      </View>
      <View  >
      <Text style={styles.Text6}>Ellipitical warchw</Text>

      </View>
     
     
      
      
     
    </View>    </View>

<FlatList 
 data={[{img: require("../assets/download.jpg"),Description: 'smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...',stock: "Out of Stock",color:'grey'},
{img:require("../assets/download1.jpg"),sign:"dollar-sign",top:"top rated",oldprice:"200",newprice:"150",color:"green",ship:'Free shipping',Description: 'smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...',stock: 'Buy'},
{img:require("../assets/download 4.jpg"),qty:'1',minussign:"minuscircle",plussign:"pluscircle",oldprice:"200",newprice:"150",top:"top rated",Description:'Waterproof Apple Watch Case Series 4 & 5 40mm, ShellBox IP68...'},
{img:require("../assets/images.jpg"),Description: 'smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...',stock: "Out of Stock",color:'grey'},
{img:require("../assets/download3.jpg"),stock:"Buy",sign:"dollar-sign",top:"top rated",oldprice:"200",newprice:"150",color:"green",ship:'Free shipping',Description: 'smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...'},
{img:require("../assets/image.jpg"),sign:"dollar-sign",top:"top rated",oldprice:"200",newprice:"150",color:"green",ship:'Free shipping',Description: 'smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...',stock: 'Buy'},]} 
  numColumns={3}
  renderItem={({ item }) => <Card style={{shadowColor: "#000000",
  alignItems:"center",
  justifyContent:'space-between',

  shadowOpacity: 0.8,
  shadowRadius: 5,
  paddingBottom:5,
  width:200,
  height:320,
  top:10,
  flexWrap: 'wrap',

  shadowOffset: {
    height: 2,
    

    width: 10
  }}}>
      <Image
            source={item.img}
            style={{
              height: 180,
              width: 160
            }}
          />
                       <TouchableOpacity style={{ right:0,    alignItems: 'center', bottom:177,width:60,paddingRight:2,backgroundColor:"#00ACEC"
}}><Text style={{color:"white"}} >{item.top}</Text></TouchableOpacity>
    <Text style={{width:200 }}>{item.Description}</Text>
    <TouchableOpacity onPress={() =>{}}>
  <Text style={{color:"#00acec"}}> {item.ship}</Text>
  
</TouchableOpacity  >
<Text style={{color:"#909090",fontWeight:"bold",textDecorationLine: 'line-through'}}><FontAwesome5 name={item.sign}  size={15} color="#909090" style={{ Bottom: 55, }} />{item.oldprice}</Text>
<TouchableOpacity style={{ bottom:20, alignItems:'flex-end'}}>
<Text style={{color:"black",fontWeight:"bold"}}><FontAwesome5 name={item.sign}  size={15} color="black" style={{ Bottom: 55, }} />
{item.newprice}</Text>
</TouchableOpacity>
    <TouchableOpacity style={{right:"0",top:-30,alignItems: 'center'}} onPress={() =>{}}>
  
  <Text style={{right:"60"}}> <Icon
                        name={item.minussign}
                        size={20}
                        color="gray"
                      /><Button style={{color:"grey",}}>{item.qty}</Button><Icon
                      name={item.plussign}
                      size={20}
                      color="gray"
                    /></Text>
   </TouchableOpacity>
   <TouchableOpacity style={{   top:-48, alignItems: 'center',width:90,left:50, paddingRight:2,backgroundColor:item.color
}}><Text style={{color:"white"}} >{item.stock}</Text></TouchableOpacity>

  
</Card>
}

/> 

</View>

  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1:{
    fontSize:25,
    fontWeight: "bold",
    top:-200,
    left:20,
    //position:"absolute"
  },
  Text2:{
    fontSize:20,
    backgroundColor:"#00c853",
    width:220,
    bottom:150,
    height:35,
    right:400,
    color:"white",
    textAlign:"center",
    position:"absolute"
  },
  inputContainer:{
    marginTop:40
  },
  Text3:{
    fontSize:17,
    fontWeight: "bold",
    width:220,
    bottom:90,
    height:35,
    right:240,
   
    left:-600,
    position:"absolute"

  },
  Text4:{
    bottom:80,
    width:200,
    right:400,
    position:"absolute"
  },
  Text5:{
    bottom:60,
    width:200,
    right:400,
    position:"absolute"
  },
  Text6:{
    bottom:40,
    width:200,
    right:400,
    position:"absolute"
  },
  lineStyle:{
    borderWidth: 0.9,
    borderColor:'black',
    margin:10,
}
,
  container: {
    flex: 1,
    flexDirection:'row',
    
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:'space-between'
  },
  container1: {
    
    top:-300,
    backgroundColor: '#fff',
    alignItems:"flex-start",
  },
 
});
