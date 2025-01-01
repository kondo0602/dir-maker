import type { SVGProps } from "react";

// Copyright 2020 Vjacheslav Trushkin
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// https://github.com/cyberalien/line-md
// original component name was LineMdConfirm

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<title>checkIcon</title>
			<a href="#check-icon-animation">
				<path
					fill="none"
					stroke="#FFF"
					strokeDasharray="24"
					strokeDashoffset="24"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M5 11l6 6l10 -10"
				>
					<animate
						id="check-icon-animation"
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.4s"
						values="24;24;24;0"
						begin="check-icon-animation.begin"
					/>
				</path>
			</a>
		</svg>
	);
}
