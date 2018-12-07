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
  viewContent: {
    paddingLeft: 5 * w,
    paddingTop: 5 * h
  },
  textTitle: {
    fontSize: 8 * w,
    fontWeight: "bold",
    color: "#7140FE"
  },
  viewCategoryTag: {
    flexDirection: "row",
    marginTop: 1.5 * h,
    marginBottom: 3.5 * h
  },
  viewCategory: {
    backgroundColor: "#000CFC",
    borderRadius: 5,
    paddingHorizontal: 1.5 * w,
    paddingVertical: 0.5 * h,
    marginRight: 2 * w,
    alignItems: "center",
    justifyContent: "center"
  },
  textCategory: {
    color: "#f1f1f1",
    fontSize: 3 * w
  },
  viewTag: {
    backgroundColor: "#F41686",
    paddingHorizontal: 1.5 * w,
    paddingVertical: 0.5 * h,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  textTag: {
    color: "#f1f1f1",
    fontSize: 3 * w
  },
  viewDescription: {
    marginRight: 5 * w,
    paddingBottom: 37 * h
  },
  textDescription: {
    color: "black",
    fontSize: 4.4 * w
  }
});

export default styles;
