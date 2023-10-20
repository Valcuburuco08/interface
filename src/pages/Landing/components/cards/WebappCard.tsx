import styled from 'styled-components'

import { Computer } from '../Icons'
import { PillButton } from './PillButton'
import ValuePropCard from './ValuePropCard'

type WebappCardProps = {
  isDarkMode?: boolean
  tagText?: string
}

const primary = '#627EEA'

export function WebappCard(props: WebappCardProps) {
  return (
    <ValuePropCard
      href="https://app.uniswap.org"
      height="696px"
      minHeight="450px"
      isDarkMode={props.isDarkMode}
      textColor={primary}
      backgroundColor={{ dark: 'rgba(98, 126, 234, 0.20)', light: 'rgba(98, 126, 234, 0.10)' }}
      button={<PillButton color={primary} label="Web app" icon={<Computer size="24px" fill={primary} />} />}
      titleText="Swapping made simple. Access thousands of tokens on 7+ chains."
    >
      <Contents>
        <Svg />
      </Contents>
    </ValuePropCard>
  )
}

const Contents = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 32px;
  padding-bottom: 64px;
  @media (max-width: 768px) {
    padding: 24px;
    padding-bottom: 32px;
  }
`

function Svg() {
  return (
    <svg width="100%" height="auto" viewBox="0 0 541 341" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2117_17409)">
        <rect x="0.617188" y="0.25" width="540" height="340" rx="32" fill="white" />
        <path
          d="M-152.214 317.41L-150.413 315.04C-150.224 314.791 -149.93 314.645 -149.617 314.645H-147.835C-147.433 314.645 -147.07 314.404 -146.914 314.034L-145.071 309.667L-143.742 305.877C-143.407 304.921 -142.025 305.013 -141.819 306.005L-140.287 313.403C-140.155 314.036 -139.467 314.38 -138.882 314.105L-134.853 312.211C-134.438 312.016 -133.944 312.128 -133.653 312.483L-128.347 318.969C-128.293 319.035 -128.247 319.109 -128.211 319.187L-126.359 323.251C-126.065 323.896 -125.212 324.039 -124.724 323.525L-124.571 323.364C-124.109 322.878 -123.309 322.975 -122.977 323.557L-121.568 326.029C-121.315 326.474 -120.766 326.656 -120.297 326.45L-119.714 326.194C-119.138 325.941 -118.474 326.277 -118.336 326.892L-117.58 330.278C-117.342 331.342 -115.814 331.311 -115.62 330.238L-114.721 325.272C-114.582 324.498 -113.645 324.181 -113.064 324.711L-109.881 327.611C-109.401 328.048 -108.638 327.919 -108.329 327.349L-107.276 325.408C-107.028 324.951 -106.471 324.76 -105.995 324.969L-105.583 325.15C-104.959 325.424 -104.25 325.007 -104.185 324.329L-102.227 303.705C-102.219 303.624 -102.202 303.545 -102.175 303.469L-99.9289 297.063C-99.7883 296.662 -99.4099 296.394 -98.9852 296.394H-97.7357C-97.3865 296.394 -97.0626 296.576 -96.8812 296.875L-92.1955 304.584C-92.1529 304.654 -92.1019 304.719 -92.0435 304.777L-90.524 306.277C-90.4753 306.325 -90.4317 306.378 -90.3938 306.435L-88.2881 309.602C-87.9073 310.175 -87.0752 310.201 -86.6591 309.654L-85.566 308.215C-85.463 308.079 -85.3963 307.92 -85.3723 307.751L-82.9402 290.677C-82.9065 290.441 -82.7893 290.224 -82.6097 290.066L-81.652 289.226C-81.0772 288.722 -80.1719 289.023 -80.014 289.771L-78.3208 297.794C-78.2851 297.964 -78.2058 298.121 -78.0908 298.251L-75.5484 301.12C-75.4035 301.283 -75.3162 301.489 -75.2996 301.707L-74.0214 318.533C-73.9387 319.621 -72.4197 319.808 -72.0753 318.772L-71.7492 317.791C-71.4368 316.851 -70.0945 316.889 -69.8351 317.845L-69.2231 320.1C-68.9915 320.954 -67.8471 321.109 -67.3971 320.347L-65.6615 317.41L-63.8609 315.04C-63.6718 314.791 -63.3772 314.645 -63.0646 314.645H-62.274C-61.7999 314.645 -61.391 314.312 -61.2948 313.848L-58.939 302.478L-57.2954 296.853C-57.0861 296.136 -56.1943 295.893 -55.6506 296.405L-54.1099 297.853C-53.9709 297.984 -53.8722 298.151 -53.8254 298.336L-51.8916 305.973C-51.8303 306.215 -51.6806 306.425 -51.472 306.562L-49.5961 307.797C-49.3897 307.933 -49.2408 308.14 -49.1784 308.38L-45.8314 321.196C-45.5591 322.239 -44.0572 322.172 -43.8778 321.11L-42.5591 313.299C-42.4075 312.401 -41.2321 312.156 -40.7351 312.92L-40.6435 313.06C-40.2053 313.733 -39.1925 313.641 -38.8828 312.9L-35.1287 303.916C-35.0391 303.701 -34.8775 303.524 -34.6719 303.416L-33.9512 303.037C-33.3986 302.746 -32.7174 303.027 -32.531 303.623L-30.4682 310.217C-30.2377 310.954 -29.2948 311.163 -28.7748 310.592L-25.1154 306.578C-24.9792 306.429 -24.8915 306.242 -24.8638 306.041L-23.6633 297.35C-23.5292 296.379 -22.2234 296.161 -21.7806 297.035L-20.792 298.987C-20.7343 299.101 -20.6554 299.203 -20.5595 299.287L-18.8434 300.793C-18.466 301.124 -17.9016 301.124 -17.5242 300.793L-16.4695 299.867C-16.0335 299.485 -15.3645 299.552 -15.0136 300.014L-14.5832 300.58C-14.047 301.286 -12.9256 300.997 -12.7974 300.12L-11.3071 289.919C-11.1925 289.135 -10.254 288.789 -9.65803 289.312L-9.39912 289.539C-8.93748 289.944 -8.22316 289.841 -7.89463 289.323L-6.51127 287.137C-6.45045 287.041 -6.40646 286.936 -6.38119 286.825L-3.97041 276.247C-3.92362 276.042 -3.81324 275.857 -3.65498 275.718L-2.46032 274.669C-1.93601 274.209 -1.11362 274.414 -0.865916 275.066L-0.720247 275.449C-0.349134 276.426 1.08299 276.251 1.20746 275.213L2.90254 261.082C3.01536 260.142 4.25098 259.871 4.74722 260.678L9.57439 268.527C9.95512 269.146 10.8482 269.165 11.2549 268.562L13.6504 265.015C13.7151 264.919 13.7627 264.813 13.7911 264.701L14.6504 261.307C14.8904 260.36 16.2075 260.284 16.5547 261.198L17.7894 264.448C17.8914 264.717 18.1036 264.928 18.3723 265.029L20.7207 265.912C20.8332 265.955 20.9524 265.976 21.0727 265.976H22.4955C22.8081 265.976 23.1027 265.83 23.2918 265.581L26.6278 261.19C26.9461 260.771 27.5344 260.671 27.9739 260.96L29.0007 261.636C29.4116 261.906 29.9581 261.838 30.2895 261.474L30.812 260.901C31.3806 260.277 32.4184 260.595 32.5405 261.43L33.6406 268.96C33.7974 270.034 35.3112 270.124 35.5952 269.078L36.1 267.217C36.2707 266.588 36.9885 266.288 37.5564 266.608L39.0368 267.443C39.256 267.567 39.4205 267.769 39.4975 268.008L43.1662 279.422C43.451 280.308 44.6857 280.359 45.042 279.499L46.3076 276.445C46.4399 276.126 46.7279 275.897 47.069 275.841L52.782 274.901C53.0741 274.853 53.33 274.678 53.4806 274.423L54.7735 272.235C55.25 271.429 56.474 271.661 56.6219 272.586L57.4606 277.83C57.6044 278.729 58.7769 278.983 59.2809 278.225L60.7178 276.064C60.7761 275.976 60.8201 275.88 60.8484 275.778L64.0956 264.121C64.3885 263.07 65.9139 263.181 66.051 264.264L67.5191 275.859C67.6446 276.85 68.986 277.065 69.4145 276.162L69.7781 275.396C69.9437 275.048 70.2953 274.825 70.6814 274.825H72.7206C73.1359 274.825 73.508 275.082 73.6554 275.47L75.0911 279.25L76.9713 282.962C77.2837 283.579 78.1125 283.7 78.5886 283.199L79.4855 282.254C79.6331 282.099 79.7269 281.9 79.753 281.687L81.7848 265.105C81.8038 264.951 81.8585 264.803 81.9446 264.673L83.5649 262.236C84.0356 261.528 85.1191 261.693 85.3575 262.509L86.8037 267.458C86.8379 267.576 86.8934 267.686 86.9673 267.783L88.8998 270.327C89.1794 270.695 89.6747 270.823 90.0979 270.637L91.3145 270.104C91.6701 269.948 92.0839 270.012 92.3758 270.268L94.1394 271.815C94.3193 271.973 94.4367 272.19 94.47 272.428L96.2228 284.886C96.3407 285.724 97.3818 286.046 97.952 285.421L98.8433 284.443C98.9718 284.302 99.0573 284.127 99.0897 283.939L101.105 272.268C101.129 272.131 101.181 272 101.258 271.884L103.967 267.808C104.043 267.694 104.094 267.566 104.119 267.432L108.189 244.931C108.248 244.604 108.466 244.327 108.771 244.194L112.185 242.696C112.77 242.439 113.443 242.79 113.568 243.417L114.386 247.545C114.613 248.69 116.284 248.584 116.364 247.419L117.374 232.796C117.455 231.616 119.157 231.53 119.357 232.695L122.846 252.979C122.929 253.459 123.345 253.809 123.832 253.809H124.988C125.517 253.809 125.955 253.397 125.986 252.869L129.994 185.877C130.038 185.144 130.991 184.892 131.392 185.507V185.507C131.792 186.123 132.746 185.87 132.79 185.137L134.749 152.12C134.752 152.073 134.758 152.025 134.768 151.979L136.234 144.812C136.467 143.673 138.128 143.781 138.211 144.941L141.896 196.846L144.624 262.506C144.665 263.487 146.044 263.663 146.33 262.724V262.724C146.441 262.356 146.78 262.105 147.164 262.105H148.591C149.089 262.105 149.511 261.739 149.581 261.246L151.022 251.134C151.184 249.994 152.827 249.986 153 251.124L154.005 257.734C154.052 258.048 154.246 258.321 154.528 258.469L155.111 258.776C155.666 259.069 156.351 258.783 156.533 258.182L158.133 252.917C158.371 252.136 159.393 251.953 159.886 252.603L161.489 254.713C161.59 254.846 161.657 255.002 161.682 255.167L162.253 258.924C162.434 260.116 164.18 260.028 164.24 258.824L165.84 226.803C165.843 226.741 165.852 226.68 165.867 226.62L167.05 221.686C167.311 220.599 168.887 220.694 169.016 221.804L172.972 255.883C172.982 255.975 173.006 256.065 173.041 256.151L175.046 260.988C175.286 261.568 175.995 261.785 176.519 261.44L177.676 260.679C177.902 260.53 178.058 260.296 178.109 260.03L182.387 237.504C182.516 236.825 183.278 236.479 183.874 236.827L186.117 238.14C186.321 238.259 186.476 238.446 186.555 238.669L189.309 246.436C189.352 246.558 189.418 246.669 189.503 246.766L191.74 249.29C192.07 249.662 192.623 249.735 193.038 249.462L194.579 248.448C194.747 248.338 194.877 248.18 194.953 247.995L195.964 245.556C196.353 244.617 197.732 244.79 197.878 245.796L199.018 253.673C199.031 253.764 199.056 253.852 199.093 253.935L200.75 257.673C201.14 258.555 202.43 258.427 202.64 257.486L203.528 253.511C203.726 252.626 204.904 252.44 205.365 253.22L206.969 255.935C207.003 255.993 207.031 256.054 207.053 256.117L207.969 258.77C208.298 259.723 209.671 259.645 209.891 258.662L210.752 254.805C210.938 253.974 212.01 253.74 212.525 254.418L212.947 254.974C213.347 255.5 214.139 255.5 214.539 254.974L216.095 252.926C216.205 252.78 216.274 252.607 216.293 252.426L218.022 236.044C218.125 235.063 219.436 234.808 219.899 235.679L221.23 238.181C221.28 238.276 221.315 238.378 221.333 238.484L222.97 248.182C222.981 248.247 222.998 248.31 223.021 248.371L224.732 252.875C225.03 253.658 226.115 253.716 226.493 252.969V252.969C226.932 252.102 228.232 252.355 228.314 253.323L230.541 279.703C230.546 279.769 230.559 279.835 230.577 279.899L232.65 286.992L235.283 300.857C235.423 301.595 236.296 301.921 236.886 301.455L237.374 301.07C237.578 300.909 237.711 300.674 237.745 300.417L242.258 266.392C242.294 266.126 242.434 265.886 242.649 265.724L244.901 264.03C245.126 263.861 245.27 263.604 245.296 263.323L247.325 241.423C247.345 241.207 247.435 241.002 247.581 240.842L249.665 238.556C249.803 238.405 249.891 238.215 249.917 238.013L251.96 222.417C251.971 222.33 251.994 222.245 252.028 222.164L254.242 216.819C254.397 216.446 254.762 216.202 255.166 216.202H256.356C256.758 216.202 257.121 216.443 257.277 216.813L259.075 221.072C259.105 221.144 259.126 221.218 259.139 221.295L260.358 228.515C260.553 229.671 262.234 229.606 262.34 228.44L264.152 208.571C264.158 208.497 264.173 208.424 264.197 208.353L266.238 202.082C266.454 201.42 267.263 201.175 267.809 201.606L268.538 202.182C268.698 202.308 268.815 202.481 268.875 202.676L271.089 209.963C271.217 210.384 271.605 210.672 272.046 210.672H273.227C273.595 210.672 273.934 210.874 274.108 211.199L278.784 219.919C278.839 220.021 278.876 220.132 278.893 220.247L280.491 231.187C280.634 232.166 281.959 232.365 282.384 231.471L282.48 231.268C282.771 230.655 283.575 230.504 284.069 230.968L285.388 232.209C285.745 232.545 286.295 232.569 286.68 232.265V232.265C287.296 231.778 288.207 232.168 288.279 232.95L290.204 253.732C290.209 253.783 290.218 253.835 290.231 253.885L292.646 263.423C292.702 263.644 292.832 263.839 293.014 263.976L294.281 264.929C294.898 265.393 295.786 265.013 295.876 264.246L298.194 244.408L301.869 203.785C301.97 202.664 303.558 202.539 303.834 203.629L304.477 206.17C304.49 206.222 304.499 206.274 304.504 206.327L306.992 234.166C307.009 234.353 307.078 234.532 307.192 234.682L309.777 238.085C309.896 238.241 309.966 238.428 309.979 238.624L311.64 263.764L312.9 270.954C313.101 272.1 314.766 272.038 314.88 270.88L316.649 253.033C316.67 252.819 316.76 252.617 316.905 252.458L318.977 250.186C319.123 250.025 319.213 249.821 319.233 249.604L321.303 227.263L323.68 190.238C323.73 189.464 324.714 189.168 325.183 189.785V189.785C325.625 190.368 326.549 190.143 326.675 189.422L329.752 171.748C329.95 170.607 331.606 170.66 331.731 171.811L335.556 207.052C335.577 207.249 335.656 207.434 335.783 207.586L340.027 212.665C340.147 212.808 340.304 212.915 340.482 212.973L343.072 213.826C343.385 213.929 343.627 214.179 343.719 214.495L344.963 218.752C345.217 219.622 346.405 219.732 346.815 218.924L349.799 213.032C349.848 212.934 349.882 212.828 349.897 212.719L356.238 167.552C356.393 166.447 357.968 166.388 358.205 167.479L368.727 215.952C368.762 216.116 368.839 216.269 368.949 216.396L371.925 219.823C372.066 219.986 372.151 220.19 372.167 220.404L374.174 247.353C374.213 247.875 374.648 248.279 375.171 248.279H375.763C376.122 248.279 376.454 248.086 376.631 247.774L381.281 239.613C381.35 239.492 381.393 239.359 381.407 239.221L383.847 215.675C383.884 215.317 384.11 215.007 384.439 214.862L385.876 214.232C386.215 214.083 386.445 213.759 386.472 213.39L388.102 191.402C388.106 191.344 388.115 191.287 388.13 191.231L389.884 184.303C390.149 183.254 391.659 183.315 391.839 184.382L392.345 187.378C392.491 188.241 393.598 188.514 394.128 187.816L395.492 186.021C395.609 185.867 395.768 185.75 395.95 185.684L399.215 184.512C399.785 184.308 400.405 184.653 400.531 185.246L402.965 196.69C403.089 197.271 403.78 197.521 404.246 197.152V197.152C404.73 196.77 405.446 197.055 405.535 197.665L407.408 210.485C407.426 210.608 407.467 210.727 407.529 210.836L408.49 212.523C408.964 213.354 410.223 213.109 410.35 212.16L412.466 196.376C412.473 196.321 412.486 196.265 412.502 196.212L419.2 174.724L421.133 169.633C421.469 168.751 422.727 168.781 423.019 169.679L423.13 170.021C423.468 171.058 424.986 170.882 425.078 169.795L425.938 159.608C426.029 158.527 427.535 158.345 427.882 159.373L429.66 164.64C429.689 164.726 429.706 164.814 429.711 164.904L430.769 183.702C430.837 184.917 432.607 184.979 432.76 183.771L436.414 154.908C436.422 154.845 436.436 154.784 436.455 154.724L438.143 149.541C438.426 148.671 439.633 148.607 440.007 149.443L442.129 154.191C442.497 155.015 443.682 154.968 443.984 154.117L446.04 148.319C446.073 148.225 446.092 148.127 446.096 148.028L448.611 90.1074L454.865 163.682C454.959 164.792 456.524 164.939 456.824 163.867L457.375 161.898C457.643 160.942 458.988 160.917 459.291 161.863L463.669 175.55C463.993 176.562 465.462 176.438 465.611 175.386L466.248 170.915C466.417 169.733 468.14 169.786 468.235 170.976L471.674 213.97C471.771 215.185 473.544 215.202 473.665 213.99L473.825 212.397C473.942 211.218 475.648 211.186 475.81 212.359L476.82 219.669C476.935 220.499 478.042 220.7 478.441 219.964V219.964C478.785 219.331 479.705 219.368 479.996 220.026L481.05 222.404C481.435 223.273 482.701 223.166 482.934 222.245L486.818 206.908C486.836 206.836 486.846 206.763 486.848 206.69L488.923 130.214C488.936 129.746 489.318 129.374 489.786 129.374V129.374"
          stroke="#627EEA"
          strokeWidth="4"
        />
        <circle opacity="0.24" cx="489.786" cy="130.107" r="18" fill="#627EEA" />
        <circle opacity="0.24" cx="489.786" cy="130.107" r="12" fill="#627EEA" />
        <circle cx="489.786" cy="130.107" r="5" fill="#627EEA" />
      </g>
      <circle cx="65.6294" cy="64.563" r="32.313" fill="#5F87FF" />
      <path
        d="M65.5298 75.2697L52.1294 67.4713L65.5216 86.0881L78.9289 67.4713L65.5216 75.2697H65.5298ZM65.729 43.0391L52.334 64.9625L65.729 72.7743L79.1294 64.9705L65.729 43.0391Z"
        fill="#F4F4F4"
      />
      <path
        d="M112.598 75.5625V53.5465H126.678V56.3945H115.862V62.6665H126.006V65.4505H115.862V72.7145H127.094V75.5625H112.598ZM135.584 75.7225C133.568 75.7225 132.224 74.9225 131.744 73.3225C131.552 72.8425 131.488 72.3305 131.488 71.6585V62.3465H128.704V59.7545H131.488V54.7625H134.656V59.7545H137.92V62.3465H134.656V71.2105C134.656 72.5865 135.296 73.0665 136.544 73.0665C137.184 73.0665 137.536 73.0345 138.048 72.9385V75.4985C137.248 75.6265 136.544 75.7225 135.584 75.7225ZM141.181 75.5625V53.5465H144.349V61.9625H144.381C145.373 60.4265 147.005 59.3705 149.405 59.3705C152.925 59.3705 155.005 61.4825 155.005 65.3225V75.5625H151.837V66.6985C151.837 63.8505 151.197 62.0265 148.541 62.0265C145.885 62.0265 144.349 64.1705 144.349 66.7305V75.5625H141.181ZM165.836 75.9465C161.612 75.9465 158.252 73.0985 158.252 67.6905C158.252 62.4745 161.676 59.3705 165.932 59.3705C170.156 59.3705 173.196 62.5705 173.196 67.4025V68.3945H161.452C161.612 71.9785 163.564 73.4825 165.868 73.4825C168.044 73.4825 169.388 72.3945 169.9 70.3465L173.1 70.7625C172.3 73.4185 170.22 75.9465 165.836 75.9465ZM161.484 65.9625H169.868C169.772 63.7225 168.204 61.8025 165.932 61.8025C163.596 61.8025 161.804 63.4665 161.484 65.9625ZM176.587 75.5625V59.7545H179.627V62.6665C180.267 61.0025 181.995 59.3705 184.459 59.3705C184.843 59.3705 185.131 59.4025 185.355 59.4345V62.4745C185.099 62.4425 184.779 62.4105 184.267 62.4105C181.611 62.4105 179.723 64.1065 179.723 67.2105V75.5625H176.587ZM194.086 75.9465C189.862 75.9465 186.502 73.0985 186.502 67.6905C186.502 62.4745 189.926 59.3705 194.182 59.3705C198.406 59.3705 201.446 62.5705 201.446 67.4025V68.3945H189.702C189.862 71.9785 191.814 73.4825 194.118 73.4825C196.294 73.4825 197.638 72.3945 198.15 70.3465L201.35 70.7625C200.55 73.4185 198.47 75.9465 194.086 75.9465ZM189.734 65.9625H198.118C198.022 63.7225 196.454 61.8025 194.182 61.8025C191.846 61.8025 190.054 63.4665 189.734 65.9625ZM210.149 75.9465C206.501 75.9465 204.645 73.6425 204.645 70.0265V59.7545H207.813V68.9385C207.813 71.6265 208.453 73.2905 211.013 73.2905C213.477 73.2905 215.013 71.1465 215.013 68.7145V59.7545H218.181V75.5625H215.045V73.3225H215.013C213.957 74.9225 212.293 75.9465 210.149 75.9465ZM222.525 75.5625V59.7545H225.661V61.9945H225.693C226.365 60.7465 228.061 59.3705 230.397 59.3705C232.957 59.3705 234.429 60.6825 235.101 62.3785C235.741 61.2265 237.309 59.3705 240.093 59.3705C243.709 59.3705 245.501 61.7385 245.501 65.3545V75.5625H242.333V66.6345C242.333 63.8185 241.885 62.0265 239.293 62.0265C236.989 62.0265 235.581 64.2345 235.581 66.7625V75.5625H232.445V66.6345C232.445 63.8185 231.997 62.0265 229.437 62.0265C227.101 62.0265 225.693 64.2345 225.693 66.7625V75.5625H222.525Z"
        fill="#222222"
      />
      <path
        d="M262.598 75.5625V53.5465H276.678V56.3945H265.862V62.6665H276.006V65.4505H265.862V72.7145H277.094V75.5625H262.598ZM285.735 75.5625V56.3945H279.047V53.5465H295.751V56.3945H289.031V75.5625H285.735ZM313.248 75.5625V65.4185H302.176V75.5625H298.848V53.5465H302.176V62.5705H313.248V53.5465H316.544V75.5625H313.248Z"
        fill="#7D7D7D"
      />
      <defs>
        <clipPath id="clip0_2117_17409">
          <rect width="540" height="340" fill="white" transform="translate(0.617188 0.25)" />
        </clipPath>
      </defs>
    </svg>
  )
}