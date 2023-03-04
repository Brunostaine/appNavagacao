import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

export default function Sobre() {

    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <Text>SOBRE</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button title='TELA contato' onPress={() => navigation.navigate('Contato')} />
            <Button title='Voltar uma tela' onPress={() => navigation.goBack() } />
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