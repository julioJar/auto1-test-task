import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "btn": {
        "display": "block",
        "width": 180,
        "height": 50,
        "fontSize": 16,
        "color": "#fff",
        "borderRadius": 5,
        "cursor": "pointer",
        "border": "none",
        "textAlign": "center",
        "lineHeight": 50,
        "textDecoration": "none",
        "fontWeight": "bold"
    },
    "btnedit": {
        "backgroundColor": "#1B4691"
    },
    "btnsave": {
        "backgroundColor": "#69A551",
        "boxShadow": "0px 3px 0px #3D8C72"
    },
    "btndelete": {
        "backgroundColor": "#ea6153"
    },
    "btnreset": {
        "backgroundColor": "#ea6153"
    }
});