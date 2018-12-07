import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import RequestCard from "../../components/requestCard";
import BlogCard from "../../components/blogCard";
import styles from "./styles";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }


  onPressRequestCard(title, category, tag, description) {
    this.props.navigation.navigate("ViewScreen", {
      title,
      category,
      tag,
      description
    });
  }

  onPressBlogCard(image, title, content) {
    this.props.navigation.navigate("BlogPostScreen", { image, title, content });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHead}>
          <Text style={styles.textHead}>Franklin{"&"}</Text>
        </View>
        <View style={styles.viewUser}>
          <Image
            style={styles.imageUser}
            source={{
              uri: this.props.avatar
            }}
          />
          <Text style={styles.textUser}>
            Hi {this.props.first_name},
          </Text>
          <Text style={styles.textRequestNo}>
            You have
            {" "+this.props.tasks.length+" "}
            requests to catch up on today.
          </Text>
        </View>
        <View style={styles.viewFlatListRequest}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
            data={this.props.tasks}
            extraData={this.props}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.onPressRequestCard(
                      item.name,
                      item.tags[0],
                      item.tags[1],
                      item.description
                    )
                  }
                >
                  <RequestCard
                    name={item.name}
                    subtitle={item.subtitle}
                    description={item.description}
                    tags={item.tags}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
        <Text style={styles.textBlogTitle}>
          Here are some blog posts you may like to read.
        </Text>
        <View style={styles.viewFlatListBlog}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
            data={this.props.post}
            extraData={this.props}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.onPressBlogCard(item.image, item.name, item.content)
                  }
                >
                  <BlogCard
                    name={item.name}
                    subtitle={item.subtitle}
                    content={item.content}
                    image={item.image}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    );
  }
}
