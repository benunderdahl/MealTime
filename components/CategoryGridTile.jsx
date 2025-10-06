import { View, Pressable, Text, StyleSheet, Platform } from "react-native"

function CategoryGridTile({title, color, onPress}) {
    return <View style={styles.outerView}>
        <Pressable android_ripple={{color: '#ccc'}} 
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null ]}
        onPress={onPress}
        >
            <View style={[styles.innerView, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
      flex: 1  
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerView: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default CategoryGridTile