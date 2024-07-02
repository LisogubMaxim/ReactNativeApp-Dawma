import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <Ellipse
            cx={11.665}
            cy={11.461}
            stroke="#606773"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.641}
            rx={7.665}
            ry={7.669}
        />
        <Path stroke="#606773" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.641} d="m16.995 17.193 3.005 3" />
    </Svg>
);
export default SvgComponent;
