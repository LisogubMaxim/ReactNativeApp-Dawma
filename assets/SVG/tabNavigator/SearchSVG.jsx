import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ color = "#606773" }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
        <Path
            fill={color}
            fillRule="evenodd"
            d="M6 15.266a9.367 9.367 0 1 1 18.733 0 9.367 9.367 0 0 1-18.733 0ZM15.367 3.9C9.089 3.9 4 8.989 4 15.266c0 6.278 5.089 11.367 11.367 11.367 2.779 0 5.325-.997 7.3-2.653l3.656 3.656a1 1 0 0 0 1.414-1.414l-3.656-3.657a11.321 11.321 0 0 0 2.652-7.299C26.733 8.99 21.644 3.9 15.367 3.9Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default SvgComponent;
