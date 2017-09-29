import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0,
        "width": "100%",
        "borderRadius": 10,
        "boxShadow": "0 1px 3px rgba(0, 0, 0, 0.2)",
        "display": "table"
    },
    "row": {
        "display": "table-row",
        "background": "#f6f6f6"
    },
    "row:nth-of-type(odd)": {
        "background": "#e9e9e9"
    },
    "rowheader": {
        "fontWeight": "900",
        "color": "#ffffff",
        "background": "#ea6153"
    },
    "rowgreen": {
        "background": "#27ae60"
    },
    "rowblue": {
        "background": "#2980b9"
    },
    "cell": {
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "display": "table-cell"
    }
});