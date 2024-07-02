import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <Path
            stroke="#FA8A34"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18"
        />
        <Path
            stroke="#FA8A34"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 20.758c2.071 0 3.75-3.921 3.75-8.758S14.071 3.24 12 3.24c-2.071 0-3.75 3.922-3.75 8.759s1.679 8.758 3.75 8.758Z"
        />
    </Svg>
);
export default SvgComponent;
