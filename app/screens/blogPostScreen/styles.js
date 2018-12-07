import { StyleSheet, Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get("window");
const h = height / 100;
const w = width / 100;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewHead: {
    height: 6 * h,
    backgroundColor: "#7140FE",
    paddingLeft: 2 * w,
    justifyContent: "center"
  },
  viewBackButton: {
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  textBack: {
    alignSelf: "center",
    color: "white",
    fontSize: 2.3 * h,
    fontWeight: "bold",
    paddingLeft: 2 * w
  },
  textHead: {
    color: "white",
    fontSize: 2.4 * h,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center"
  },
  image:{
    height:35*h,
    width:"100%",
    marginBottom:2*h
  },
  textTitle: {
    fontSize: 7 * w,
    fontWeight: "bold",
    color: "white",
    position:'absolute',
    marginTop:35*h,
    marginLeft:2*w
  },
  viewDescription: {
    paddingLeft: 3 * w,
    marginRight: 3 * w,
    paddingBottom: 44 * h
  },
  textDescription: {
    color: "black",
    fontSize: 4 * w
  }
});

export default styles;
