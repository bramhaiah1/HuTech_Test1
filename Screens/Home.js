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


        <Card style={{shadowColor: "#000000",
        
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
              source={require("../assets/download.jpg")}
              style={{
                height: 180,
                width: 160
              }}
            />
                  
      <Text style={{width:200 }}>smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...</Text>
      <TouchableOpacity style={{   top:30, alignItems: 'center',width:90,left:50, paddingRight:2,backgroundColor:"#909090"
}}><Text style={{color:"white"}} >Out of stock</Text></TouchableOpacity>
  </Card>
  <Card style={{shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    width:200,
    height:330,
    shadowOffset: {
      height: 3,
      

      width: 1
    }}}>
        <Image
              source={require("../assets/download1.jpg")}
              style={{
                height: 180,
                width: 160
              }}
            />
            
                     <TouchableOpacity style={{ right:0,    alignItems: 'center', bottom:177,width:60,paddingRight:2,backgroundColor:"#00ACEC"
}}><Text style={{color:"white"}} >top rated</Text></TouchableOpacity>

      <Text style={{width:200 }}>smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...</Text>
<TouchableOpacity onPress={() =>{}}>
  <Text style={{color:"#00acec"}}> Free shipping</Text>
  
</TouchableOpacity  >
<Text style={{color:"#909090",fontWeight:"bold",textDecorationLine: 'line-through'}}><FontAwesome5 name="dollar-sign"  size={15} color="#909090" style={{ Bottom: 55, }} />
250.98</Text>
<TouchableOpacity style={{ bottom:20, alignItems:'flex-end'}}>
<Text style={{color:"black",fontWeight:"bold"}}><FontAwesome5 name="dollar-sign"  size={15} color="black" style={{ Bottom: 55, }} />
200.28</Text>
</TouchableOpacity>
      <TouchableOpacity style={{    alignItems: 'center', bottom:15, width:60,left:60, paddingRight:2,backgroundColor:"green"
}}><Text style={{color:"white"}} >BUY</Text></TouchableOpacity>
  </Card>
  <Card style={{shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    width:200,
    height:330,
    shadowOffset: {
      height: 3,
      

      width: 1
    }}}>
        <Image
              source={require("../assets/download 4.jpg")}
              style={{
                height: 180,
                width: 160
              }}
            />
                     <TouchableOpacity style={{ right:0,    alignItems: 'center', bottom:177,width:60,paddingRight:2,backgroundColor:"#00ACEC"
}}><Text style={{color:"white"}} >top rated</Text></TouchableOpacity>

      <Text style={{width:200 }}>Waterproof Apple Watch Case Series 4 & 5 40mm, ShellBox IP68...</Text>
      <TouchableOpacity style={{bottom:-19}}>
      <Text style={{color:"#909090",fontWeight:"bold",textDecorationLine: 'line-through'}}><FontAwesome5 name="dollar-sign"  size={15} color="#909090" style={{ Bottom: 55, }} />
250.98</Text>
<TouchableOpacity style={{ bottom:20, alignItems:'flex-end'}}>
<Text style={{color:"black",fontWeight:"bold"}}><FontAwesome5 name="dollar-sign"  size={15} color="black" style={{ Bottom: 55, }} />
200.28</Text>
</TouchableOpacity>
</TouchableOpacity>
<TouchableOpacity style={{right:"0",alignItems: 'center'}} onPress={() =>{}}>
  
<Text style={{right:"60"}}> <Icon
                      name="minuscircle"
                      size={20}
                      color="gray"
                    /><Button style={{color:"grey",shadowOffset: {
      height: 1,
      

      width: 1
    }}}>1</Button><Icon
                    name="pluscircle"
                    size={20}
                    color="gray"
                  /></Text>
 </TouchableOpacity>
  </Card>
     
  
  
  <Card style={{shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    width:200,
    height:330,
    shadowOffset: {
      height: 3,
      

      width: 1
    }}}>
          <Image
                source={require("../assets/download3.jpg")}
                style={{
                  height: 180,
                  width: 160
                }}
              />
                       <TouchableOpacity style={{ right:0,    alignItems: 'center', bottom:177,width:60,paddingRight:2,backgroundColor:"#00ACEC"
  }}><Text style={{color:"white"}} >top rated</Text></TouchableOpacity>
  
        <Text style={{width:200 }}>smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...</Text>
  <TouchableOpacity onPress={() =>{}}>
    <Text style={{color:"#00acec"}}> Free shipping</Text>
  </TouchableOpacity>
  <Text style={{color:"#909090",fontWeight:"bold",textDecorationLine: 'line-through'}}><FontAwesome5 name="dollar-sign"  size={15} color="#909090" style={{ Bottom: 55, }} />
  280.98</Text>
  <TouchableOpacity style={{ bottom:20, alignItems:'flex-end'}}>
<Text style={{color:"black",fontWeight:"bold"}}><FontAwesome5 name="dollar-sign"  size={15} color="black" style={{ Bottom: 55, }} />
212.28</Text>
</TouchableOpacity>
        <TouchableOpacity style={{    alignItems: 'center', bottom:15,width:60,left:60, paddingRight:2,backgroundColor:"green"
  }}><Text style={{color:"white"}} >BUY</Text></TouchableOpacity>
    </Card>
    <Card style={{shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    width:200,
    height:330,
    shadowOffset: {
      height: 3,
      

      width: 1
    }}}>
          <Image
                source={require("../assets/image.jpg")}
                style={{
                  height: 180,
                  width: 160
                }}
              />
                       <TouchableOpacity style={{ right:0,    alignItems: 'center', bottom:177,width:60,paddingRight:2,backgroundColor:"#00ACEC"
  }}><Text style={{color:"white"}} >top rated</Text></TouchableOpacity>
  
        <Text style={{width:200 }}>smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...</Text>
  <TouchableOpacity onPress={() =>{}}>
    <Text style={{color:"#00acec"}}> Free shipping</Text>
  </TouchableOpacity>
  <Text style={{color:"#909090",fontWeight:"bold",textDecorationLine: 'line-through'}}><FontAwesome5 name="dollar-sign"  size={15} color="#909090" style={{ Bottom: 55, }} />
  350.58</Text>
  <TouchableOpacity style={{ bottom:20, alignItems:'flex-end'}}>
<Text style={{color:"black",fontWeight:"bold"}}><FontAwesome5 name="dollar-sign"  size={15} color="black" style={{ Bottom: 55, }} />
280.18</Text>
</TouchableOpacity>
        <TouchableOpacity style={{    alignItems: 'center', bottom:15, width:60,left:60, paddingRight:2,backgroundColor:"green"
  }}><Text style={{color:"white"}} >BUY</Text></TouchableOpacity>
    </Card>
    <Card style={{shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    width:200,
    height:330,
    shadowOffset: {
      height: 3,
      

      width: 1
    }}}>
          <Image
                source={require("../assets/images.jpg")}
                style={{
                  height: 180,
                  width: 160
                }}
              />
                       <TouchableOpacity style={{ right:0,    alignItems: 'center', bottom:177,width:60,paddingRight:2,backgroundColor:"#00ACEC"
  }}><Text style={{color:"white"}} >top rated</Text></TouchableOpacity>
  
        <Text style={{width:200 }}>smart-watch sweatproof smart watchphone/blutooth 4.0/Easy connection/for Apple Ipone...</Text>
        <TouchableOpacity style={{   top:30, alignItems: 'center',width:90,left:50, paddingRight:2,backgroundColor:"#909090"
}}><Text style={{color:"white"}} >Out of stock</Text></TouchableOpacity>
   </Card>
   <View style={styles.container1}>
     <Text>hi</Text>
   </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:'space-between'
  },
  container1: {
    
    
    backgroundColor: '#fff',
    alignItems:"flex-start",
  },
 
});
