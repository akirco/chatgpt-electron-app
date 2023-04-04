import { SVGProps } from 'react'

export function ChromeMinimize(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" d="M14 8v1H3V8h11z"></path>
    </svg>
  )
}

export function ChromeToggle(
  props: {
    action: 1 | 0
  } & SVGProps<SVGSVGElement>
) {
  if (props.action) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        {...props}
      >
        <g fill="currentColor">
          <path d="M3 5v9h9V5H3zm8 8H4V6h7v7z"></path>
          <path fillRule="evenodd" d="M5 5h1V4h7v7h-1v1h2V3H5v2z" clipRule="evenodd"></path>
        </g>
      </svg>
    )
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        {...props}
      >
        <path fill="currentColor" d="M3 3v10h10V3H3zm9 9H4V4h8v8z"></path>
      </svg>
    )
  }
}

export function ChromeClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.116 8l-4.558 4.558l.884.884L8 8.884l4.558 4.558l.884-.884L8.884 8l4.558-4.558l-.884-.884L8 7.116L3.442 2.558l-.884.884L7.116 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
