import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
function SvgComponent(props) {
    return (
        <Svg
            width={'100%'}
            height={'100%'}
            viewBox="0 0 87 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <Path fill="url(#pattern0)" d="M0 0H87V73H0z" />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#image0_207_439"
                        transform="matrix(.00036 0 0 .00043 -.248 -.092)"
                    />
                </Pattern>
                <Image
                    id="image0_207_439"
                    width={4096}
                    height={2731}
                />
            </Defs>
        </Svg>
    )
}
export default SvgComponent