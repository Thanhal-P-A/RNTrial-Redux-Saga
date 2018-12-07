import { connect } from 'react-redux';
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
const { height, width } = Dimensions.get("window");
const h = height / 100;
const w = width / 100;
import styles from "./styles";

export class BlogPostScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9i6svxoSoVoFT9y9x8XhIBCRkpQ3DMpIRQhXryaihoTASPzedg",
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    this.setState({
      image: image,
      title: title,
      content: content
    });
  }

  render() {
    const { navigation } = this.props;
    image = navigation.getParam("image");
    title = navigation.getParam("title");
    content = navigation.getParam("content");
    return (
      <View style={styles.container}>
        <View style={styles.viewHead}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={styles.viewBackButton}
          >
            <Icon
              name="ios-arrow-back"
              type="ionicon"
              size={4 * h}
              color="white"
            />
            <Text style={styles.textBack}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.textHead}>Article Name</Text>
        </View>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{ uri: this.state.image }}
        />
        <Text style={styles.textTitle}>{this.state.title}</Text>

        <View style={styles.viewDescription}>
          <ScrollView>
            <Text style={styles.textDescription}>{this.state.content}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostScreen);