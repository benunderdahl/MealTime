import { View, Text, Pressable, Image, StyleSheet } from "react-native"
import { Platform } from "react-native"

function MealItem({ title, imageUrl, complexity, affordability, duration }) {
    return <View style={ styles.container }>
        <Pressable android_ripple={{ color: '#ccc' }}
            style={({ pressed }) =>  pressed ? styles.buttonPressed : null}>
            <View style={ styles.innerContainer }>
                <Image source={{ uri: imageUrl }} style={ styles.image } />
                <Text style={ styles.title }>{ title }</Text>
            </View>
            <View style={ styles.info }>
                <Text style={ styles.infoText }>{ duration } minutes</Text>
                <Text style={ styles.infoText }>{ complexity }</Text>
                <Text style={ styles.infoText }>{ affordability }</Text>
            </View>
        </Pressable>
    </View>
}

export default MealItem


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    container: {
        flex: 1,
        marginBottom: 24,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    info: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
    
    },
    infoText: {
        fontSize: 12,
        fontWeight: 'bold',

    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    }
})