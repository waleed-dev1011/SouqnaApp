import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SearchSvg = props => (
  <Svg
    fill="#000000"
    width={18}
    height={18}
    viewBox="0 0 52 52"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M49.62,45.27,36.22,32a18.9,18.9,0,1,0-34.1-9.2A18.91,18.91,0,0,0,32,36.27l13.3,13.3a1.45,1.45,0,0,0,2.1,0l2.1-2.1A1.68,1.68,0,0,0,49.62,45.27Zm-28.7-11.5a12.9,12.9,0,1,1,12.9-12.9A12.87,12.87,0,0,1,20.92,33.77Z"
      fillRule="evenodd"
    />
  </Svg>
);
export default SearchSvg;
