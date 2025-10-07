import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen({ navigation }) {
  function renderCategoryScreen(itemData) {
    function pressHandler() {
      navigation.navigate("Meal", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  console.log(CategoryGridTile);

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryScreen}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
