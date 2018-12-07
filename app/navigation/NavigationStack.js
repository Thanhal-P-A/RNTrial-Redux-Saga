import { createStackNavigator } from "react-navigation";
import HomeScreenContainer from "../screens/HomeScreen/HomeScreenContainer";
import ViewScreen from "../screens/viewScreen/container";
import BlogPostScreen from "../screens/blogPostScreen/container";

const RNApp = createStackNavigator(
  {
    ViewScreen: {
      screen: ViewScreen,
      navigationOptions: { header: null }
    },
    BlogPostScreen: {
      screen: BlogPostScreen,
      navigationOptions: { header: null }
    },
    Home: {
      screen: HomeScreenContainer,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default RNApp;
