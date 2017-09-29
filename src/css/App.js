import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "App": {
        "textAlign": "center",
        "fontFamily": "'Montserrat', sans-serif"
    },
    "App-logo": {
        "animation": "App-logo-appearance 1.6s ease-in",
        "height": 80,
        "background": "white",
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "borderRadius": 3
    },
    "App-header": {
        "backgroundColor": "#1B4691",
        "height": 150,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "white"
    },
    "App-intro": {
        "fontSize": "large"
    }
});