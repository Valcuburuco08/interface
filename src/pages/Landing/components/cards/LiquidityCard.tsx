import styled from 'styled-components'

import { CodeBrackets } from '../Icons'
import { PillButton } from './PillButton'
import ValuePropCard from './ValuePropCard'

type LiquidityCardProps = {
  isDarkMode?: boolean
  tagText?: string
}

const primary = '#A457FF'

export function LiquidityCard(props: LiquidityCardProps) {
  return (
    <ValuePropCard
      tagText="Provide Liquidity"
      href="https://app.uniswap.org/pools"
      height="320px"
      isDarkMode={props.isDarkMode}
      textColor={primary}
      backgroundColor={{ dark: 'rgba(164, 87, 255, 0.15)', light: 'rgba(164, 87, 255, 0.15)' }}
      button={<PillButton color={primary} label="Liquidity" icon={<CodeBrackets size="24px" fill={primary} />} />}
      titleText="Provide liquidity to pools on the Uniswap protocol and earn fees on swaps."
      paddingRight="15%"
    >
      <Contents>
        <Svg />
      </Contents>
    </ValuePropCard>
  )
}

const Contents = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 1;
  @media (max-width: 768px) {
    opacity: 0;
  }
`

function Svg() {
  return (
    <svg width="auto" height="100%" viewBox="0 0 223 302" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_2402_3661)">
        <circle cx="32.2148" cy="15.8867" r="10" fill="#A457FF" fillOpacity="0.3" />
      </g>
      <g filter="url(#filter1_f_2402_3661)">
        <circle cx="217" cy="176.035" r="10" fill="#A457FF" fillOpacity="0.3" />
      </g>
      <rect x="65.0381" y="39.8867" width="113.304" height="113.304" rx="24" fill="#A457FF" fillOpacity="0.2" />
      <circle cx="171.615" cy="39.8867" r="26" fill="#F5EEFF" stroke="#F5EEFF" strokeWidth="4" />
      <path
        d="M171.615 15.8867C158.36 15.8867 147.615 26.6315 147.615 39.8867C147.615 53.1419 158.36 63.8867 171.615 63.8867C184.87 63.8867 195.615 53.1419 195.615 39.8867C195.615 26.6315 184.87 15.8867 171.615 15.8867ZM180.087 38.7588C179.737 39.1092 179.276 39.2867 178.815 39.2867C178.354 39.2867 177.894 39.1116 177.543 38.7588L173.415 34.6309V49.4867C173.415 50.4803 172.609 51.2867 171.615 51.2867C170.622 51.2867 169.815 50.4803 169.815 49.4867V34.6332L165.687 38.7611C164.984 39.4643 163.844 39.4643 163.141 38.7611C162.438 38.0579 162.438 36.9178 163.141 36.2146L170.341 29.0146C170.506 28.849 170.705 28.7174 170.926 28.6262C171.365 28.4438 171.862 28.4438 172.301 28.6262C172.522 28.7174 172.722 28.849 172.887 29.0146L180.087 36.2146C180.791 36.9178 180.791 38.0556 180.087 38.7588Z"
        fill="#A457FF"
      />
      <path
        d="M64.9282 85.082C83.8109 85.082 99.0088 69.8841 99.0088 51.0015C99.0088 32.1188 83.8109 16.9209 64.9282 16.9209C46.0456 16.9209 30.8477 32.1188 30.8477 51.0015C30.8477 69.8841 46.0456 85.082 64.9282 85.082Z"
        fill="#A457FF"
        stroke="#F5EEFF"
        strokeWidth="4"
      />
      <path
        d="M73.7504 56.0809C73.7504 51.4026 70.9434 49.7985 65.3293 49.1303C61.3192 48.5955 60.5172 47.5263 60.5172 45.6547C60.5172 43.7831 61.854 42.5804 64.5272 42.5804C66.9333 42.5804 68.2701 43.3824 68.9383 45.3875C69.0721 45.7885 69.4731 46.0557 69.8741 46.0557H72.0126C72.5474 46.0557 72.9484 45.6547 72.9484 45.1202V44.9865C72.4136 42.0456 70.0076 39.7734 66.9333 39.5061V36.2981C66.9333 35.7633 66.5323 35.3623 65.864 35.2285H63.859C63.3242 35.2285 62.9232 35.6295 62.7894 36.2981V39.3724C58.7794 39.9071 56.2399 42.5804 56.2399 45.9223C56.2399 50.3333 58.9131 52.0708 64.5272 52.7394C68.2701 53.4076 69.4731 54.2096 69.4731 56.3484C69.4731 58.4872 67.6015 59.9575 65.062 59.9575C61.5864 59.9575 60.3834 58.4869 59.9824 56.4819C59.8489 55.9474 59.4479 55.6799 59.0469 55.6799H56.7743C56.2399 55.6799 55.8389 56.0809 55.8389 56.6157V56.7494C56.3733 60.091 58.5121 62.497 62.9232 63.1656V66.3736C62.9232 66.9081 63.3242 67.3091 63.9925 67.4429H65.9975C66.5323 67.4429 66.9333 67.0419 67.0671 66.3736V63.1656C71.0771 62.497 73.7504 59.6899 73.7504 56.0809V56.0809Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.2149 44.4511C42.3383 54.7438 47.6851 66.373 58.1113 70.1155C58.5123 70.3831 58.9133 70.9175 58.9133 71.3186V73.1901C58.9133 73.4574 58.9133 73.5911 58.7795 73.7246C58.6461 74.2594 58.1113 74.5266 57.5765 74.2594C50.0912 71.8533 44.3433 66.1055 41.9372 58.6201C37.9272 45.9217 44.8781 32.4209 57.5765 28.4108C57.7103 28.2773 57.9775 28.2773 58.1113 28.2773C58.6461 28.4108 58.9133 28.8118 58.9133 29.3466V31.2178C58.9133 31.8864 58.6461 32.2874 58.1113 32.5546C52.631 34.5597 48.2199 38.837 46.2149 44.4511ZM71.0771 28.9453C71.2106 28.4105 71.7454 28.1433 72.2802 28.4105C79.6317 30.8165 85.5134 36.5644 87.9194 44.1835C91.9295 56.882 84.9786 70.3828 72.2802 74.3929C72.1464 74.5263 71.8792 74.5263 71.7454 74.5263C71.2106 74.3928 70.9434 73.9918 70.9434 73.4571V71.5858C70.9434 70.9172 71.2106 70.5162 71.7454 70.249C77.2257 68.244 81.6368 63.9667 83.6418 58.3526C87.5184 48.0598 82.1716 36.4306 71.7454 32.6881C71.3444 32.4206 70.9434 31.8861 70.9434 31.3513V29.4801C70.9434 29.2125 70.9434 29.0791 71.0771 28.9453Z"
        fill="white"
      />
      <path
        d="M58.0902 28.332C48.5312 31.3283 41.5879 40.3442 41.5879 51.001C41.5879 61.6577 48.5312 70.6736 58.0902 73.6699M71.9869 73.6699C81.5459 70.6736 88.4892 61.6577 88.4892 51.001C88.4892 40.3442 81.5459 31.3283 71.9869 28.332"
        stroke="#F5EEFF"
        strokeWidth="2.26047"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="135.615" y="120.599" width="68.1608" height="68.1608" rx="34.0804" fill="#F5EEFF" />
      <circle cx="170.012" cy="154.563" r="32.313" fill="#A457FF" />
      <path
        d="M169.912 165.27L156.512 157.471L169.904 176.088L183.311 157.471L169.904 165.27H169.912ZM170.111 133.039L156.716 154.962L170.111 162.774L183.512 154.971L170.111 133.039Z"
        fill="#F5EEFF"
      />
      <rect x="135.615" y="120.599" width="68.1608" height="68.1608" rx="34.0804" stroke="#F5EEFF" strokeWidth="4" />
      <g filter="url(#filter2_f_2402_3661)">
        <circle cx="37.6351" cy="224.116" r="32.0804" fill="#A457FF" fillOpacity="0.3" />
        <path
          d="M26.5331 232.556C24.5959 232.556 23.0097 232.101 21.7746 231.191C20.5525 230.268 19.9414 228.942 19.9414 227.238C19.9414 226.874 19.9804 226.445 20.0584 225.925C20.2664 224.755 20.5655 223.351 20.9555 221.7C22.0606 217.227 24.9209 214.991 29.5234 214.991C30.7715 214.991 31.9026 215.199 32.8907 215.628C33.8788 216.031 34.6589 216.655 35.2309 217.487C35.803 218.307 36.089 219.282 36.089 220.413C36.089 220.751 36.05 221.18 35.972 221.7C35.725 223.143 35.439 224.56 35.0879 225.925C34.5159 228.149 33.5408 229.826 32.1366 230.931C30.7455 232.023 28.8733 232.556 26.5331 232.556ZM26.8841 229.046C27.7942 229.046 28.5613 228.773 29.1983 228.24C29.8484 227.706 30.3164 226.887 30.5895 225.769C30.9665 224.235 31.2525 222.909 31.4476 221.765C31.5126 221.427 31.5516 221.076 31.5516 220.712C31.5516 219.23 30.7845 218.489 29.2373 218.489C28.3272 218.489 27.5472 218.762 26.8971 219.295C26.26 219.828 25.805 220.647 25.532 221.765C25.2329 222.857 24.9469 224.183 24.6479 225.769C24.5829 226.094 24.5439 226.432 24.5439 226.796C24.5309 228.305 25.3239 229.046 26.8841 229.046Z"
          fill="white"
        />
        <path
          d="M39.2196 232.322C39.0376 232.322 38.9076 232.27 38.8036 232.153C38.7256 232.023 38.6996 231.88 38.7256 231.711L42.0929 215.849C42.1189 215.667 42.2099 215.524 42.3659 215.407C42.509 215.29 42.665 215.238 42.834 215.238H49.3216C51.1288 215.238 52.572 215.615 53.6641 216.356C54.7692 217.11 55.3282 218.19 55.3282 219.607C55.3282 220.01 55.2762 220.439 55.1852 220.881C54.7822 222.753 53.9631 224.131 52.715 225.028C51.4929 225.925 49.8157 226.367 47.6835 226.367H44.3941L43.276 231.711C43.237 231.893 43.159 232.036 43.003 232.153C42.86 232.27 42.704 232.322 42.535 232.322H39.2196ZM47.8525 223C48.5416 223 49.1266 222.818 49.6337 222.441C50.1537 222.064 50.4917 221.531 50.6608 220.829C50.7128 220.556 50.7388 220.309 50.7388 220.101C50.7388 219.633 50.5958 219.269 50.3227 219.022C50.0497 218.762 49.5687 218.632 48.9056 218.632H45.9803L45.0572 223H47.8525Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter3_f_2402_3661)">
        <circle cx="203.696" cy="239.343" r="32.0804" fill="#A457FF" fillOpacity="0.3" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M203.692 220.911C203.792 220.911 203.891 220.939 203.98 220.987L219.35 229.861C219.529 229.964 219.639 230.157 219.639 230.359V248.105C219.639 248.311 219.529 248.5 219.35 248.603L217.012 249.953L210.853 233.076H210.854C210.744 232.77 210.311 232.77 210.201 233.076L208.176 238.63C208.121 238.785 208.121 238.953 208.176 239.108L212.981 252.28L211.379 253.205L207.444 242.418C207.334 242.112 206.902 242.112 206.792 242.418H206.792L204.767 247.972C204.712 248.127 204.712 248.295 204.767 248.449L207.349 255.532L203.98 257.477C203.894 257.529 203.792 257.553 203.692 257.553C203.592 257.553 203.493 257.525 203.404 257.477L200.062 255.55L209.542 229.56C209.624 229.333 209.456 229.093 209.215 229.093H205.319C205.027 229.093 204.766 229.275 204.667 229.55L196.031 253.224L194.43 252.3L202.724 229.56C202.81 229.333 202.641 229.093 202.397 229.093H198.501C198.209 229.093 197.948 229.275 197.849 229.55L190.399 249.974L188.034 248.61C187.855 248.506 187.745 248.314 187.745 248.112V230.363C187.745 230.157 187.855 229.968 188.034 229.865L203.404 220.99C203.493 220.939 203.592 220.911 203.692 220.911ZM202.109 259.729L193.527 254.773L193.526 254.776L189.496 252.448L189.497 252.446L186.739 250.854C185.758 250.288 185.153 249.241 185.153 248.108V230.362C185.153 229.23 185.757 228.182 186.739 227.616L202.106 218.745C202.597 218.46 203.146 218.319 203.692 218.319C204.238 218.319 204.787 218.46 205.278 218.745L220.651 227.616C221.633 228.182 222.237 229.229 222.237 230.362V248.108C222.237 249.24 221.633 250.288 220.651 250.854L205.281 259.729C204.791 260.014 204.244 260.154 203.695 260.154C203.146 260.154 202.6 260.01 202.109 259.729Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter4_f_2402_3661)">
        <circle cx="117.069" cy="289.08" r="32.0804" fill="#A457FF" fillOpacity="0.3" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103.609 304.107V304.216L103.604 304.22V304.238H116.211C117.638 304.258 119.06 304.144 120.462 303.893C121.938 303.604 123.377 303.148 124.749 302.531C125.344 302.256 125.915 301.923 126.491 301.587C126.636 301.502 126.782 301.416 126.929 301.332C127.607 300.849 128.256 300.326 128.873 299.77C130.563 298.242 131.871 296.337 132.688 294.212C132.743 293.973 132.976 293.82 133.215 293.866H136.648C136.922 293.866 137.012 293.775 137.012 293.466V291.267C137.03 291.057 137.03 290.844 137.012 290.633C137.012 290.578 137.026 290.523 137.04 290.468C137.068 290.359 137.096 290.25 137.012 290.141H134.144C133.797 290.141 133.797 290.105 133.797 289.796C133.897 288.69 133.897 287.579 133.797 286.473C133.779 286.146 133.852 286.146 134.106 286.146H136.613C136.905 286.146 137.013 286.072 137.013 285.782V282.803C137.004 282.605 137 282.505 136.947 282.455C136.894 282.402 136.789 282.402 136.578 282.402H133.326C133.073 282.446 132.829 282.274 132.784 282.021C132.411 281.046 131.936 280.114 131.364 279.241C130.789 278.381 130.14 277.572 129.421 276.826C128.465 275.871 127.391 275.042 126.224 274.355C124.465 273.333 122.541 272.618 120.539 272.248C119.567 272.069 118.585 271.96 117.596 271.921H103.973C103.609 271.921 103.609 271.994 103.609 272.284V282.075C103.609 282.421 103.536 282.421 103.264 282.421H99.3587C99.0684 282.421 99.0684 282.474 99.0684 282.674V285.871C99.0684 286.161 99.1586 286.161 99.377 286.161H103.319C103.609 286.161 103.609 286.215 103.609 286.433V289.848C103.609 290.157 103.518 290.157 103.282 290.157H99.0684V293.609C99.0684 293.899 99.1586 293.899 99.377 293.899H103.319C103.609 293.899 103.609 293.934 103.609 294.171V298.44V299.875V304.107ZM128.696 282.109C128.727 282.19 128.727 282.28 128.696 282.363H128.784C128.747 282.471 128.565 282.508 128.565 282.508H107.603C107.258 282.508 107.258 282.435 107.258 282.163V275.715C107.258 275.478 107.295 275.37 107.567 275.37H117.321C118.36 275.36 119.396 275.469 120.409 275.696C122.418 276.173 124.287 277.119 125.859 278.457C126.173 278.692 126.453 278.968 126.695 279.275C127.208 279.784 127.658 280.35 128.039 280.965C128.293 281.324 128.512 281.708 128.696 282.109ZM129.566 290.137H118.522H107.695C107.474 290.137 107.366 290.137 107.312 290.083C107.26 290.03 107.26 289.926 107.26 289.72V286.487C107.26 286.232 107.333 286.142 107.605 286.142H129.584C129.821 286.142 129.93 286.232 129.93 286.45C130.02 287.575 130.02 288.705 129.93 289.829C129.913 290.137 129.801 290.137 129.566 290.137ZM128.696 293.916C128.388 293.882 128.076 293.882 127.768 293.916H107.623C107.351 293.916 107.26 293.916 107.26 294.28V300.584C107.26 300.874 107.26 300.947 107.623 300.947H116.924C117.369 300.981 117.813 300.95 118.249 300.857C119.599 300.76 120.926 300.467 122.192 299.985C122.652 299.825 123.097 299.617 123.517 299.368H123.644C125.824 298.234 127.595 296.452 128.712 294.265C128.712 294.265 128.839 293.991 128.696 293.919V293.916Z"
          fill="#FEFEFD"
        />
      </g>
      <g filter="url(#filter5_f_2402_3661)">
        <circle cx="78.376" cy="192.035" r="10" fill="#A457FF" fillOpacity="0.3" />
      </g>
      <g filter="url(#filter6_f_2402_3661)">
        <circle cx="15.5547" cy="295.396" r="10" fill="#A457FF" fillOpacity="0.3" />
      </g>
      <defs>
        <filter
          id="filter0_f_2402_3661"
          x="17.2148"
          y="0.886719"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2402_3661" />
        </filter>
        <filter
          id="filter1_f_2402_3661"
          x="202"
          y="161.035"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2402_3661" />
        </filter>
        <filter
          id="filter2_f_2402_3661"
          x="2.55469"
          y="189.035"
          width="70.1611"
          height="70.1611"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_2402_3661" />
        </filter>
        <filter
          id="filter3_f_2402_3661"
          x="168.615"
          y="204.263"
          width="70.1611"
          height="70.1611"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_2402_3661" />
        </filter>
        <filter
          id="filter4_f_2402_3661"
          x="81.9883"
          y="254"
          width="70.1611"
          height="70.1611"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_2402_3661" />
        </filter>
        <filter
          id="filter5_f_2402_3661"
          x="63.376"
          y="177.035"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2402_3661" />
        </filter>
        <filter
          id="filter6_f_2402_3661"
          x="0.554688"
          y="280.396"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2402_3661" />
        </filter>
      </defs>
    </svg>
  )
}