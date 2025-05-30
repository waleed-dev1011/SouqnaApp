import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SettingSVG = props => (
  <Svg
    width="23px"
    height="23px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000000"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="miter"
    {...props}>
    <Circle cx={12} cy={12} r={3} />
    <Path d="M19.74,14H22V10H19.74l0-.14a8.17,8.17,0,0,0-.82-1.92l1.6-1.6L17.66,3.51l-1.6,1.6A8,8,0,0,0,14,4.25V2H10V4.25a8,8,0,0,0-2.06.86l-1.6-1.6L3.51,6.34l1.6,1.6a8.17,8.17,0,0,0-.82,1.92l0,.14H2v4H4.26l0,.14a8.17,8.17,0,0,0,.82,1.92l-1.6,1.6,2.83,2.83,1.6-1.6a8,8,0,0,0,2.06.86V22h4V19.75a8,8,0,0,0,2.06-.86l1.6,1.6,2.83-2.83-1.6-1.6a8.17,8.17,0,0,0,.82-1.92Z" />
  </Svg>
);
export default SettingSVG;
