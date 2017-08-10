import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './components/SignIn';
import Meteor, {createContainer,Accounts} from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';

export default class App extends React.Component {

  componentWillMount(){
    Meteor.connect(SERVER_URL);
  }

  signIn = (email,password) =>{
    Meteor.loginWithPassword(email,password,(error,data)=>{
      if(error){
        if(error.reason === "Utilisateur non trouvé"){
          console.log('Nous n\'avons pas votre email');
          Accounts.createUser({emaill,password},(error)=>{
            console.log(error);
          })
        }
      }
      else{
        console.log('Email trouvé');
      }
    })
    console.log(Meteor.userId());
  }
  render() {
    return (
      <View style={styles.container}>
        <SignIn signIn={this.signIn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
