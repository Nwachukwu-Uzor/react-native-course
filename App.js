import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentScreen from "./src/screens/ComponentScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    FlatList: FlatListScreen
  },
  {
    initialRouteName: "FlatList",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
