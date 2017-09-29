import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "merchant_item": {
        "display": "flex"
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
    }
});