import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';



export default function App() {

  return (
    <View style={styles.container}>
      <Text>Playlists</Text>
      <List/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop : 100, 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appbar  : {
      fontSize : 30,
      color : 'blue'
  } , 

  text: {
    color: '#4f603c'
 }
});


class List extends React.Component {
    state = {
       playlists: [
          {
             id: 0,
             name: 'Workout',
             color : '#ffff00'
          },
          {
             id: 1,
             name: 'Peace',
             color : '#800080'
          },
          {
             id: 2,
             name: 'Stuff',
             color : '#004600'
          },
        
       ]
    }
    navigateToPlayListDetails = (item) => {
       //navigator code
    }
    render() {
       return (
          <View>
             { 
                this.state.playlists.map((item, index) => (
                   
                  

                      <TouchableOpacity
                      key = {item.id}
                      style = {styles.container}
                      onPress = {() => this.navigateToPlayListDetails(item)}>
                      <Text style = {styles.text}>
                         {item.name}
                      </Text>
                      </TouchableOpacity>


                )
              )
             }
          </View>
       )
    }
 }
 
 const listStyle = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 3,
       backgroundColor: '#d9f9b1',
       alignItems: 'center',
    },
    text: {
       color: '#4f603c'
    }
 })