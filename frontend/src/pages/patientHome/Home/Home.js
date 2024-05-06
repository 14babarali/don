import  React , {Component} from 'react'
import Phy from '../Phy';
import Requestsform from '../Foam/Requestsform ';
import Delivery from '../Slider/Delivery';
import FAQs from '../FAQs/FAQs';
import Feather from '../Help/Feather';
import PrescriptionWork from '../PrescriptionWork';
import Feedback from '../Feedback';
import Benefits from '../Page/Benefits';
import Footer from '../Footer/Footer';
 import Common from '../Common';

import styl from'../styl.css'


// import Profile from './Profile';
// import Profiles from './profile/Profiles';
import Medlocate from '../Medlocate';

//import Asset from './Asset';
// import axios from 'axios';
// import 'golbal.css';

// import Dashboard from '../AdminPanel/Dashboard';
import OrderHistory from '../OrderHistory';
import PharmacyRequestForm from '../PharmacyRequestForm';
import Banner from '../Banner';
import '../common.css';
import Header from '../../../Header';
import Blog from '../Blog/Blog';
class Home extends Component{
    render(){
        return(
            <>

{/* <Dashboard/> */}
           
            {/* <Profiles/>
            <Profile></Profile> */}
      <Header></Header>
            <Common />
          

            <Requestsform></Requestsform>
    
   <Delivery></Delivery>
   {/* <Phy></Phy> */}
{/*   
  <Blog/> */}
            {/* <OrderHistory/> */}
   <PrescriptionWork></PrescriptionWork>
   <Benefits></Benefits>
   <Feather/>
   <Feedback></Feedback>
  
    <FAQs></FAQs> 
          {/* <PharmacyRequestForm></PharmacyRequestForm> */}

          {/* <Banner/> */}
          {/* <Medlocate/> */}
           <Footer/> 
       
  



          
          </>
          
        )
    }
}
export default Home;