import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgComponent = ({ color = "#606773", isFill = false }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
        <Rect width={22.963} height={17.86} x={6} y={9.72} stroke={color} strokeWidth={2} rx={4} />
        <Path stroke={color} strokeLinecap="round" strokeWidth={2.133} d="M14.93 17.375h5.103" />
        <Path
            stroke={color}
            strokeWidth={2.133}
            d="M12.379 8.827v-1.16A2.667 2.667 0 0 1 15.046 5h4.872a2.667 2.667 0 0 1 2.667 2.667v1.16"
        />
    </Svg>
);
export default SvgComponent;
