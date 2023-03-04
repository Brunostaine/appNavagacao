import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IconFeather from 'react-native-vector-icons/Feather'

export default function App(){
  return (
    <View style={styles.container}>
      <Text>Sujeito programador</Text>
      <Icon
        name="home"
        size={30}
        color="#121212"
      />

      <Icon 
        name="user"
        size={30}
        color="#54a300"
      />

      <IconFeather 
        name="gift"
        size={30}
        color="#7665ff"
      />

      <TouchableOpacity style={styles.btnYoutube}>
        <Icon
          name="youtube"
          size={30}
          color="#FFF"
        />
        <Text style={styles.btnText}>Acessar Canal</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnYoutube: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF0000'
  },
  btnText: {
    marginLeft: 10,
    color: '#FFF'
  }
})