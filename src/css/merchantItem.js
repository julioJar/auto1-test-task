import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "merchant_item_wrapper": {
        "borderRadius": 10,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "backgroundColor": "#FFFFFF",
        "background": "#FFFFFF -moz-linear-gradient(top, #E2E3E5, #FFFFFF) no-repeat"
    },
    "merchant_item_wrapperedition": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "merchant_item": {
        "display": "flex",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "alignItems": "center",
        "flexWrap": "wrap"
    },
    "edition merchant_item": {
        "flexDirection": "column",
        "alignItems": "center"
    },
    "edition merchant_item_info": {
        "alignItems": "stretch"
    },
    "edition btn": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "merchant_item input": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "merchant_item_image": {
        "borderRadius": "50%",
        "maxWidth": 120,
        "maxHeight": 120,
        "marginRight": 20
    },
    "merchant_item_info": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start"
    },
    "merchant_item_info h3": {
        "fontSize": 2.5,
        "lineHeight": 1,
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "merchant_item_info merchant_item_info__name": {
        "fontSize": 2.5
    },
    "merchant_item btn": {
        "marginLeft": "auto"
    },
    "hasPremium": {
        "backgroundColor": "#FFFFFF",
        "background": "#FFFFFF -moz-linear-gradient(top, #fff1a4, #FFFFFF) no-repeat"
    }
});