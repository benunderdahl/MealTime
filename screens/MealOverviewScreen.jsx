import { MEALS } from "../data/dummy-data"
import { View, Text, StyleSheet } from "react-native"


function MealOverviewScreen() {
    return <View style={styles.container}>
        <Text>Meal Time</Text>
    </View>
}
export default MealOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16
    }
})