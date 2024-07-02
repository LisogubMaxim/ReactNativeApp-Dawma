import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ color = "#009E81" }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.564 19 6.873-7-6.873-7" />
    </Svg>
);
export default SvgComponent;
