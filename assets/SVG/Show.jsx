import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ color = "#00A36D" }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M12 6.249c-6.429 0-9 5.786-9 5.786s2.571 5.785 9 5.785 9-5.785 9-5.785-2.571-5.786-9-5.786Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M12 15.25a3.214 3.214 0 1 0 0-6.429 3.214 3.214 0 0 0 0 6.429Z"
        />
    </Svg>
);
export default SvgComponent;
