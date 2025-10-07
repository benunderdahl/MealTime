import { View, Text, StyleSheet, Image } from 'react-native'
import { MEALS } from '../data/dummy-data'


function Details({ id }) {

    const mealDetails = MEALS.find(( item ) => item.id === id)
        
    return <View style={ styles.container }>
        <Image style={ styles.image } source={{ uri: mealDetails.imageUrl }}/>
        <Text style={ styles.title }>{ mealDetails.title }</Text>
        <View style={ styles.details }>
        <Text style={ styles.subtitle }>Ingredients</Text>
        </View>
    </View>
}

export default Details


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
        height: 450,
        justifyContent: "center",
        alignItems: 'center'
    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16
    },
    image: {
        flex: 1,
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginTop: 12,
        marginBottom: 12,
        padding: 8
    },
    details: {
        flex: 1,
        marginTop: 16,
        fontSize: 12
    }
})