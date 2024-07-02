import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ color = "#06070A" }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15.436 5-6.873 7 6.873 7" />
    </Svg>
);
export default SvgComponent;
