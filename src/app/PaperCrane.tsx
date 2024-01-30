import * as React from "react";
import { SVGProps } from "react";

export default function PaperCrane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="1em"
      height="1em"
      viewBox="0 0 682.667 682.667"
      {...props}
    >
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 512h512V0H0Z" />
        </clipPath>
        <clipPath id="b" clipPathUnits="userSpaceOnUse">
          <path d="M0 512h512V0H0Z" />
        </clipPath>
      </defs>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={30}
        clipPath="url(#a)"
        transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
      >
        <path
          d="M0 0h162.023L81.012 81.012Z"
          style={{
            strokeWidth: 30,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(15 342.97)"
        />
        <path
          d="m0 0 286.421 286.421-157.531 71.604-243.458-243.457"
          style={{
            strokeWidth: 30,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(210.58 36)"
        />
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={30}
        d="m0 0 136.707-136.706"
        style={{
          strokeWidth: 30,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="matrix(1.33333 0 0 -1.33333 128.016 117.357)"
      />
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={30}
        clipPath="url(#b)"
        transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
      >
        <path
          d="M0 0h-273.416l-114.567 114.569v192.402"
          style={{
            strokeWidth: 30,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(483.995 36)"
        />
        <path
          d="m0 0 136.708-136.708"
          style={{
            strokeWidth: 30,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(347.287 172.708)"
        />
        <path
          d="m0 0 56.357 56.357-157.531 71.606-147.737-147.736"
          style={{
            strokeWidth: 30,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(440.643 348.037)"
        />
      </g>
    </svg>
  );
}
