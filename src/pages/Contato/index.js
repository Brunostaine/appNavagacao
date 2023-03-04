import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useRoute, useNavigation, StackActions } from '@react-navigation/native'

export default function Contato() {

 const navigate = useNavigation();

    function handleHome(){
        navigate.dispatch(StackActions.popToTop)
    }

    return (
        <View style={styles.container}>
            <Text>Contato</Text>
            <Button title='Voltar Home' onPress={handleHome} /> 
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