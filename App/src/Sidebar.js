import { View, Text,StyleSheet ,Image, Touchable, TouchableOpacity} from 'react-native'

import { FlatList } from 'react-native-gesture-handler'
import DeliverMedicine from './Screens/Pharmacy/DeliverMedicine'

const Sidebar = ({navigation}) => {

  const Signout = (icon) => {
    navigation.navigate('Login');
  };
  const Profile = (icon) => {
    navigation.navigate('Profile');
  };
  const DeliverMedicine = (icon) => {
    navigation.navigate('DelivMed');
  };

  return (
    <View style={styles.SidebarContainer}>
      <View style={styles.SidebarList}></View>
      <Image style={styles.SidebarUserImg} source={require('../assets/images/me1.png')} />
      
      <Text style={styles.SidebarUsertxt}>Fahad Amanat</Text>
      <View style={{marginTop:50, width:"100%"}}>
        
            {/* For profile  */}
            <TouchableOpacity style={{width:'100%', height:50,flexDirection:'row', gap:20 , alignItems:"center"}} onPress={()=>{
              navigation.closeDrawer();
              Profile()
              
            }} >
               <Image source={require('../assets/images/profile.png')} style={{marginLeft:15,width:34,height:34}}/>
                <Text style={{color:'#3AAFA9', padding:10, fontSize:17}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'100%', height:50,flexDirection:'row', gap:20 , alignItems:"center"}} onPress={()=>{
              navigation.closeDrawer();
              DeliverMedicine()
              
            }} >
               <Image source={require('../assets/images/move.png')} style={{marginLeft:15,width:34,height:34}}/>
                <Text style={{color:'#3AAFA9', padding:10, fontSize:17}}>Deliver Medicine</Text>
            </TouchableOpacity>

            {/* For Signout  */}
            <TouchableOpacity style={{width:'100%', height:50,flexDirection:'row', gap:20 , alignItems:"center"}} onPress={()=>{
              navigation.closeDrawer();
              Signout()
            }} >
               <Image source={require('../assets/images/logout.png')} style={{marginLeft:15,width:34,height:34}} />
                <Text style={{color:'#3AAFA9', padding:10, fontSize:17}}>Signout</Text>
            </TouchableOpacity>
  
         

       
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    SidebarContainer:{
        
        backgroundColor:"#17252A",
        height:200,
              
    },

    SidebarList:{
      marginTop:30,
       width:"50%",
       height:5,
       backgroundColor:"#3AAFA9",
        alignSelf:"center",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    SidebarUserImg:{
      width:80,
      height:80,
      alignSelf:"center",
      marginTop:10,
      borderRadius:50,
    },
    SidebarUsertxt:{
      color:'#3AAFA9',
      fontSize:24,
      alignSelf:'center',
      marginTop:20,
    },
})

export default Sidebar