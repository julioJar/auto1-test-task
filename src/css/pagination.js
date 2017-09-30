import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "pagination": {
        "display": "flex",
        "justifyContent": "center",
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "borderRadius": 10
    },
    "pagination_number": {
        "border": "1px solid #e6e6e6",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "cursor": "pointer"
    },
    "pagination_numberactive": {
        "backgroundColor": "#69A551",
        "color": "white"
    }
});