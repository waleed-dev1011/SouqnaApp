import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FashionSVG = props => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="#FFFFFF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      clipRule="evenodd"
      d="M17 11C17 9.89543 17.8954 9 19 9H21V4H15.874C15.4299 5.72523 13.8638 7 12 7C10.1362 7 8.57006 5.72523 8.12602 4H3V9H5C6.10457 9 7 9.89543 7 11V20H17V11ZM2 11C1.44772 11 1 10.5523 1 10V4C1 2.89543 1.89543 2 3 2H9.5C9.77614 2 10 2.22386 10 2.5V3C10 4.10457 10.8954 5 12 5C13.1046 5 14 4.10457 14 3V2.5C14 2.22386 14.2239 2 14.5 2H21C22.1046 2 23 2.89543 23 4V10C23 10.5523 22.5523 11 22 11H19V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V11H2Z"
      fill="#000000"
      fillRule="evenodd"
    />
  </Svg>
);
export default FashionSVG;
