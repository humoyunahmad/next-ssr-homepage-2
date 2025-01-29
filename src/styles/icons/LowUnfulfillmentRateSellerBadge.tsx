export function LowUnfulfillmentRateSellerBadge({
  isAr = false,
  ...props
}: { isAr?: boolean } & React.SVGProps<SVGSVGElement>) {
  return isAr ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="100" viewBox="0 0 101 100" fill="none" {...props}>
      <path
        opacity="0.1"
        d="M50.0105 95C74.8633 95 95.0105 74.8528 95.0105 50C95.0105 25.1472 74.8633 5 50.0105 5C25.1577 5 5.0105 25.1472 5.0105 50C5.0105 74.8528 25.1577 95 50.0105 95Z"
        fill="#31CDCD"
      />
      <path
        d="M85.8084 50.0012C85.8084 70.6154 69.9058 87.3265 50.2889 87.3265C30.672 87.3265 14.7694 70.6154 14.7694 50.0012C14.7694 29.3869 30.672 12.6758 50.2889 12.6758C69.9058 12.6758 85.8084 29.3869 85.8084 50.0012Z"
        fill="#E9FDF8"
      />
      <g clipPath="url(#clip0_8768_90387)">
        <path
          d="M54.0678 26.2791C53.6993 25.8132 53.0987 25.8073 52.7244 26.266L45.7023 34.9412L42.6497 30.991C42.2856 30.5167 41.6829 30.5011 41.3034 30.9562C40.924 31.4113 40.9115 32.1647 41.2756 32.639L41.2805 32.6453L45.0025 37.4668C45.0907 37.5792 45.1958 37.6687 45.3119 37.73C45.4279 37.7913 45.5525 37.8232 45.6785 37.8238H45.689C45.9386 37.8228 46.178 37.6993 46.3555 37.4799L54.0593 27.9584C54.4315 27.497 54.4353 26.7464 54.0678 26.2791ZM50.7153 37.4668C50.8033 37.5789 50.9081 37.6682 51.0238 37.7295C51.1395 37.7908 51.2638 37.8229 51.3894 37.8238H51.3999C51.6496 37.8228 51.8889 37.6993 52.0664 37.4799L59.7702 27.9584C60.1194 27.4669 60.0838 26.7147 59.6906 26.2782C59.3342 25.8825 58.7985 25.8773 58.4372 26.266L51.418 34.9412L51.1676 34.6163C50.8035 34.1419 50.2008 34.1263 49.8213 34.5814C49.4419 35.0365 49.4294 35.7899 49.7934 36.2642L49.7984 36.2706L50.7153 37.4668Z"
          fill="#31CDCD"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.7122 85.5204C70.2482 85.5204 85.4256 69.7034 85.4256 50.0012C85.4256 30.2989 70.2482 14.4819 51.7122 14.4819C33.1762 14.4819 17.9989 30.2989 17.9989 50.0012C17.9989 69.7034 33.1762 85.5204 51.7122 85.5204ZM51.7122 87.3265C71.3291 87.3265 87.2318 70.6154 87.2318 50.0012C87.2318 29.3869 71.3291 12.6758 51.7122 12.6758C32.0954 12.6758 16.1927 29.3869 16.1927 50.0012C16.1927 70.6154 32.0954 87.3265 51.7122 87.3265Z"
        fill="#31CDCD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.3894 86.875C70.6689 86.875 86.4551 70.4543 86.4551 50C86.4551 29.5457 70.6689 13.125 51.3894 13.125C32.1099 13.125 16.3238 29.5457 16.3238 50C16.3238 70.4543 32.1099 86.875 51.3894 86.875ZM51.3894 88.75C71.7931 88.75 88.3336 71.401 88.3336 50C88.3336 28.599 71.7931 11.25 51.3894 11.25C30.9857 11.25 14.4453 28.599 14.4453 50C14.4453 71.401 30.9857 88.75 51.3894 88.75Z"
        fill="#F2FBF7"
      />
      <path d="M8.7605 46.25H90.0105L84.442 82.5H18.0778L8.7605 46.25Z" fill="#E9FDF8" />
      <path
        d="M27.8654 53.62H28.6214L28.6454 53.572C28.5094 53.364 28.4134 53.172 28.3574 52.996C28.3014 52.812 28.2734 52.608 28.2734 52.384C28.2734 52.12 28.3214 51.872 28.4174 51.64C28.5214 51.408 28.6614 51.208 28.8374 51.04C29.0214 50.864 29.2334 50.728 29.4734 50.632C29.7214 50.528 29.9934 50.476 30.2894 50.476C30.7054 50.476 31.0854 50.568 31.4294 50.752C31.7734 50.936 32.0574 51.196 32.2814 51.532L31.1894 52.516C31.0614 52.332 30.9134 52.204 30.7454 52.132C30.5774 52.052 30.3894 52.012 30.1814 52.012C29.9654 52.012 29.7854 52.068 29.6414 52.18C29.4974 52.292 29.4254 52.448 29.4254 52.648C29.4254 52.88 29.5494 53.076 29.7974 53.236C30.0454 53.396 30.3974 53.476 30.8534 53.476H32.4854V55H27.8654V53.62ZM35.6237 55C34.8317 55 34.2477 54.824 33.8717 54.472C33.5037 54.12 33.3197 53.536 33.3197 52.72V46.12H34.6037V52.552C34.6037 52.896 34.6757 53.128 34.8197 53.248C34.9717 53.368 35.2277 53.428 35.5877 53.428H35.9597V54.676L35.6357 55H35.6237ZM35.3978 53.752L35.7218 53.428H37.4738L37.4978 53.368L36.1778 51.748V50.128C36.5618 49.944 36.9698 49.804 37.4018 49.708C37.8418 49.604 38.2698 49.552 38.6858 49.552C40.3978 49.552 41.2538 50.196 41.2538 51.484C41.2538 51.7 41.2298 51.888 41.1818 52.048C41.1418 52.208 41.0738 52.36 40.9778 52.504C40.8818 52.648 40.7578 52.792 40.6058 52.936C40.4618 53.072 40.2818 53.224 40.0658 53.392L40.0778 53.428H41.7098V54.676L41.3858 55H41.0738C40.6738 55 40.2658 54.952 39.8498 54.856C39.4418 54.752 39.0698 54.592 38.7338 54.376C38.3978 54.592 38.0418 54.752 37.6658 54.856C37.2898 54.952 36.9018 55 36.5018 55H35.3978V53.752ZM37.2218 51.376L38.8298 53.26L39.3818 52.804C39.5178 52.692 39.6338 52.596 39.7298 52.516C39.8338 52.436 39.9178 52.36 39.9818 52.288C40.0458 52.216 40.0938 52.144 40.1258 52.072C40.1578 51.992 40.1738 51.904 40.1738 51.808C40.1738 51.568 40.0538 51.396 39.8138 51.292C39.5818 51.18 39.2018 51.124 38.6738 51.124C38.4338 51.124 38.1858 51.14 37.9298 51.172C37.6738 51.204 37.4378 51.248 37.2218 51.304V51.376ZM38.5778 48.448C38.3858 48.448 38.2258 48.392 38.0978 48.28C37.9778 48.16 37.9178 47.972 37.9178 47.716C37.9178 47.452 37.9778 47.264 38.0978 47.152C38.2258 47.032 38.3858 46.972 38.5778 46.972H38.7818C38.9738 46.972 39.1298 47.032 39.2498 47.152C39.3778 47.264 39.4418 47.452 39.4418 47.716C39.4418 47.972 39.3778 48.16 39.2498 48.28C39.1298 48.392 38.9738 48.448 38.7818 48.448H38.5778ZM41.1461 53.752L41.4701 53.428H41.9501C42.2701 53.428 42.4901 53.36 42.6101 53.224C42.7381 53.088 42.8021 52.876 42.8021 52.588V46.12H44.0741V52.588C44.0741 53.412 43.9101 54.02 43.5821 54.412C43.2621 54.796 42.7181 54.992 41.9501 55H41.1461V53.752ZM45.3848 46.12H46.6688V55H45.3848V46.12ZM44.7728 57.268H45.2528L45.2648 57.22C45.1128 57.044 45.0368 56.832 45.0368 56.584C45.0368 56.256 45.1528 55.984 45.3848 55.768C45.6248 55.552 45.9248 55.444 46.2848 55.444C46.5008 55.444 46.7128 55.492 46.9208 55.588C47.1368 55.684 47.3128 55.812 47.4488 55.972L46.9088 56.704C46.7248 56.512 46.5168 56.416 46.2848 56.416C46.1488 56.416 46.0368 56.448 45.9488 56.512C45.8608 56.584 45.8168 56.668 45.8168 56.764C45.8168 57.052 46.0968 57.196 46.6568 57.196H47.5088V58.168H44.7728V57.268ZM53.553 57.88C52.473 57.88 51.649 57.6 51.081 57.04C50.513 56.48 50.229 55.692 50.229 54.676C50.229 54.316 50.277 53.916 50.373 53.476C50.477 53.036 50.617 52.604 50.793 52.18L51.825 52.492C51.673 52.828 51.549 53.176 51.453 53.536C51.357 53.888 51.309 54.2 51.309 54.472C51.309 55.016 51.469 55.436 51.789 55.732C52.109 56.036 52.549 56.188 53.109 56.188H53.997C54.333 56.188 54.613 56.148 54.837 56.068C55.069 55.988 55.253 55.86 55.389 55.684C55.533 55.508 55.637 55.276 55.701 54.988C55.765 54.7 55.797 54.348 55.797 53.932V46.12H57.069V53.932C57.069 55.284 56.785 56.28 56.217 56.92C55.649 57.56 54.761 57.88 53.553 57.88ZM59.4798 55C58.9998 55 58.6278 54.876 58.3638 54.628C58.0998 54.372 57.9678 53.98 57.9678 53.452V52.612H59.1918V53.428H60.8238C61.1758 53.428 61.4198 53.392 61.5558 53.32C61.6998 53.24 61.7718 53.104 61.7718 52.912C61.7718 52.824 61.7518 52.716 61.7118 52.588C61.6798 52.46 61.6318 52.316 61.5678 52.156L60.4878 49.084L61.8198 48.604L63.0318 52.048C63.1278 52.328 63.2198 52.556 63.3078 52.732C63.4038 52.908 63.4998 53.048 63.5958 53.152C63.6918 53.256 63.7958 53.328 63.9078 53.368C64.0278 53.408 64.1598 53.428 64.3038 53.428H64.6518V54.676L64.3278 55C64.0238 55 63.7598 54.976 63.5358 54.928C63.3118 54.88 63.1118 54.8 62.9358 54.688C62.7598 54.576 62.5998 54.428 62.4558 54.244C62.3198 54.052 62.1878 53.812 62.0598 53.524L62.0118 53.536C61.9238 54.064 61.7558 54.44 61.5078 54.664C61.2678 54.888 60.8918 55 60.3798 55H59.4798ZM64.0867 53.752L64.4107 53.428H66.1627L66.1867 53.368L64.8667 51.748V50.128C65.2507 49.944 65.6587 49.804 66.0907 49.708C66.5307 49.604 66.9587 49.552 67.3747 49.552C69.0867 49.552 69.9427 50.196 69.9427 51.484C69.9427 51.7 69.9187 51.888 69.8707 52.048C69.8307 52.208 69.7627 52.36 69.6667 52.504C69.5707 52.648 69.4467 52.792 69.2947 52.936C69.1507 53.072 68.9707 53.224 68.7547 53.392L68.7667 53.428H70.3987V54.676L70.0747 55H69.7627C69.3627 55 68.9547 54.952 68.5387 54.856C68.1307 54.752 67.7587 54.592 67.4227 54.376C67.0867 54.592 66.7307 54.752 66.3547 54.856C65.9787 54.952 65.5907 55 65.1907 55H64.0867V53.752ZM65.9107 51.376L67.5187 53.26L68.0707 52.804C68.2067 52.692 68.3227 52.596 68.4187 52.516C68.5227 52.436 68.6067 52.36 68.6707 52.288C68.7347 52.216 68.7827 52.144 68.8147 52.072C68.8467 51.992 68.8627 51.904 68.8627 51.808C68.8627 51.568 68.7427 51.396 68.5027 51.292C68.2707 51.18 67.8907 51.124 67.3627 51.124C67.1227 51.124 66.8747 51.14 66.6187 51.172C66.3627 51.204 66.1267 51.248 65.9107 51.304V51.376ZM71.551 54.316C71.367 54.572 71.143 54.752 70.879 54.856C70.615 54.952 70.267 55 69.835 55V53.752L70.159 53.428C70.463 53.428 70.683 53.372 70.819 53.26C70.955 53.148 71.075 52.956 71.179 52.684L71.515 51.844C71.611 51.596 71.723 51.364 71.851 51.148C71.979 50.932 72.127 50.748 72.295 50.596C72.463 50.436 72.655 50.312 72.871 50.224C73.087 50.136 73.335 50.092 73.615 50.092C74.311 50.092 74.843 50.38 75.211 50.956C75.579 51.532 75.763 52.328 75.763 53.344V53.764L74.755 55.264L71.551 54.316ZM72.151 52.864L74.623 53.596V53.344C74.623 52.816 74.507 52.408 74.275 52.12C74.051 51.824 73.747 51.676 73.363 51.676C73.083 51.676 72.855 51.752 72.679 51.904C72.503 52.056 72.363 52.276 72.259 52.564L72.151 52.864Z"
        fill="#31CDCD"
      />
      <path
        d="M40.2836 72.41C39.4976 72.41 38.8856 72.212 38.4476 71.816C38.0096 71.42 37.7906 70.868 37.7906 70.16C37.7906 69.884 37.8266 69.593 37.8986 69.287C37.9766 68.975 38.0816 68.666 38.2136 68.36L38.7716 68.531C38.6576 68.765 38.5646 69.011 38.4926 69.269C38.4206 69.521 38.3846 69.761 38.3846 69.989C38.3846 70.499 38.5286 70.895 38.8166 71.177C39.1046 71.459 39.5036 71.6 40.0136 71.6H40.5536C41.1896 71.6 41.6546 71.471 41.9486 71.213C42.2486 70.961 42.3986 70.562 42.3986 70.016C42.3986 69.944 42.3956 69.869 42.3896 69.791C42.3896 69.713 42.3806 69.62 42.3626 69.512C42.3506 69.398 42.3296 69.263 42.2996 69.107C42.2696 68.951 42.2276 68.759 42.1736 68.531L42.0836 68.135L42.7136 68.009L42.7946 68.405C42.8426 68.657 42.8816 68.87 42.9116 69.044C42.9416 69.212 42.9626 69.356 42.9746 69.476H42.9926L43.5056 68.603C43.7336 68.207 43.9646 67.88 44.1986 67.622C44.4326 67.358 44.6696 67.148 44.9096 66.992C45.1496 66.836 45.3926 66.725 45.6386 66.659C45.8906 66.593 46.1516 66.56 46.4216 66.56C47.0036 66.56 47.4566 66.722 47.7806 67.046C48.1046 67.364 48.2666 67.805 48.2666 68.369C48.2666 68.789 48.1976 69.137 48.0596 69.413C48.1856 69.455 48.3476 69.476 48.5456 69.476H48.7256V70.07L48.5456 70.25C48.3176 70.25 48.1256 70.232 47.9696 70.196C47.8196 70.154 47.6816 70.076 47.5556 69.962C47.2436 70.154 46.8056 70.25 46.2416 70.25H43.0016C42.9596 70.994 42.7196 71.54 42.2816 71.888C41.8436 72.236 41.1776 72.41 40.2836 72.41ZM46.2416 69.476C46.6916 69.476 47.0366 69.401 47.2766 69.251C47.5166 69.101 47.6366 68.837 47.6366 68.459C47.6366 68.087 47.5406 67.808 47.3486 67.622C47.1626 67.43 46.8986 67.334 46.5566 67.334H46.2866C46.0466 67.334 45.8276 67.358 45.6296 67.406C45.4376 67.448 45.2516 67.526 45.0716 67.64C44.8976 67.748 44.7236 67.901 44.5496 68.099C44.3816 68.291 44.2016 68.534 44.0096 68.828L43.6226 69.431L43.6496 69.476H46.2416ZM46.0976 65.48C45.9776 65.48 45.8816 65.447 45.8096 65.381C45.7376 65.309 45.7016 65.195 45.7016 65.039C45.7016 64.883 45.7376 64.772 45.8096 64.706C45.8816 64.634 45.9776 64.598 46.0976 64.598H46.1966C46.3166 64.598 46.4126 64.634 46.4846 64.706C46.5566 64.772 46.5926 64.883 46.5926 65.039C46.5926 65.195 46.5566 65.309 46.4846 65.381C46.4126 65.447 46.3166 65.48 46.1966 65.48H46.0976ZM48.3645 69.656L48.5445 69.476H49.8495L49.8675 69.44C49.5615 69.2 49.3245 68.942 49.1565 68.666C48.9885 68.384 48.9045 68.057 48.9045 67.685C48.9045 67.445 48.9435 67.22 49.0215 67.01C49.0995 66.8 49.2105 66.617 49.3545 66.461C49.4985 66.299 49.6695 66.173 49.8675 66.083C50.0715 65.987 50.2935 65.939 50.5335 65.939C50.7735 65.939 50.9925 65.987 51.1905 66.083C51.3945 66.173 51.5685 66.296 51.7125 66.452C51.8565 66.608 51.9675 66.794 52.0455 67.01C52.1235 67.22 52.1625 67.445 52.1625 67.685C52.1625 68.057 52.0785 68.384 51.9105 68.666C51.7425 68.942 51.5055 69.2 51.1995 69.44L51.2175 69.476H52.5225V70.07L52.3425 70.25H52.2165C51.9105 70.25 51.6165 70.217 51.3345 70.151C51.0525 70.079 50.7855 69.974 50.5335 69.836C50.2815 69.974 50.0145 70.079 49.7325 70.151C49.4505 70.217 49.1565 70.25 48.8505 70.25H48.3645V69.656ZM50.5335 69.206C50.8395 69.038 51.0825 68.84 51.2625 68.612C51.4425 68.378 51.5325 68.099 51.5325 67.775C51.5325 67.451 51.4455 67.193 51.2715 67.001C51.0975 66.809 50.8665 66.713 50.5785 66.713H50.4885C50.2005 66.713 49.9695 66.809 49.7955 67.001C49.6215 67.193 49.5345 67.451 49.5345 67.775C49.5345 68.099 49.6245 68.378 49.8045 68.612C49.9845 68.84 50.2275 69.038 50.5335 69.206ZM50.4795 64.859C50.3595 64.859 50.2635 64.826 50.1915 64.76C50.1195 64.688 50.0835 64.574 50.0835 64.418C50.0835 64.262 50.1195 64.151 50.1915 64.085C50.2635 64.013 50.3595 63.977 50.4795 63.977H50.5785C50.6985 63.977 50.7945 64.013 50.8665 64.085C50.9385 64.151 50.9745 64.262 50.9745 64.418C50.9745 64.574 50.9385 64.688 50.8665 64.76C50.7945 64.826 50.6985 64.859 50.5785 64.859H50.4795ZM52.1659 69.656L52.3459 69.476H52.6519C52.9159 69.476 53.1589 69.467 53.3809 69.449C53.6089 69.431 53.8399 69.398 54.0739 69.35C54.3079 69.296 54.5539 69.221 54.8119 69.125C55.0759 69.029 55.3729 68.903 55.7029 68.747L56.5309 68.351V68.315L55.1989 68.018L53.3359 67.559V68.333H52.7059V67.64C52.7059 67.388 52.7749 67.199 52.9129 67.073C53.0569 66.941 53.2369 66.875 53.4529 66.875C53.5189 66.875 53.5969 66.884 53.6869 66.902C53.7829 66.914 53.9299 66.944 54.1279 66.992L56.3239 67.559C56.6539 67.643 56.9299 67.703 57.1519 67.739C57.3739 67.769 57.5659 67.784 57.7279 67.784H57.8719V68.558H57.1879V68.666C57.1879 68.966 57.2539 69.176 57.3859 69.296C57.5179 69.416 57.7219 69.476 57.9979 69.476H58.3129V70.07L58.1329 70.25C57.8689 70.25 57.6439 70.226 57.4579 70.178C57.2719 70.13 57.1189 70.052 56.9989 69.944C56.8849 69.83 56.7979 69.686 56.7379 69.512C56.6839 69.338 56.6539 69.125 56.6479 68.873L55.9459 69.296C55.5739 69.518 55.2439 69.695 54.9559 69.827C54.6679 69.953 54.3979 70.049 54.1459 70.115C53.8939 70.175 53.6479 70.214 53.4079 70.232C53.1739 70.244 52.9219 70.25 52.6519 70.25H52.1659V69.656ZM54.5779 65.849C54.4579 65.849 54.3619 65.816 54.2899 65.75C54.2179 65.678 54.1819 65.564 54.1819 65.408C54.1819 65.252 54.2179 65.141 54.2899 65.075C54.3619 65.003 54.4579 64.967 54.5779 64.967H54.6769C54.7969 64.967 54.8929 65.003 54.9649 65.075C55.0369 65.141 55.0729 65.252 55.0729 65.408C55.0729 65.564 55.0369 65.678 54.9649 65.75C54.8929 65.816 54.7969 65.849 54.6769 65.849H54.5779ZM57.9537 69.656L58.1337 69.476H58.4487C58.9587 69.476 59.2137 69.221 59.2137 68.711V67.289H59.8437V68.711C59.8437 69.221 60.0987 69.476 60.6087 69.476H60.9237V70.07L60.7437 70.25C59.9157 70.25 59.4297 69.956 59.2857 69.368H59.2407C59.1747 69.698 59.0457 69.929 58.8537 70.061C58.6617 70.187 58.3617 70.25 57.9537 70.25V69.656ZM59.4747 66.209C59.3547 66.209 59.2587 66.176 59.1867 66.11C59.1147 66.038 59.0787 65.924 59.0787 65.768C59.0787 65.612 59.1147 65.501 59.1867 65.435C59.2587 65.363 59.3547 65.327 59.4747 65.327H59.5737C59.6937 65.327 59.7897 65.363 59.8617 65.435C59.9337 65.501 59.9697 65.612 59.9697 65.768C59.9697 65.924 59.9337 66.038 59.8617 66.11C59.7897 66.176 59.6937 66.209 59.5737 66.209H59.4747ZM61.7389 69.728C61.6009 69.914 61.4389 70.049 61.2529 70.133C61.0729 70.211 60.8419 70.25 60.5599 70.25V69.656L60.7399 69.476C60.8539 69.476 60.9499 69.461 61.0279 69.431C61.1119 69.401 61.1839 69.356 61.2439 69.296C61.3099 69.23 61.3669 69.146 61.4149 69.044C61.4689 68.936 61.5229 68.81 61.5769 68.666L61.8289 68C61.9669 67.64 62.1499 67.364 62.3779 67.172C62.6059 66.974 62.9089 66.875 63.2869 66.875C63.7309 66.875 64.0729 67.076 64.3129 67.478C64.5589 67.88 64.6819 68.438 64.6819 69.152V69.575L64.1509 70.358L61.7389 69.728ZM62.0989 69.017L64.0519 69.539V69.152C64.0519 68.684 63.9739 68.318 63.8179 68.054C63.6679 67.784 63.4549 67.649 63.1789 67.649C62.9509 67.649 62.7739 67.718 62.6479 67.856C62.5279 67.994 62.4259 68.168 62.3419 68.378L62.0989 69.017Z"
        fill="#31CDCD"
      />
      <defs>
        <clipPath id="clip0_8768_90387">
          <rect width="19" height="23.75" fill="white" transform="translate(41.0105 20)" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_1708_17305)">
        <path
          opacity="0.1"
          d="M50.6719 100.93C78.2861 100.93 100.672 78.5439 100.672 50.9297C100.672 23.3155 78.2861 0.929688 50.6719 0.929688C23.0576 0.929688 0.671875 23.3155 0.671875 50.9297C0.671875 78.5439 23.0576 100.93 50.6719 100.93Z"
          fill="#31CDCD"
        />
        <path
          d="M87.0937 50.9308C87.0937 71.5451 71.1911 88.2562 51.5742 88.2562C31.9573 88.2562 16.0547 71.5451 16.0547 50.9308C16.0547 30.3166 31.9573 13.6055 51.5742 13.6055C71.1911 13.6055 87.0937 30.3166 87.0937 50.9308Z"
          fill="#E9FDF8"
        />
        <g clipPath="url(#clip1_1708_17305)">
          <path
            d="M55.3542 27.2088C54.9856 26.7429 54.3851 26.737 54.0107 27.1957L46.9886 35.8709L43.9361 31.9207C43.572 31.4464 42.9692 31.4308 42.5898 31.8859C42.2104 32.341 42.1979 33.0944 42.562 33.5687L42.5669 33.575L46.2889 38.3965C46.377 38.5089 46.4822 38.5984 46.5982 38.6597C46.7143 38.721 46.8389 38.7529 46.9649 38.7535H46.9754C47.225 38.7525 47.4644 38.629 47.6419 38.4096L55.3456 28.8881C55.7178 28.4267 55.7216 27.6761 55.3542 27.2088ZM52.0017 38.3965C52.0897 38.5086 52.1945 38.5979 52.3102 38.6592C52.4259 38.7205 52.5502 38.7525 52.6758 38.7535H52.6863C52.936 38.7525 53.1753 38.629 53.3528 38.4096L61.0566 28.8881C61.4058 28.3966 61.3701 27.6444 60.977 27.2079C60.6205 26.8122 60.0849 26.807 59.7236 27.1957L52.7044 35.8709L52.4539 35.546C52.0899 35.0716 51.4872 35.056 51.1077 35.5111C50.7282 35.9662 50.7157 36.7196 51.0798 37.1939L51.0848 37.2003L52.0017 38.3965Z"
            fill="#31CDCD"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53 86.4501C71.536 86.4501 86.7133 70.6331 86.7133 50.9308C86.7133 31.2286 71.536 15.4116 53 15.4116C34.464 15.4116 19.2866 31.2286 19.2866 50.9308C19.2866 70.6331 34.464 86.4501 53 86.4501ZM53 88.2562C72.6168 88.2562 88.5195 71.5451 88.5195 50.9308C88.5195 30.3166 72.6168 13.6055 53 13.6055C33.3831 13.6055 17.4805 30.3166 17.4805 50.9308C17.4805 71.5451 33.3831 88.2562 53 88.2562Z"
          fill="#31CDCD"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.6746 87.8047C71.9541 87.8047 87.7402 71.3839 87.7402 50.9297C87.7402 30.4754 71.9541 14.0547 52.6746 14.0547C33.3951 14.0547 17.609 30.4754 17.609 50.9297C17.609 71.3839 33.3951 87.8047 52.6746 87.8047ZM52.6746 89.6797C73.0782 89.6797 89.6187 72.3307 89.6187 50.9297C89.6187 29.5287 73.0782 12.1797 52.6746 12.1797C32.2708 12.1797 15.7305 29.5287 15.7305 50.9297C15.7305 72.3307 32.2708 89.6797 52.6746 89.6797Z"
          fill="#F2FBF7"
        />
        <path d="M10.0469 47.1797H91.2969L85.7284 83.4297H19.3642L10.0469 47.1797Z" fill="#E9FDF8" />
        <path
          d="M43.0814 55.9297V47.5537H44.6654V54.5257H47.9654V55.9297H43.0814ZM51.37 56.0737C50.922 56.0737 50.518 55.9977 50.158 55.8457C49.806 55.6937 49.502 55.4737 49.246 55.1857C48.998 54.8977 48.806 54.5537 48.67 54.1537C48.534 53.7457 48.466 53.2897 48.466 52.7857C48.466 52.2817 48.534 51.8297 48.67 51.4297C48.806 51.0297 48.998 50.6897 49.246 50.4097C49.502 50.1217 49.806 49.9017 50.158 49.7497C50.518 49.5977 50.922 49.5217 51.37 49.5217C51.818 49.5217 52.222 49.5977 52.582 49.7497C52.942 49.9017 53.246 50.1217 53.494 50.4097C53.75 50.6897 53.946 51.0297 54.082 51.4297C54.218 51.8297 54.286 52.2817 54.286 52.7857C54.286 53.2897 54.218 53.7457 54.082 54.1537C53.946 54.5537 53.75 54.8977 53.494 55.1857C53.246 55.4737 52.942 55.6937 52.582 55.8457C52.222 55.9977 51.818 56.0737 51.37 56.0737ZM51.37 54.8377C51.778 54.8377 52.098 54.7137 52.33 54.4657C52.562 54.2177 52.678 53.8537 52.678 53.3737V52.2097C52.678 51.7377 52.562 51.3777 52.33 51.1297C52.098 50.8817 51.778 50.7577 51.37 50.7577C50.97 50.7577 50.654 50.8817 50.422 51.1297C50.19 51.3777 50.074 51.7377 50.074 52.2097V53.3737C50.074 53.8537 50.19 54.2177 50.422 54.4657C50.654 54.7137 50.97 54.8377 51.37 54.8377ZM54.6903 49.6657H56.1663L56.8023 52.2457L57.2943 54.3937H57.3423L57.9183 52.2457L58.6503 49.6657H60.0423L60.7983 52.2457L61.3863 54.3937H61.4343L61.9263 52.2457L62.5503 49.6657H63.9783L62.2623 55.9297H60.6063L59.8023 53.1697L59.3343 51.4657H59.2983L58.8423 53.1697L58.0503 55.9297H56.4183L54.6903 49.6657Z"
          fill="#31CDCD"
        />
        <path
          d="M26.3714 65.2937V68.3037C26.3714 68.719 26.4507 69.0317 26.6094 69.2417C26.7681 69.4517 27.0387 69.5567 27.4214 69.5567C27.8041 69.5567 28.0747 69.4517 28.2334 69.2417C28.3921 69.0317 28.4714 68.719 28.4714 68.3037V65.2937H29.2484V68.1777C29.2484 68.537 29.2157 68.8474 29.1504 69.1087C29.0851 69.37 28.9801 69.587 28.8354 69.7597C28.6907 69.9277 28.5017 70.0537 28.2684 70.1377C28.0397 70.2217 27.7574 70.2637 27.4214 70.2637C27.0854 70.2637 26.8007 70.2217 26.5674 70.1377C26.3387 70.0537 26.1521 69.9277 26.0074 69.7597C25.8627 69.587 25.7577 69.37 25.6924 69.1087C25.6271 68.8474 25.5944 68.537 25.5944 68.1777V65.2937H26.3714ZM30.2252 70.1797V66.5397H30.9882V67.1417H31.0232C31.1026 66.9457 31.2216 66.7824 31.3802 66.6517C31.5436 66.521 31.7652 66.4557 32.0452 66.4557C32.4186 66.4557 32.7079 66.5794 32.9132 66.8267C33.1232 67.0694 33.2282 67.417 33.2282 67.8697V70.1797H32.4652V67.9677C32.4652 67.3984 32.2366 67.1137 31.7792 67.1137C31.6812 67.1137 31.5832 67.1277 31.4852 67.1557C31.3919 67.179 31.3079 67.2164 31.2332 67.2677C31.1586 67.319 31.0979 67.3844 31.0512 67.4637C31.0092 67.543 30.9882 67.6364 30.9882 67.7437V70.1797H30.2252ZM34.3348 67.1627H33.7818V66.5397H34.3348V65.9377C34.3348 65.6437 34.4118 65.415 34.5658 65.2517C34.7198 65.0837 34.9508 64.9997 35.2588 64.9997H35.8608V65.6227H35.0978V66.5397H35.8608V67.1627H35.0978V70.1797H34.3348V67.1627ZM38.5897 69.5777H38.5617C38.529 69.6664 38.4847 69.7527 38.4287 69.8367C38.3773 69.9207 38.3097 69.9954 38.2257 70.0607C38.1463 70.1214 38.0483 70.1704 37.9317 70.2077C37.8197 70.245 37.689 70.2637 37.5397 70.2637C37.1617 70.2637 36.8677 70.1424 36.6577 69.8997C36.4523 69.657 36.3497 69.3094 36.3497 68.8567V66.5397H37.1127V68.7587C37.1127 69.3234 37.346 69.6057 37.8127 69.6057C37.9107 69.6057 38.0063 69.594 38.0997 69.5707C38.193 69.5427 38.2747 69.503 38.3447 69.4517C38.4193 69.4004 38.4777 69.335 38.5197 69.2557C38.5663 69.1764 38.5897 69.083 38.5897 68.9757V66.5397H39.3527V70.1797H38.5897V69.5777ZM41.0822 70.1797C40.8209 70.1797 40.6249 70.1144 40.4942 69.9837C40.3682 69.8484 40.3052 69.6617 40.3052 69.4237V64.9997H41.0682V69.5567H41.5722V70.1797H41.0822ZM42.3503 67.1627H41.7973V66.5397H42.3503V65.9377C42.3503 65.6437 42.4273 65.415 42.5813 65.2517C42.7353 65.0837 42.9663 64.9997 43.2743 64.9997H43.8763V65.6227H43.1133V66.5397H45.2763V70.1797H44.5133V67.1627H43.1133V70.1797H42.3503V67.1627ZM44.8983 65.8887C44.7396 65.8887 44.623 65.8514 44.5483 65.7767C44.4783 65.702 44.4433 65.6064 44.4433 65.4897V65.3707C44.4433 65.254 44.4783 65.1584 44.5483 65.0837C44.623 65.009 44.7396 64.9717 44.8983 64.9717C45.057 64.9717 45.1713 65.009 45.2413 65.0837C45.3113 65.1584 45.3463 65.254 45.3463 65.3707V65.4897C45.3463 65.6064 45.3113 65.702 45.2413 65.7767C45.1713 65.8514 45.057 65.8887 44.8983 65.8887ZM47.0024 70.1797C46.7411 70.1797 46.5451 70.1144 46.4144 69.9837C46.2884 69.8484 46.2254 69.6617 46.2254 69.4237V64.9997H46.9884V69.5567H47.4924V70.1797H47.0024ZM48.8175 70.1797C48.5562 70.1797 48.3602 70.1144 48.2295 69.9837C48.1035 69.8484 48.0405 69.6617 48.0405 69.4237V64.9997H48.8035V69.5567H49.3075V70.1797H48.8175ZM49.8966 70.1797V66.5397H50.6596V67.1417H50.6946C50.7319 67.0484 50.7763 66.9597 50.8276 66.8757C50.8836 66.7917 50.9489 66.7194 51.0236 66.6587C51.1029 66.5934 51.1939 66.5444 51.2966 66.5117C51.4039 66.4744 51.5276 66.4557 51.6676 66.4557C51.9149 66.4557 52.1343 66.5164 52.3256 66.6377C52.5169 66.759 52.6569 66.9457 52.7456 67.1977H52.7666C52.8319 66.9924 52.9579 66.8174 53.1446 66.6727C53.3313 66.528 53.5716 66.4557 53.8656 66.4557C54.2296 66.4557 54.5119 66.5794 54.7126 66.8267C54.9133 67.0694 55.0136 67.417 55.0136 67.8697V70.1797H54.2506V67.9607C54.2506 67.6807 54.1969 67.4707 54.0896 67.3307C53.9823 67.186 53.8119 67.1137 53.5786 67.1137C53.4806 67.1137 53.3873 67.1277 53.2986 67.1557C53.2099 67.179 53.1306 67.2164 53.0606 67.2677C52.9953 67.319 52.9416 67.3844 52.8996 67.4637C52.8576 67.543 52.8366 67.634 52.8366 67.7367V70.1797H52.0736V67.9607C52.0736 67.396 51.8519 67.1137 51.4086 67.1137C51.3153 67.1137 51.2219 67.1277 51.1286 67.1557C51.0399 67.179 50.9606 67.2164 50.8906 67.2677C50.8206 67.319 50.7646 67.3844 50.7226 67.4637C50.6806 67.543 50.6596 67.634 50.6596 67.7367V70.1797H49.8966ZM57.3574 70.2637C57.0961 70.2637 56.8628 70.2194 56.6574 70.1307C56.4521 70.042 56.2771 69.916 56.1324 69.7527C55.9878 69.5847 55.8758 69.384 55.7964 69.1507C55.7218 68.9127 55.6844 68.649 55.6844 68.3597C55.6844 68.0704 55.7218 67.809 55.7964 67.5757C55.8758 67.3377 55.9878 67.137 56.1324 66.9737C56.2771 66.8057 56.4521 66.6774 56.6574 66.5887C56.8628 66.5 57.0961 66.4557 57.3574 66.4557C57.6234 66.4557 57.8568 66.5024 58.0574 66.5957C58.2628 66.689 58.4331 66.8197 58.5684 66.9877C58.7038 67.151 58.8041 67.3424 58.8694 67.5617C58.9394 67.781 58.9744 68.0167 58.9744 68.2687V68.5557H56.4754V68.6747C56.4754 68.9547 56.5571 69.1857 56.7204 69.3677C56.8884 69.545 57.1264 69.6337 57.4344 69.6337C57.6584 69.6337 57.8474 69.5847 58.0014 69.4867C58.1554 69.3887 58.2861 69.2557 58.3934 69.0877L58.8414 69.5287C58.7061 69.7527 58.5101 69.9324 58.2534 70.0677C57.9968 70.1984 57.6981 70.2637 57.3574 70.2637ZM57.3574 67.0507C57.2268 67.0507 57.1054 67.074 56.9934 67.1207C56.8861 67.1674 56.7928 67.2327 56.7134 67.3167C56.6388 67.4007 56.5804 67.501 56.5384 67.6177C56.4964 67.7344 56.4754 67.8627 56.4754 68.0027V68.0517H58.1694V67.9817C58.1694 67.7017 58.0971 67.4777 57.9524 67.3097C57.8078 67.137 57.6094 67.0507 57.3574 67.0507ZM59.6791 70.1797V66.5397H60.4421V67.1417H60.4771C60.5564 66.9457 60.6754 66.7824 60.8341 66.6517C60.9974 66.521 61.2191 66.4557 61.4991 66.4557C61.8724 66.4557 62.1618 66.5794 62.3671 66.8267C62.5771 67.0694 62.6821 67.417 62.6821 67.8697V70.1797H61.9191V67.9677C61.9191 67.3984 61.6904 67.1137 61.2331 67.1137C61.1351 67.1137 61.0371 67.1277 60.9391 67.1557C60.8458 67.179 60.7618 67.2164 60.6871 67.2677C60.6124 67.319 60.5518 67.3844 60.5051 67.4637C60.4631 67.543 60.4421 67.6364 60.4421 67.7437V70.1797H59.6791ZM64.6076 70.1797C64.3416 70.1797 64.141 70.112 64.0056 69.9767C63.8703 69.8367 63.8026 69.6407 63.8026 69.3887V67.1627H63.2356V66.5397H63.5436C63.6696 66.5397 63.756 66.5117 63.8026 66.4557C63.854 66.3997 63.8796 66.3087 63.8796 66.1827V65.5457H64.5656V66.5397H65.3286V67.1627H64.5656V69.5567H65.2726V70.1797H64.6076ZM68.3776 70.1797H67.5866V65.2937H69.6936C70.1322 65.2937 70.4776 65.4267 70.7296 65.6927C70.9816 65.954 71.1076 66.311 71.1076 66.7637C71.1076 67.1137 71.0259 67.4054 70.8626 67.6387C70.7039 67.8674 70.4682 68.0284 70.1556 68.1217L71.2126 70.1797H70.3306L69.3506 68.2057H68.3776V70.1797ZM69.6376 67.5407C69.8382 67.5407 69.9946 67.4894 70.1066 67.3867C70.2186 67.2794 70.2746 67.1277 70.2746 66.9317V66.5957C70.2746 66.3997 70.2186 66.2504 70.1066 66.1477C69.9946 66.0404 69.8382 65.9867 69.6376 65.9867H68.3776V67.5407H69.6376ZM74.5761 70.1797C74.3755 70.1797 74.2215 70.1237 74.1141 70.0117C74.0068 69.895 73.9415 69.748 73.9181 69.5707H73.8831C73.8131 69.7994 73.6848 69.972 73.4981 70.0887C73.3115 70.2054 73.0851 70.2637 72.8191 70.2637C72.4411 70.2637 72.1495 70.1657 71.9441 69.9697C71.7435 69.7737 71.6431 69.51 71.6431 69.1787C71.6431 68.8147 71.7738 68.5417 72.0351 68.3597C72.3011 68.1777 72.6885 68.0867 73.1971 68.0867H73.8551V67.7787C73.8551 67.5547 73.7945 67.382 73.6731 67.2607C73.5518 67.1394 73.3628 67.0787 73.1061 67.0787C72.8915 67.0787 72.7165 67.1254 72.5811 67.2187C72.4458 67.312 72.3315 67.431 72.2381 67.5757L71.7831 67.1627C71.9045 66.9574 72.0748 66.7894 72.2941 66.6587C72.5135 66.5234 72.8005 66.4557 73.1551 66.4557C73.6265 66.4557 73.9881 66.5654 74.2401 66.7847C74.4921 67.004 74.6181 67.319 74.6181 67.7297V69.5567H75.0031V70.1797H74.5761ZM73.0361 69.6827C73.2741 69.6827 73.4701 69.6314 73.6241 69.5287C73.7781 69.4214 73.8551 69.279 73.8551 69.1017V68.5767H73.2111C72.6838 68.5767 72.4201 68.74 72.4201 69.0667V69.1927C72.4201 69.356 72.4738 69.4797 72.5811 69.5637C72.6931 69.643 72.8448 69.6827 73.0361 69.6827ZM76.5984 70.1797C76.3324 70.1797 76.1318 70.112 75.9964 69.9767C75.8611 69.8367 75.7934 69.6407 75.7934 69.3887V67.1627H75.2264V66.5397H75.5344C75.6604 66.5397 75.7468 66.5117 75.7934 66.4557C75.8448 66.3997 75.8704 66.3087 75.8704 66.1827V65.5457H76.5564V66.5397H77.3194V67.1627H76.5564V69.5567H77.2634V70.1797H76.5984ZM79.4077 70.2637C79.1464 70.2637 78.913 70.2194 78.7077 70.1307C78.5024 70.042 78.3274 69.916 78.1827 69.7527C78.038 69.5847 77.926 69.384 77.8467 69.1507C77.772 68.9127 77.7347 68.649 77.7347 68.3597C77.7347 68.0704 77.772 67.809 77.8467 67.5757C77.926 67.3377 78.038 67.137 78.1827 66.9737C78.3274 66.8057 78.5024 66.6774 78.7077 66.5887C78.913 66.5 79.1464 66.4557 79.4077 66.4557C79.6737 66.4557 79.907 66.5024 80.1077 66.5957C80.313 66.689 80.4834 66.8197 80.6187 66.9877C80.754 67.151 80.8544 67.3424 80.9197 67.5617C80.9897 67.781 81.0247 68.0167 81.0247 68.2687V68.5557H78.5257V68.6747C78.5257 68.9547 78.6074 69.1857 78.7707 69.3677C78.9387 69.545 79.1767 69.6337 79.4847 69.6337C79.7087 69.6337 79.8977 69.5847 80.0517 69.4867C80.2057 69.3887 80.3364 69.2557 80.4437 69.0877L80.8917 69.5287C80.7564 69.7527 80.5604 69.9324 80.3037 70.0677C80.047 70.1984 79.7484 70.2637 79.4077 70.2637ZM79.4077 67.0507C79.277 67.0507 79.1557 67.074 79.0437 67.1207C78.9364 67.1674 78.843 67.2327 78.7637 67.3167C78.689 67.4007 78.6307 67.501 78.5887 67.6177C78.5467 67.7344 78.5257 67.8627 78.5257 68.0027V68.0517H80.2197V67.9817C80.2197 67.7017 80.1474 67.4777 80.0027 67.3097C79.858 67.137 79.6597 67.0507 79.4077 67.0507Z"
          fill="#31CDCD"
        />
      </g>
      <defs>
        <clipPath id="clip0_1708_17305">
          <rect width="100" height="100" fill="white" transform="translate(0.671875 0.929688)" />
        </clipPath>
        <clipPath id="clip1_1708_17305">
          <rect width="19" height="23.75" fill="white" transform="translate(42.2969 20.9297)" />
        </clipPath>
      </defs>
    </svg>
  );
}
