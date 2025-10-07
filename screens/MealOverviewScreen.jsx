import { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"
import { View, StyleSheet, FlatList } from "react-native"


function MealOverviewScreen( {route, navigation }) {
    const id = route.params.categoryId
    const displayMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(id) >= 0
    })

    useLayoutEffect(() => {
        const title = CATEGORIES.find((item) => item.id == id).title
        navigation.setOptions({ title: title })
    }, [id, navigation])

    
    function renderMealItem({ item }) {
        const mealProps = {
             id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration 
        }
        return <MealItem { ...mealProps }
       
        />
    }
    return <View style={styles.container}>
        <FlatList data={displayMeals} keyExtractor={(item) => item.id}
        renderItem={renderMealItem} 
        />
    </View>
}
export default MealOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16
    }
})