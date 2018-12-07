import { connect } from 'react-redux';
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
const { height, width } = Dimensions.get("window");
const h = height / 100;
const w = width / 100;
import styles from "./styles";

export class ViewScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      category: "",
      tag: "",
      description: ""
    };
  }

  componentDidMount() {
    this.setState({
      title: title,
      category: category,
      tag: tag,
      description: description
    });
  }

  render() {
    const { navigation } = this.props;
    title = navigation.getParam("title");
    category = navigation.getParam("category");
    tag = navigation.getParam("tag");
    description = navigation.getParam("description");
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
        <View style={styles.viewContent}>
          <Text style={styles.textTitle}>{this.state.title}</Text>
          <View style={styles.viewCategoryTag}>
            <View style={styles.viewCategory}>
              <Text style={styles.textCategory}>{this.state.category}</Text>
            </View>
            <View style={styles.viewTag}>
              <Text style={styles.textTag}>{this.state.tag}</Text>
            </View>
          </View>
          <View style={styles.viewDescription}>
            <ScrollView>
              <Text style={styles.textDescription}>
                {this.state.description}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {

  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewScreen);