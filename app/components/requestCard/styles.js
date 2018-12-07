import {StyleSheet,Dimensions} from "react-native";

const {height,width}= Dimensions.get("window");
const h = height/100;
const w = width/100;

const styles= StyleSheet.create({
    container:{
        height:18.5*h,
        width: 35*w,
        backgroundColor:"white",
        marginTop:h,
        marginRight:5*w,
        borderRadius:6,
        paddingLeft:4*w,
        paddingTop:2*h,
        elevation:4,
        justifyContent:'space-between'
    },
    viewHead:{

    },
    textName:{
        fontSize:3.5*w,
        color:'black',
        fontWeight:'bold'
    },
    textSubtitle:{
        marginTop:h,
        fontSize:3*w
    },
    viewCategoryTag:{
        flexDirection:'row',
        marginBottom: 2*h
    },
    viewCategory:{
        backgroundColor:"#000CFC",
        borderRadius:5,
        paddingHorizontal:1.5*w,
        paddingVertical:.5*h,
        marginRight:2*w,
        alignItems:'center',
        justifyContent:"center"
    },
    textCategory:{
        color:"#f1f1f1",
        fontSize:3*w
    },
    viewTag:{
        backgroundColor:"#F41686",
        paddingHorizontal:1.5*w,
        paddingVertical:.5*h,
        borderRadius:5,
        alignItems:'center',
        justifyContent:"center"
    },
    textTag:{
        color:"#f1f1f1",
        fontSize:3*w
    }
});

export default styles;