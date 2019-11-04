import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Profile extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="this is the jane's profile"
        onPress={() => navigate('Testing', { name: "gsdihdi" })}
      />
    );
  }
}

export default Profile;
