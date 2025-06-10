import type { ComponentProps } from "react";

export function WhiteLogo({
	className,
}: Pick<ComponentProps<"svg">, "className">) {
	return (
		<svg
			width="512"
			height="512"
			viewBox="0 0 512 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={className}
		>
			<rect width="512" height="512" rx="256" fill="url(#paint0_linear_25_2)" />
			<circle cx="256" cy="256" r="241" fill="#F8FAFC" />
			<circle cx="256" cy="256" r="241" fill="url(#pattern0_25_2)" />
			<circle
				cx="256"
				cy="256"
				r="241"
				stroke="url(#paint1_linear_25_2)"
				strokeWidth="5"
			/>
			<path
				d="M81.864 346L147.4 164.24H193.48L259.016 346H218.568L205.256 307.344H135.368L122.056 346H81.864ZM146.376 275.344H194.504L170.44 205.2L146.376 275.344ZM276.194 346V164.24H355.81C369.122 164.24 380.642 166.459 390.37 170.896C400.098 175.333 407.607 181.648 412.898 189.84C418.359 197.861 421.09 207.419 421.09 218.512C421.09 229.605 418.103 238.992 412.13 246.672C406.327 254.352 398.647 259.643 389.09 262.544C407.01 265.104 416.738 275.515 418.274 293.776L422.882 346H383.202L379.874 299.92C379.362 292.923 377.143 287.803 373.218 284.56C369.463 281.147 362.978 279.44 353.762 279.44H315.106V346H276.194ZM315.106 246.928H351.458C360.845 246.928 368.098 244.795 373.218 240.528C378.509 236.091 381.154 229.861 381.154 221.84C381.154 213.648 378.509 207.504 373.218 203.408C367.927 199.141 360.247 197.008 350.178 197.008H315.106V246.928Z"
				fill="#0C0A09"
			/>
			<g filter="url(#filter0_i_25_2)">
				<circle
					cx="296.5"
					cy="328.5"
					r="12.5"
					transform="rotate(-90 296.5 328.5)"
					fill="#EF4444"
				/>
			</g>
			<g filter="url(#filter1_i_25_2)">
				<circle
					cx="296.5"
					cy="298.5"
					r="12.5"
					transform="rotate(-90 296.5 298.5)"
					fill="#FBBF24"
				/>
			</g>
			<g filter="url(#filter2_i_25_2)">
				<circle
					cx="296.5"
					cy="268.5"
					r="12.5"
					transform="rotate(-90 296.5 268.5)"
					fill="#4ADE80"
				/>
			</g>
			<defs>
				<pattern
					id="pattern0_25_2"
					patternContentUnits="objectBoundingBox"
					width="0.06639"
					height="0.06639"
				>
					<use xlinkHref="#image0_25_2" transform="scale(0.00103734)" />
				</pattern>
				<filter
					id="filter0_i_25_2"
					x="284"
					y="316"
					width="25"
					height="29"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect1_innerShadow_25_2"
					/>
				</filter>
				<filter
					id="filter1_i_25_2"
					x="284"
					y="286"
					width="25"
					height="29"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect1_innerShadow_25_2"
					/>
				</filter>
				<filter
					id="filter2_i_25_2"
					x="284"
					y="256"
					width="25"
					height="29"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect1_innerShadow_25_2"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_25_2"
					x1="512"
					y1="256"
					x2="0"
					y2="256"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#34D399" />
					<stop offset="1" stopColor="#0EA5E9" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_25_2"
					x1="497"
					y1="256"
					x2="15"
					y2="256"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#34D399" />
					<stop offset="1" stopColor="#0EA5E9" />
				</linearGradient>
				<image
					id="image0_25_2"
					width="64"
					height="64"
					preserveAspectRatio="none"
					xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgB7dUxDsIwDIVhv4CKxMrKBTrBaWDlIIwchJnTsPUCrKwIKqjBI4gqrCn/N8bJ4CdHNgMAAP9Kv1xqmmbW3W8bSXM3n8p11Lg61HV9tsJlA4jm/dFuo/H3h7poVO1KDyHlLjza6/qz+RBnMRVWuGwAGmnRW3t9CStcPgBLl77at8koTTYAV3fqqynpaIXLBpDSZP9tCuJMqg5WuJ/XoHu78s6X0XhMRQQzhDUIAAAAAAAAAAAAAAAAAAAAAACG5wmVJzsQ+RplHQAAAABJRU5ErkJggg=="
				/>
			</defs>
		</svg>
	);
}
