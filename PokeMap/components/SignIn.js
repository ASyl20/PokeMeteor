import React from 'react';
import {View,Text,Image,Dimensions} from 'react-native';
import {Form,Item,Label,Input,Button} from 'native-base';

const myBackground = require('../assets/img/landing.jpg');

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class SignIn extends React.Component {

  state = {
    email: "",
    password: ""
  }

  logIn = () =>{
    var email = this.state.email;
    var password = this.state.password;

    this.props.signIn(email,password);
  }

  render(){
     return(
       <View style={{flex:1}}>
         <Image source={myBackground} style={styles.backgroundImage}>
           <View style={styles.inputStyle}>
             <Form>
               <Item floatingLabel>
                 <Label>Email</Label>
                 <Input
                  autoCorrect={false}
                  onChangeText={(email) => this.setState({email})}
                 />
               </Item>
               <Item floatingLabel>
                 <Label>Password</Label>
                 <Input
                  autoCorrect={false}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry
                 />
               </Item>
             </Form>
             <View style={{marginTop: 10}}>
               <Button
                 primary
                 block
                 onPress={this.logIn()}
                 >
                 <Text style={{color: 'white'}}>Sign In/Sign Up</Text>
               </Button>
             </View>
           </View>
         </Image>
       </View>
    )
  }
}


const styles = {
  backgroundImage:{
    flex:1,
    resizeMode: 'cover',
    height: height,
    width: width
  },
  inputStyle: {
    flex:1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center'
  }
}
