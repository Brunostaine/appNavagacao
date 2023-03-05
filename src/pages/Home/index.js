import { View, Text, StyleSheet, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const navigation = useNavigation();

    function navagaSobre(){
        navigation.navigate('Sobre')
    }

    return (
        <View style={styles.container}>
            <Text>HOME</Text>
            <Button title='Ir para Sobre' onPress={ navagaSobre } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})