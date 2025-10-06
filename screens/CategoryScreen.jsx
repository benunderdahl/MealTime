import { CATEGORIES } from "../data/dummy-data"
import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"


function CategoryScreen() {
    console.log(CategoryGridTile)
    return <FlatList data={CATEGORIES} renderItem={({item}) => <CategoryGridTile title={item.title} color={item.color}/>
    } keyExtractor={(item) => item.id} numColumns={2}/>
}

export default CategoryScreen