import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "sans-serif",
        "fontSize": 12
    },
    "li": {
        "listStyle": "none"
    },
    "h1": {
        "fontSize": 3
    },
    "h2": {
        "fontSize": 2.5
    },
    "h3": {
        "fontSize": 2
    },
    "h4": {
        "fontSize": 1.5
    },
    "input": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "borderRadius": 5,
        "textAlign": "center",
        "fontSize": 1.5
    }
});