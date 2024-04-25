import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={24}
            height={22}
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_281_880)">
                <Path
                    fill="#fff"
                    d="M3.09668 10.4762H19.354779999999998V18.28265H3.09668z"
                />
                <Path
                    d="M18.667 18.333H4V4.89h8.813l1.334-1.222H4c-.354 0-.693.128-.943.358-.25.229-.39.54-.39.864v13.444c0 .324.14.635.39.865.25.229.59.357.943.357h14.667c.353 0 .692-.128.943-.357.25-.23.39-.54.39-.865V9.167l-1.333 1.222v7.944z"
                    fill="#000"
                />
                <Path
                    d="M22.353 3.569l-2.246-2.06a1.084 1.084 0 00-.349-.214 1.158 1.158 0 00-.823 0c-.13.05-.249.123-.348.214l-9.14 8.428-.74 2.94a.904.904 0 00.01.43c.037.141.109.273.209.386.1.112.226.203.37.266.142.063.299.096.457.097.082.008.165.008.247 0l3.233-.654 9.12-8.44c.1-.091.18-.2.234-.32a.914.914 0 000-.754.982.982 0 00-.234-.32zM12.54 12.27l-2.44.495.567-2.218 6.88-6.35 1.88 1.724-6.887 6.35zm7.64-7.04L18.3 3.508l1.033-.966 1.894 1.736-1.047.953z"
                    fill="#000"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_281_880">
                    <Path fill="#fff" d="M0 0H24V22H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent