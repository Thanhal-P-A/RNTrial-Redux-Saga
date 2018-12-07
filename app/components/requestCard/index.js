import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class RequestCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHead}>
          <Text style={styles.textName}>{this.props.name}</Text>
          <Text style={styles.textSubtitle}>{this.props.subtitle}</Text>
        </View>
        <View style={styles.viewCategoryTag}>
          <View style={styles.viewCategory}>
            <Text style={styles.textCategory}>{this.props.tags[0]}</Text>
          </View>
          <View style={styles.viewTag}>
            <Text style={styles.textTag}>{this.props.tags[1]}</Text>
          </View>
        </View>
      </View>
    );
  }
}
