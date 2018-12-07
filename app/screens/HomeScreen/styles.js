import {StyleSheet,Dimensions, Platform } from "react-native";

const {height,width}= Dimensions.get("window");
const h = height/100;
const w = width/100;
const styles= StyleSheet.create({
    container:{
        flex:1,
        marginBottom:5*h
    },
    viewHead:{
        backgroundColor:"#7140FE",
        height:6*h,
        alignItems:"center",
        justifyContent:'center',
        elevation:1,
        marginBottom:6*h
    },
    textHead:{
        color:'#eae8e8',
        fontSize:5*w,
        fontWeight:'bold'
    },
    viewUser:{
        paddingLeft:8*w,
        
    },
    imageUser:{
        height:11*h,
        width:11*h,
        borderRadius:5.5*h,
        marginVertical:h,
    },
    textUser:{
        color:"#6F3FFB",
        fontSize:4*h,
        fontWeight:'bold'
    },
    textRequestNo:{
        color:'#383838',
        fontSize:2*h,
        padding:w,
        fontWeight:'500'
    },
    viewFlatListRequest:{
        paddingLeft:8*w,
    },
    flatList:{
        marginVertical:3*h,
        marginLeft:w,
        height:20*h,
    },
    textBlogTitle:{
        color:'#383838',
        fontSize:2*h,
        paddingLeft:9*w,
        marginTop:4*h,
        fontWeight:'500',
        marginBottom:h
    },
    viewFlatListBlog:{
        paddingLeft:8*w,
    },
    
});

export default styles;