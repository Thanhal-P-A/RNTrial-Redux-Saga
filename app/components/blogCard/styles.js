import {StyleSheet,Dimensions} from "react-native";

const {height,width}= Dimensions.get("window");
const h = height/100;
const w = width/100;

export const styles= StyleSheet.create({
    container:{
        height:18.5*h,
        width: 35*w,
        backgroundColor:"white",
        marginRight:5*w,
        borderRadius:6,
        elevation:4,
    },
    imageBlog:{
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        height:10*h,
        width:"100%",
        marginBottom:1.5*h
    },
    textName:{
        paddingLeft:4*w,
        fontSize:3.5*w,
        color:'black',
        fontWeight:'bold',
        marginBottom:.5*h
    },
    textSubtitle:{
        paddingLeft:4*w,
        fontSize:3*w
    }
});