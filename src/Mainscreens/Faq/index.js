import React from "react";
import {View, Text, TouchableOpacity,StatusBar,ScrollView} from 'react-native';
import styles from './styles';
import  colors  from "../../Config/Colors";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Faq extends React.Component{
  state = {
    isRegisterVisible: false,
    isAdvanceVisible: false,
    isSeatVisible: false,
    isBookVisible: false,
    isTicketVisible: false,
    isPaymentVisible: false,
    isCancellationVisible: false
  }

    internetRegister = () =>{
      if(this.state.isRegisterVisible){
        this.setState({isRegisterVisible: false})
      }
      else{
        this.setState({isRegisterVisible: true})
      }
      
    }
    internetAdvance = () =>{
      if(this.state.isAdvanceVisible){
        this.setState({isAdvanceVisible: false})
      }
      else{
        this.setState({isAdvanceVisible: true})
      }
      
    }
    internetSeat = () =>{
      if(this.state.isSeatVisible){
        this.setState({isSeatVisible: false})
      }
      else{
        this.setState({isSeatVisible: true})
      }
      
    }
    
    internetBook = () =>{
      if(this.state.isBookVisible){
        this.setState({isBookVisible: false})
      }
      else{
        this.setState({isBookVisible: true})
      }
      
    }
    internetTicket = () =>{
      if(this.state.isTicketVisible){
        this.setState({isTicketVisible: false})
      }
      else{
        this.setState({isTicketVisible: true})
      }
      
    }
    
    internetPayment = () =>{
      if(this.state.isPaymentVisible){
        this.setState({isPaymentVisible: false})
      }
      else{
        this.setState({isPaymentVisible: true})
      }
      
    }
    
    internetCancellation = () =>{
      if(this.state.isCancellationVisible){
        this.setState({isCancellationVisible: false})
      }
      else{
        this.setState({isCancellationVisible: true})
      }
      
    }

    

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'FAQ',
        drawerLabel: 'FAQ',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerLeft: (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Icon name="md-menu"
              style={{ marginLeft: 10 }} size={30} color={colors.white} />
          </TouchableOpacity>
        ),
      })
    render(){
        return(
            <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity onPress={this.internetRegister}>
            <View style = {styles.dropdownview}>
            <View>
            <Text style={styles.txt}>How do I register myself for internet</Text>
            <Text style={styles.txt}>Booking?</Text>
            </View>
            <Icon name="md-arrow-dropdown"
              style={{ position: 'absolute',
              right:10,
              top: 9
              }} size={30} color={colors.blue} />
            </View>
            </TouchableOpacity>
            {
              this.state.isRegisterVisible ? <View style={styles.txtview}>
              <Text style={styles.txtcontent}>This advance booking facility is only available to Officers, at present. Soon, the facility would be made available to Sailors also. Until then the sailors (and Defence Civilians) shall follow the procedure as hitherto. Officers would be receiving an email from mail@lcahgoa.in with a default password and a link to the Rajhans website. (Officers are also requested to check, apart from their ‘Inbox’, their Junk / Spam mail for receipt of this mail). On clicking this link, they would be directed to the website, wherein they can update their mobile number, verify the number of dependents and also change their password.</Text>
              <View style={styles.line}></View>
              </View>:null
            }
            <TouchableOpacity onPress={this.internetAdvance}>
            <View style = {styles.dropdownview}>
            <View>
            <Text style={styles.txt}>Is there any other means of booking tickets</Text>
            <Text style={styles.txt}>in advance?</Text>
            </View>
            <Icon name="md-arrow-dropdown"
              style={{ position: 'absolute',
              right:10,
              top: 9
              }} size={30} color={colors.blue} />
            </View>
            </TouchableOpacity>
            {
              this.state.isAdvanceVisible ? <View style={styles.txtview}>
              <Text style={styles.txtcontent}>No, If you are unable to do Internet booking, you may purchase tickets under Current Booking, at the counter. Limited number of seats would be allotted at the LCAH Ticket Counter, commencing 30 minutes prior the show.</Text>
              <View style={styles.line}></View>
              </View>:null
            }
            <TouchableOpacity onPress={this.internetSeat}>
            <View style = {styles.dropdownview}>
            <View>
            <Text style={styles.txt}>How much in advance can the seats be</Text>
            <Text style={styles.txt}>booked?</Text>
            </View>
            <Icon name="md-arrow-dropdown"
              style={{ position: 'absolute',
              right:10,
              top: 9
              }} size={30} color={colors.blue} />
            </View>
            </TouchableOpacity>
            {
              this.state.isSeatVisible ? <View style={styles.txtview}>
              <Text style={styles.txtcontent}>Advance booking facility for any show would commence 48 hours prior to the day of show and would be available upto 1200h on the day of show. (This is because print-out of the bookings for the shows of any day is taken at 1200h by the Ticket Checker)</Text>
              <View style={styles.line}></View>
              </View>:null
            }
            <TouchableOpacity onPress={this.internetBook}>
            <View style = {styles.dropdownview}>
            <View>
            <Text style={styles.txt}>How many seats can I book in advance?</Text>
            </View>
            <Icon name="md-arrow-dropdown"
              style={{ position: 'absolute',
              right:10,
              top: 9
              }} size={30} color={colors.blue} />
            </View>
            </TouchableOpacity>
            {
              this.state.isBookVisible ? <View style={styles.txtview}>
              <Text style={styles.txtcontent}>The rules for number of seats that can be booked in advance are as follows:-

Peak Shows For the shows designated as 'Peak Shows', a maximum of only 4 seats can be booked.

Non-Peak Shows For 'Non-Peak Shows', a maximum of only 6 seats can be booked.

In all, user can only book a maximum of 6 seats per movie, For example, if you have booked 3 seats for a Peak show, you can only book 1 more seat in another Peak show or maximum of 3 more seats in a Non-peak show.</Text>
              <View style={styles.line}></View>
              </View>:null
            }
            <TouchableOpacity onPress={this.internetTicket}>
            <View style = {styles.dropdownview}>
            <View>
            <Text style={styles.txt}>Do I need to go the Ticket Counter if i</Text>
            <Text style={styles.txt}>have done advance booking?</Text>
            </View>
            <Icon name="md-arrow-dropdown"
              style={{ position: 'absolute',
              right:10,
              top: 9
              }} size={30} color={colors.blue} />
            </View>
            </TouchableOpacity>
            {
              this.state.isTicketVisible ? <View style={styles.txtview}>
              <Text style={styles.txtcontent}>You do not have to go to the Ticket Counter if you can show the SMS/Email of your Booking Confirmation or its print-out to the person at the entrance door of the Hall and no payment is due for any of the seats. However, please show your SMS/Email/print-out to the person at the door at least 15 minutes prior to commencement of show. This would help the limited staff at Rajhans to confirm that you have arrived at the venue, avoid crowding of people at the door at the last minute and frayed tempers. This will also help the staff to allot the seats to other waiting people (if any) in the event you do not show up.</Text>
              <View style={styles.line}></View>
              </View>:null
            }
            <TouchableOpacity onPress={this.internetPayment}>
            <View style = {styles.dropdownview}>
            <View>
            <Text style={styles.txt}>When is payment required to be done at the</Text>
            <Text style={styles.txt}>counter by the user?</Text>
            </View>
            <Icon name="md-arrow-dropdown"
              style={{ position: 'absolute',
              right:10,
              top: 9
              }} size={30} color={colors.blue} />
            </View>
            </TouchableOpacity>
            {
              this.state.isPaymentVisible ? <View style={styles.txtview}>
              <Text style={styles.txtcontent}>Payment is due to be paid at the counter in the following cases :-

a) When any seat is booked against the relationship 'Guest', payment is to be made for the number of Guests seats booked.

b) After 4 seats have already been booked (excluding against category 'Guest'), the subsequent seats would be charged (this is because the subscription caters to 4 members of a family only).</Text>
              <View style={styles.line}></View>
              </View>:null
            }
             <TouchableOpacity onPress={this.internetCancellation}>
            <View style = {styles.dropdownview}>
            <View>
            <Text style={styles.txt}>What are the rules of cancellation?</Text>
            </View>
            <Icon name="md-arrow-dropdown"
              style={{ position: 'absolute',
              right:10,
              top: 9
              }} size={30} color={colors.blue} />
            </View>
            </TouchableOpacity>
            {
              this.state.isCancellationVisible ? <View style={styles.txtview}>
              <Text style={styles.txtcontent}>a) Users can cancel their seats on-line only upto 1200h on the day of show. (This is because print-out of the bookings for the shows of any day is taken at 1200h by the Ticket Checker). Any cancellations thereafter have to be done at the Ticket window only.

b) In the event personnel who have booked their tickets in advance, have not recorded their presence to the ticket checker even up-till 10 minutes prior to the show, their seats are liable to be cancelled if there is demand for more tickets.

c) Cancelled seats would be 'refunded' into the 'account' of the user.</Text>
              <View style={styles.line}></View>
              </View>:null
            }
            </ScrollView>  
               <StatusBar hidden={true} />
            </View>
        )
    }
}