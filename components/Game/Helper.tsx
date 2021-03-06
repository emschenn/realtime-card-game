import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Popup.module.scss";

interface IProps {
  closeHelper: () => void;
  config: {
    id: number;
    text: string;
  };
}

/*******************
 * 0: start
 * 1: receive card
 * 2: people out
 *******************/

const helperConfig = {
  0: {
    svg: () => (
      <svg
        width="82"
        height="100"
        viewBox="0 0 82 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="15.5144"
          width="62.2168"
          height="87.1035"
          rx="5"
          transform="rotate(-14.4396 0 15.5144)"
          fill="#5E493C"
        />
        <path
          d="M45.2674 67.6354C44.2405 67.8814 43.3027 67.7441 42.4541 67.2234C41.598 66.6717 41.0395 65.8512 40.7786 64.762C40.5177 63.6728 40.6439 62.6883 41.1571 61.8086C41.6628 60.8977 42.4292 60.3193 43.4561 60.0733C44.4519 59.8348 45.3934 59.9877 46.2806 60.532C47.1442 61.1149 47.7064 61.9509 47.9673 63.0401C48.2282 64.1293 48.102 65.1138 47.5888 65.9935C47.0682 66.8421 46.2944 67.3894 45.2674 67.6354ZM42.2611 56.1148C41.5765 56.2788 40.9685 56.1447 40.4373 55.7126C39.9446 55.3041 39.5932 54.7301 39.3832 53.9907C39.2494 52.6079 39.4268 51.1504 39.9154 49.6185C40.1884 48.6976 40.7484 47.3953 41.5955 45.7116C42.348 44.1823 42.8327 43.0461 43.0496 42.3032C43.4185 41.096 43.4875 40.0101 43.2564 39.0454C42.9359 37.7072 42.2897 36.7268 41.3179 36.104C40.269 35.4339 39.0288 35.2703 37.5972 35.6132C36.1657 35.9561 34.9357 36.7278 33.9071 37.9285C33.0564 39.1852 32.0095 39.4853 30.7664 38.8288C29.5469 38.1338 29.304 37.1883 30.0377 35.9926C31.8871 33.4107 34.2589 31.7732 37.1531 31.08C39.9227 30.4166 42.3111 30.6342 44.3183 31.7329C46.3951 32.8478 47.754 34.7434 48.3951 37.4197C48.7529 38.9134 48.6831 40.4767 48.1857 42.1094C47.8891 43.0689 47.2736 44.4832 46.3393 46.3523L46.2683 46.468C46.2446 46.5066 46.2091 46.5644 46.1618 46.6416C45.5276 47.9781 45.0947 48.9867 44.8629 49.6674C44.4715 50.7812 44.2906 51.8117 44.3201 52.7589C44.4591 53.614 44.3548 54.3464 44.0073 54.9562C43.6523 55.5348 43.0703 55.921 42.2611 56.1148Z"
          fill="white"
        />
      </svg>
    ),
  },
  1: {
    svg: () => (
      <svg
        width="89"
        height="89"
        viewBox="0 0 89 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="44.223"
          width="62.5408"
          height="62.5408"
          transform="rotate(45 44.223 0)"
          fill="#5E493C"
        />
        <path
          d="M43.04 62.624C41.984 62.624 41.104 62.272 40.4 61.568C39.696 60.832 39.344 59.904 39.344 58.784C39.344 57.664 39.696 56.736 40.4 56C41.104 55.232 41.984 54.848 43.04 54.848C44.064 54.848 44.944 55.216 45.68 55.952C46.384 56.72 46.736 57.664 46.736 58.784C46.736 59.904 46.384 60.832 45.68 61.568C44.976 62.272 44.096 62.624 43.04 62.624ZM42.8 50.72C42.096 50.72 41.536 50.448 41.12 49.904C40.736 49.392 40.528 48.752 40.496 47.984C40.688 46.608 41.2 45.232 42.032 43.856C42.512 43.024 43.36 41.888 44.576 40.448C45.664 39.136 46.4 38.144 46.784 37.472C47.424 36.384 47.744 35.344 47.744 34.352C47.744 32.976 47.344 31.872 46.544 31.04C45.68 30.144 44.512 29.696 43.04 29.696C41.568 29.696 40.192 30.16 38.912 31.088C37.792 32.112 36.704 32.16 35.648 31.232C34.624 30.272 34.608 29.296 35.6 28.304C38 26.224 40.688 25.184 43.664 25.184C46.512 25.184 48.784 25.952 50.48 27.488C52.24 29.056 53.12 31.216 53.12 33.968C53.12 35.504 52.688 37.008 51.824 38.48C51.312 39.344 50.384 40.576 49.04 42.176L48.944 42.272C48.912 42.304 48.864 42.352 48.8 42.416C47.872 43.568 47.216 44.448 46.832 45.056C46.192 46.048 45.776 47.008 45.584 47.936C45.52 48.8 45.248 49.488 44.768 50C44.288 50.48 43.632 50.72 42.8 50.72Z"
          fill="white"
        />
      </svg>
    ),
  },
  2: {
    svg: () => (
      <svg
        width="84"
        height="84"
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 84C7 84 0 84 0 77C0 70 7 49 42 49C77 49 84 70 84 77C84 84 77 84 77 84H7ZM42 42C47.5695 42 52.911 39.7875 56.8492 35.8492C60.7875 31.911 63 26.5695 63 21C63 15.4305 60.7875 10.089 56.8492 6.15076C52.911 2.21249 47.5695 0 42 0C36.4305 0 31.089 2.21249 27.1508 6.15076C23.2125 10.089 21 15.4305 21 21C21 26.5695 23.2125 31.911 27.1508 35.8492C31.089 39.7875 36.4305 42 42 42Z"
          fill="#5E493C"
        />
        <circle cx="42" cy="31" r="31" fill="#5E493C" />
        <line
          x1="26.1213"
          y1="21"
          x2="36"
          y2="30.8787"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="25.5"
          y1="30.8787"
          x2="35.3787"
          y2="21"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="49.1213"
          y1="21"
          x2="59"
          y2="30.8787"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="48.5"
          y1="30.8787"
          x2="58.3787"
          y2="21"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="32.5"
          y1="40.5"
          x2="52.3695"
          y2="40.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};
const Helper = ({ config, closeHelper }: IProps) => {
  useEffect(() => {
    const time = config?.id === 0 ? 6500 : 4500;
    setTimeout(() => {
      closeHelper();
    }, time);
  }, []);

  return (
    <motion.div
      className={styles.helper}
      initial={{ right: -600 }}
      animate={{
        right: 0,
        transition: { delay: config?.id === 0 ? 2 : 0 },
      }}
      exit={{ right: -600, transition: { duration: 1 } }}
    >
      {helperConfig[config.id]?.svg()}
      <p>{config.text}</p>
    </motion.div>
  );
};

export default Helper;
