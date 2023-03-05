import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {


    return (
        <View style={styles.container}>
            <Text>SOBRE</Text>
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