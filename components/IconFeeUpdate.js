import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={30}
            height={22}
            viewBox="0 0 30 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={25} y={8} width={5} height={9} rx={1} fill="#000" />
            <Rect
                x={2.56981}
                y={2.59717}
                width={13.4165}
                height={19.0518}
                rx={0.5}
                transform="rotate(-8.691 2.57 2.597)"
                fill="#fff"
                stroke="#000"
            />
            <Path
                d="M6.215 11.69l9.032-1.368M6.692 13.82l9.032-1.369M7.265 17.937l8.467-1.368"
                stroke="#000"
                strokeLinecap="round"
            />
            <Path
                d="M17.19 7.003c1.946-.065 4.16.884 7.81 2.812 0 .674-.347 4.404-.52 6.185l-8.592-.281c-1.175-.987-1.193-1.543 0-2.53 0 0 3.157-.107 3.905-.282.748-.174-2.151-2.38-2.343-2.249-.191.13-.26-3.655-.26-3.655z"
                fill="#fff"
                stroke="#000"
            />
            <Path d="M6.736 15.82l8.038-1.272" stroke="#000" strokeLinecap="round" />
            <Path
                d="M6.001 8.614L5.844 7.57a33.216 33.216 0 00-.162-.946c-.012-.058-.039-.093-.081-.105a.52.52 0 00-.212-.007l-.06.005-.023-.146c.15-.013.33-.036.544-.07.213-.033.38-.064.5-.09l.94-.154.054.036c-.002.022-.002.145.001.369.003.223.006.35.008.379l-.135.021a4.752 4.752 0 00-.166-.435.147.147 0 00-.068-.07 1.967 1.967 0 00-.44.033c-.195.03-.314.06-.359.085-.045.023-.064.063-.058.119l.133.942c.374-.059.698-.117.973-.174l.007.299-.072.011c-.1-.049-.32-.05-.66 0l-.221.034c.085.586.14.965.168 1.136.012.082.078.127.195.135a1.69 1.69 0 00.189-.01l.152-.011.021.134-1.272.201-.023-.146c.078-.018.138-.034.178-.048a.27.27 0 00.11-.07.13.13 0 00.039-.12L6 8.614zm1.97.324l-.024-.146a1.67 1.67 0 00.179-.048.27.27 0 00.11-.07.13.13 0 00.038-.12c-.043-.339-.101-.74-.175-1.203a28.467 28.467 0 00-.187-1.08c-.012-.058-.039-.093-.081-.105a.52.52 0 00-.212-.007l-.056.005-.023-.146c.144-.012.324-.035.54-.07.216-.034.383-.064.5-.091l1.038-.168.054.036a9.25 9.25 0 00.002.368c.003.223.006.35.008.38l-.135.02a4.757 4.757 0 00-.166-.435.147.147 0 00-.068-.07 2.15 2.15 0 00-.483.04c-.23.036-.366.067-.41.093-.046.024-.065.063-.059.119.017.143.062.457.133.943.371-.059.694-.117.969-.174l.007.299-.068.01c-.105-.053-.4-.041-.885.035.056.39.114.77.172 1.135.01.064.064.098.162.104.098.004.268-.014.51-.052.245-.039.385-.077.419-.115.057-.068.098-.24.125-.514l.022-.222.146-.023a24.38 24.38 0 00.11.922l-2.213.35zm2.526-.4l-.023-.146c.078-.018.138-.034.179-.048a.27.27 0 00.11-.07.13.13 0 00.038-.12c-.043-.339-.101-.74-.175-1.204a28.398 28.398 0 00-.187-1.08c-.011-.057-.039-.092-.081-.104a.52.52 0 00-.212-.007l-.056.005-.023-.146c.144-.012.324-.036.54-.07.216-.034.383-.064.5-.091l1.038-.168.055.035c-.002.022-.002.145.001.369.003.223.006.35.008.38l-.135.02a4.725 4.725 0 00-.166-.435.147.147 0 00-.068-.07 2.15 2.15 0 00-.483.04c-.23.036-.366.067-.41.093-.046.024-.065.063-.059.119.017.143.062.457.133.943.371-.06.694-.117.969-.174l.007.299-.067.01c-.106-.053-.401-.042-.886.035.056.39.114.77.172 1.135.01.064.064.098.162.104.098.004.268-.014.51-.052.245-.039.385-.077.42-.115.056-.068.098-.24.124-.514l.022-.222.146-.023a25.967 25.967 0 00.11.922l-2.213.35zm3.71-2.725l-.198-.41a.248.248 0 00-.08-.093c-.087-.057-.218-.07-.391-.043-.172.027-.296.077-.373.152-.077.074-.104.189-.08.344a.438.438 0 00.271.354c.033.017.072.034.118.05l.65.218c.342.113.538.333.59.66.022.14.023.252.001.34a1.235 1.235 0 01-.158.332c-.117.178-.33.292-.638.34-.245.04-.511.02-.799-.056a11.13 11.13 0 00-.099-.802l.147-.023.089.204c.06.137.101.225.126.264a.4.4 0 00.126.102c.143.036.296.042.456.016.16-.025.274-.074.341-.147.067-.075.087-.194.061-.358-.036-.226-.185-.385-.448-.475l-.345-.108a6.884 6.884 0 01-.33-.118.643.643 0 01-.133-.072l-.038-.03a.704.704 0 01-.274-.455.943.943 0 01.018-.452c.043-.12.145-.243.306-.369.115-.088.275-.148.477-.18a1.27 1.27 0 01.617.056l.054.036c.02.131.046.365.074.7l-.138.023z"
                fill="#000"
            />
        </Svg>
    )
}

export default SvgComponent
