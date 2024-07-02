import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <Path stroke="#fff" strokeLinecap="round" strokeWidth={2} d="m2.667 7.474 4.15 3.854a.008.008 0 0 0 .01 0L14 4" />
    </Svg>
);
export default SvgComponent;
