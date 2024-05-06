import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box';
import ChatScreen from '../Screens/ChatScreen';
const Home = ({ navigation }) => {

  const images=[
    require('../../assets/images/me1.png'),
    require('../../assets/images/img2.jpg'),
    require('../../assets/images/img3.jpg'),
  ];
  return (
    <View  style={styles.MainContainer}>
      <View style={styles.MainHeader} >
       
         <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
         <Image 
        style={styles.mainProfileImage}
        source={require('../../assets/images/menu.png')} />
         </TouchableOpacity>
   
        <Image style={styles.headerImg} source={require('../../assets/images/medl.png')} />
      </View>
      <View style={styles.container}>
            <SliderBox images={images}  autoplay={true} dotColor='#3AAFA9'
             inactiveDotColor='#17252A' circleLoop={true} />     
       </View>
        <View style={styles.NotifyLogs}>
           <Text style={styles.txtNotification} >Notification</Text>
        </View>

        <View style={styles.NotifyList} >
                <ChatScreen/>
        </View>

       
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    width:"100%",
    height:200,
    backgroundColor:"#17252A",
},
txtLogo:{
  color:'white',
  fontSize:20,
  textAlign:'center',
  marginRight:100,
  marginTop:10,

},

  MainContainer:{
    flex:1,
    backgroundColor:"#3AAFA9",
    alignItems:'center',
},

MainHeader:{
  width:'100%',
  height:'14%',
  backgroundColor:"#17252A",
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:"center",
  elevation:3,
},

mainProfileImage:{
  width:30,
  height:30,
  marginTop:17,
  marginLeft:23,

},
NotifyLogs: {
  backgroundColor: '#3AAFA9',
  width:"100%",
  height:50,
  flexDirection:"row",
  alignItems:"center",
  textAlign:"center",
  color:'white'
},
txtNotification:
      {
        fontWeight: "bold",
        color:"white",
        fontSize:18,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        paddingLeft:130,
      },
      NotifyList:{
        flexDirection:"row",
        paddingLeft:2,
        paddingRight:2,
        paddingTop:1,
        flex:1,
      },

      headerImg:{
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginRight:160,
        marginTop:30,
      },

      screen:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
      },

})

export default Home