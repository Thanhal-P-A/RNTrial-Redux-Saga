import React from "react";
import {Text,View,Image} from "react-native";
import {styles} from "./styles";

export default class BlogCard extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                 <Image style={styles.imageBlog} source={{uri:this.props.image}}/>
          
                <Text style={styles.textName}>
                    {this.props.name}
                </Text>
                <Text style={styles.textSubtitle}>
                    {this.props.subtitle}
                </Text>
            </View>
        );
    }
}