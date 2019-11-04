import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



class HomeScreen extends React.Component {
    
    render() {
      const {navigate} = this.props.navigation;
      return (
         <View>
         <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
          
        />
         </View> 
        
      );
    }
  }

  export default HomeScreen;