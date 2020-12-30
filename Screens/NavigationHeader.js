/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React, { useState,Component } from "react";
//Import all required component
import { Header } from 'react-native-elements';

import { View, Image, TouchableOpacity ,Text,StyleSheet,TextInput, Button} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Hoverable, Pressable, } from 'react-native-web-hover'

import { DrawerActions } from "react-navigation-drawer"
import { render } from "react-dom";
export default class NavigationDrawerHeader  extends Component  {


  state={
    color:"#909090",
  textDecorationLine: '',
   textDecorationColor:'',
   color1:"#909090",
  textDecorationLine1: '',
   textDecorationColor1:'',
   color2:"#909090",
  textDecorationLine2: '',
   textDecorationColor2:'',
   color3:"#909090",
  textDecorationLine3: '',
   textDecorationColor3:'',
   color4:"#909090",
  textDecorationLine4: '',
   textDecorationColor4:'',
}
 

  
 
  
render(){
  
  //alert(this.state.hover)

 
  return (


    <View>
      <View style={{top:2650,
            fontSize: 20,
        margin: 0,
        
       

        position:"absolute"}}   >
      <TouchableOpacity  >
        <Text style={{fontWeight:'bold',color:this.state.color,textDecorationLine:this.state.textDecorationLine, textDecorationColor:this.state.textDecorationColor}} onMouseEnter={() => {
          this.setState({ color: '#0480C8' ,textDecorationLine: 'underline',textDecorationColor:'#FF9153'});
        }}onMouseLeave={() => {
          this.setState({ color: '#909090' ,textDecorationLine: '', textDecorationColor:''});
        }}>SHOP</Text>


      </TouchableOpacity>
      
</View>
<View style={{top:1397,
      color:"#0480C8",
      fontFamily:"Times New Roman",
        fontSize: 20,
        margin: 1250,
        position:"absolute"}}   >
      <TouchableOpacity  >
        
      <Icon name="shopping-cart"size={17} color="#000"  /> 
      </TouchableOpacity>
      
</View>
<View style={{top:2460,
 fontFamily:"Times New Roman",
    paddingTop:100,
    color:"#0480C8",
        fontSize: 20,
        margin: 90,}}>
      <TouchableOpacity  >
        <Text style={{fontWeight:'bold',color:this.state.color1,textDecorationLine:this.state.textDecorationLine1, textDecorationColor:this.state.textDecorationColor1}} onMouseEnter={() => {
          this.setState({ color1: '#0480C8' ,textDecorationLine1: 'underline',textDecorationColor1:'#FF9153'});
        }}onMouseLeave={() => {
          this.setState({ color1: '#909090' ,textDecorationLine1: '', textDecorationColor1:''});
        }}>BUSINESS</Text>
        

      </TouchableOpacity>
      
</View>

<View style={{bottom:-2100, 
        fontSize: 20,
        fontFamily:"Times New Roman",
        color:"#0480C8",
        margin: 250,}} >
      <TouchableOpacity  >
        <Text style={{fontWeight:'bold',color:this.state.color2,textDecorationLine:this.state.textDecorationLine2, textDecorationColor:this.state.textDecorationColor2}} onMouseEnter={() => {
          this.setState({ color2: '#0480C8' ,textDecorationLine2: 'underline',textDecorationColor2:'#FF9153'});
        }}onMouseLeave={() => {
          this.setState({ color2: '#909090' ,textDecorationLine2: '', textDecorationColor2:''});
        }}>SERVICES</Text>
        

      </TouchableOpacity>
      
</View>
<View  style={{top:830,
        fontSize: 20,
        fontFamily:"Times New Roman",
        color:"#0480C8",
        margin: 1000,}} >
      <TouchableOpacity  >
        <Text style={{fontWeight:'bold',color:this.state.color3,textDecorationLine:this.state.textDecorationLine3, textDecorationColor:this.state.textDecorationColor3}} onMouseEnter={() => {
          this.setState({ color3: '#0480C8' ,textDecorationLine3: 'underline',textDecorationColor3:'#FF9153'});
        }}onMouseLeave={() => {
          this.setState({ color3: '#909090' ,textDecorationLine3: '', textDecorationColor3:''});
        }}>TRACKORDER</Text>
        

      </TouchableOpacity>
      
</View>
<View style={{top:-1390,
        fontSize: 20,
        color:"#0480C8",
        fontFamily:"Times New Roman",
        margin: 1200,} }>
      <TouchableOpacity  >
        <Text style={{fontWeight:'bold',color:this.state.color4,textDecorationLine:this.state.textDecorationLine4, textDecorationColor:this.state.textDecorationColor4}} 
        onMouseEnter={() => {
          this.setState({ color4: '#0480C8' ,textDecorationLine4: 'underline',textDecorationColor4:'#FF9153'});
        }}onMouseLeave={() => {
          this.setState({ color4: '#909090' ,textDecorationLine4: '', textDecorationColor4:''});
        }}>LOGIN</Text>
   

      </TouchableOpacity>
      
</View>




    <View style={{ left:-900 ,right:200, paddingRight:600, paddingLeft:1250, top:-2610}} ><button style={{
      paddingRight:500,
      paddingLeft:0,
borderRadius: 35, 
borderWidth: 1,
borderColor: 'grey',
backgroundColor: "white",
}}><Icon name="search"size={15} color="#000"  />  search</button>
         </View>
         </View>
    
  );
}
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
    searchBar: {
        width: '95%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 3,
        marginBottom: 15,
        height: 50,
        color: '#000'
      },
      
})
