import React from 'react'

const LogoBlack = (props) => {
  return (
    <svg
      width={100}
      height={100}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#a)" d="M0 0h100v100H0z" />
      <defs>
        <pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#b" transform="scale(.00024)" />
        </pattern>
        <image
          id="b"
          width={4096}
          height={4096}
        />
      </defs>
    </svg>
  );
}

export default LogoBlack