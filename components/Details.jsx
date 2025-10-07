import { View, Text, StyleSheet, Image } from 'react-native'
import { MEALS } from '../data/dummy-data'


function Details({ id }) {

    const mealDetails = MEALS.find(( item ) => item.id === id)
        
    return <View style={ styles.container }>
        <Image style={ styles.image } source={{ uri: mealDetails.imageUrl }}/>
        <Text style={ styles.title }>{ mealDetails.title }</Text>
        <View style={ styles.detailContainer }>
        <Text style={ styles.subtitle }>Ingredients</Text>
        <Text style={ styles.details }>{ mealDetails.ingredients }</Text>
        <Text style={ styles.subtitle }>Steps</Text>
        <Text style={ styles.details }>{ mealDetails.steps }</Text>
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
        alignItems: 'center',
    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        textDecorationLine: 'underline',
        marginTop: 24
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginTop: 12,
        marginBottom: 12,
        padding: 8
    },
    details: {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'center'
    },
    detailContainer: {
        margin: 0,
        width: '100%',
        padding: 15,
        alignItems: 'center'
    }
})