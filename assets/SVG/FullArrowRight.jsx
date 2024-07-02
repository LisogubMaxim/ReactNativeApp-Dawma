import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ color = "#fff" }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12.5h17M12.636 5 20 12.5 12.636 20"
        />
    </Svg>
);
export default SvgComponent;
