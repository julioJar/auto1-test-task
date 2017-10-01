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
    "edition merchant_item_image": {
        "marginRight": 0
    },
    "merchant_item_info": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "maxWidth": "100%"
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
    "merchant_item_info__hasPremium": {
        "outline": "none",
        "WebkitAppearance": "none",
        "backgroundColor": "#fafafa",
        "border": "1px solid #cacece",
        "boxShadow": "0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05)",
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "borderRadius": 50,
        "display": "inline-block",
        "position": "relative"
    },
    "merchant_item_info__hasPremium:checked:after": {
        "content": "' '",
        "width": 12,
        "height": 12,
        "borderRadius": 50,
        "position": "absolute",
        "top": 3,
        "background": "#99a1a7",
        "boxShadow": "inset 0px 0px 10px rgba(0,0,0,0.3)",
        "textShadow": 0,
        "left": 3,
        "fontSize": 32
    },
    "merchant_item_info__hasPremium:checked": {
        "backgroundColor": "#e9ecee",
        "color": "#99a1a7",
        "border": "1px solid #adb8c0",
        "boxShadow": "0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1), inset 0px 0px 10px rgba(0,0,0,0.1)"
    },
    "merchant_item_info__hasPremium:active": {
        "boxShadow": "0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1)"
    },
    "merchant_item_info__hasPremium:checked:active": {
        "boxShadow": "0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1)"
    },
    "hasPremium": {
        "backgroundColor": "#FFFFFF",
        "background": "#FFFFFF -moz-linear-gradient(top, #fff1a4, #FFFFFF) no-repeat"
    }
});