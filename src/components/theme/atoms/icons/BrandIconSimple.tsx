import React from "react";
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg";

export default function (props: any) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 176 51"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Defs>
        <Path id="a" d="M0 0H176V51H0z" />
      </Defs>
      <G stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <Mask id="b" fill="#fff">
          <Use xlinkHref="#a" />
        </Mask>
        <Path
          d="M1.464 1.75c20.7 14.51 45.124 18.137 73.274 10.882 28.149-7.255 52.058-10.383 71.728-9.384"
          stroke="#FCE703"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <Path
          d="M1.464 16.25c20.46 14.51 44.6 18.137 72.422 10.882 27.822-7.255 51.454-10.383 70.895-9.384 6.887.46 12.046 1.115 15.478 1.966 3.431.852 8.012 2.614 13.741 5.286"
          stroke="#FCE703"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <Path
          d="M1.464 24.75c20.46 14.51 44.6 18.137 72.422 10.882 27.822-7.255 51.454-10.383 70.895-9.384 6.887.46 12.046 1.115 15.478 1.966 3.431.852 8.012 2.614 13.741 5.286M101.024 39.122c10.744-1.937 25.082-3.062 43.013-3.374 6.774.46 11.848 1.115 15.222 1.966 3.375.852 7.88 2.614 13.515 5.286M1.464 34.25c23.16 10.707 41.673 15.394 55.541 14.062M74.471 19.882c24.262-6.365 45.318-9.554 63.168-9.565 1.662-.001 4.093.06 7.292.181 6.845.46 11.973 1.115 15.383 1.966 3.41.852 7.963 2.614 13.657 5.286M1.695 8.492c5.141 3.673 9.168 6.235 12.079 7.687 5.556 2.771 12.85 5.165 16.727 6.116"
          stroke="#FCE703"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
}
