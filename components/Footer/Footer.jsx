import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <svg
                        width="165"
                        height="24"
                        viewBox="0 0 165 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_199_101)">
                            <path
                                d="M82.1887 20.7482C82.3721 21.6125 82.9752 22.0903 83.8396 22.2487C84.9203 22.4061 86.0236 22.3328 87.0718 22.0339C87.8333 21.8541 88.1696 21.2287 87.9862 20.4825C87.9616 20.3151 87.8832 20.1595 87.762 20.0376C87.6408 19.9157 87.4829 19.8338 87.3108 19.8033C86.8773 19.7148 86.5743 19.8785 86.3131 20.2623C86.2471 20.3729 86.1412 20.4561 86.0157 20.4959C85.4765 20.5442 84.929 20.5683 84.3843 20.5791C84.3159 20.5865 84.2467 20.5802 84.1809 20.5607C84.1152 20.5411 84.0543 20.5086 84.0022 20.4653C83.95 20.422 83.9076 20.3687 83.8777 20.3088C83.8479 20.249 83.8311 20.1838 83.8284 20.1174C83.6728 19.1484 83.4282 18.1901 83.3671 17.2184C83.3004 16.1099 83.3838 14.9905 83.431 13.8793C83.4505 13.3934 83.5422 12.9103 83.6061 12.3868C83.8328 12.403 84.0604 12.403 84.287 12.3868C84.8994 12.3189 85.5072 12.2167 86.1074 12.0808C86.3059 12.0206 86.4747 11.8925 86.5822 11.7204C86.6897 11.5484 86.7284 11.3444 86.691 11.1467C86.6566 10.9434 86.5462 10.7594 86.3809 10.6293C86.2155 10.4992 86.0065 10.4322 85.7934 10.4408C85.5849 10.4408 85.3737 10.4811 85.1625 10.4837C84.6956 10.4837 84.2287 10.4837 83.7729 10.4837C83.7565 10.456 83.7443 10.4262 83.7367 10.3952C83.8062 8.76852 83.8868 7.14457 83.9368 5.51793C83.9368 5.15556 83.9757 4.91667 84.4371 4.95425C84.6597 4.95483 84.8819 4.93687 85.1013 4.90056C85.6155 4.85225 86.138 4.82003 86.6521 4.74756C86.8474 4.70399 87.022 4.59876 87.1484 4.44853C87.2747 4.2983 87.3456 4.11165 87.3497 3.91814C87.3446 3.77148 87.2861 3.63128 87.1844 3.52226C87.0827 3.41324 86.9444 3.3424 86.7939 3.32224C85.9796 3.29271 85.1625 3.29003 84.3482 3.29808C84.24 3.31307 84.1298 3.30313 84.0264 3.26907C83.9231 3.23501 83.8295 3.17781 83.7534 3.10214C83.659 3.00473 83.5411 2.9315 83.4101 2.88902C83.2792 2.84655 83.1394 2.83615 83.0033 2.85877C82.8671 2.88139 82.739 2.93632 82.6303 3.01862C82.5215 3.10093 82.4357 3.20802 82.3805 3.33029C82.3268 3.45086 82.2577 3.56448 82.1748 3.66851C82.0628 3.78364 81.9891 3.92859 81.9634 4.08459C81.9376 4.2406 81.9609 4.40049 82.0303 4.54356C82.1761 4.89511 82.2193 5.27852 82.1554 5.65214C82.0831 7.10967 82.047 8.56989 81.983 10.0274C81.9497 10.7709 81.8858 11.5091 81.8274 12.2473C81.7357 13.4149 81.5967 14.5799 81.5495 15.7368C81.4828 17.4332 81.8274 19.0893 82.1804 20.7428"
                                fill="#9DCECA"
                            />
                            <path
                                d="M67.9573 2.01706C66.5833 2.32415 65.2178 2.66896 63.8579 3.03532C63.7348 3.06336 63.6195 3.11679 63.5201 3.19187C63.4208 3.26696 63.3396 3.3619 63.2824 3.47009C63.2252 3.57829 63.1932 3.69714 63.1888 3.81837C63.1843 3.93961 63.2075 4.06032 63.2566 4.17211C63.4168 4.62467 63.9056 4.81324 64.462 4.63814C64.7907 4.53308 65.1223 4.4361 65.5072 4.32027C65.5072 4.525 65.5072 4.66777 65.5072 4.81055C65.5072 5.41396 65.5072 6.01468 65.524 6.6154C65.6111 8.48491 65.7348 10.3544 65.805 12.2266C65.8359 13.2233 65.7573 14.22 65.7516 15.2194C65.7516 16.8546 65.7516 18.4951 65.7516 20.1303C65.7497 20.2509 65.7563 20.3715 65.7713 20.4912C65.8359 20.9061 65.7011 21.0435 65.2599 21.0031C65.111 20.9896 64.9649 20.9411 64.816 20.9384C64.5947 20.9303 64.379 21.006 64.2155 21.1492C64.052 21.2924 63.9538 21.4915 63.9422 21.7035C63.9057 22.2799 64.2231 22.781 64.7092 22.8187C65.3948 22.8645 66.086 22.878 66.7744 22.8941C66.9823 22.8941 67.1958 22.8268 67.4066 22.8295C68.331 22.8456 69.2582 22.8806 70.1854 22.8914C70.346 22.8838 70.5006 22.8304 70.6293 22.7379C70.8145 22.6329 70.9568 22.4705 71.0329 22.2776C71.109 22.0847 71.1143 21.8727 71.0479 21.6765C70.8962 21.224 70.5843 21.0246 70.0084 21.0192C69.32 21.0192 68.6288 21.0058 67.9376 21.0192C67.71 21.0192 67.5779 20.9546 67.5667 20.7229C67.5442 20.2919 67.488 19.8609 67.4937 19.4299C67.5077 18.0345 67.5723 16.6391 67.5583 15.2464C67.5358 13.0348 67.4543 10.8231 67.4178 8.61152C67.3981 7.33465 67.4178 6.05778 67.4178 4.78091C67.4178 3.91351 67.4178 3.91351 68.286 3.70339C68.8845 3.55523 69.2048 3.16463 69.1289 2.72553C69.0221 2.18677 68.6204 1.89315 67.9825 2.03592"
                                fill="#9DCECA"
                            />
                            <path
                                d="M73.6498 3.30023C72.9507 3.66282 72.874 4.33695 73.4764 4.82039C73.5867 4.90608 73.6613 5.02601 73.6867 5.1588C73.7293 5.73088 73.7407 6.30564 73.7634 6.8804C73.7919 7.58676 73.8174 8.29313 73.8544 8.99949C73.9481 10.7882 74.0845 12.5823 74.1385 14.3711C74.201 16.552 74.1954 18.7355 74.2266 20.9164C74.2298 21.1092 74.2603 21.3007 74.3175 21.4858C74.3992 21.6944 74.5633 21.865 74.7752 21.9617C74.9872 22.0583 75.2306 22.0736 75.4542 22.0041C75.6856 21.9447 75.8855 21.8065 76.0156 21.6161C76.1457 21.4257 76.1967 21.1966 76.1589 20.9728C76.0751 20.5873 76.0181 20.197 75.9884 19.8045C75.9486 19.3989 75.9344 18.9987 75.9287 18.5851C75.9287 17.5752 75.9287 16.5708 75.9287 15.5636C75.9287 15.0963 75.9458 14.6316 75.9287 14.167C75.9032 13.3908 75.8577 12.6173 75.8264 11.8975C76.3948 11.8975 76.9176 11.8975 77.4348 11.8975C77.5647 11.8971 77.6934 11.8725 77.8132 11.825C77.9331 11.7775 78.0418 11.7081 78.1332 11.6207C78.2246 11.5333 78.2968 11.4298 78.3456 11.3159C78.3945 11.2021 78.4191 11.0803 78.418 10.9574C78.4226 10.8343 78.4007 10.7115 78.3537 10.5966C78.3066 10.4816 78.2354 10.3769 78.1442 10.2888C78.0531 10.2007 77.944 10.1309 77.8235 10.0838C77.703 10.0367 77.5737 10.0132 77.4433 10.0147C77.0853 10.0147 76.7301 10.0147 76.3749 10.0147C75.9088 9.99324 75.69 9.81329 75.6787 9.45877C75.6218 7.95203 75.5792 6.4453 75.5167 4.93589C75.5167 4.66731 75.5934 4.52227 75.8918 4.47393C76.8778 4.31815 77.8582 4.14357 78.8385 3.97705C79.0342 3.94917 79.2135 3.8578 79.3457 3.71863C79.4779 3.57947 79.5548 3.40116 79.5631 3.21429C79.5944 2.56701 79.1483 2.21517 78.3839 2.31723C77.6195 2.41929 76.7869 2.5509 75.9912 2.69593C75.8988 2.72903 75.7976 2.73278 75.7027 2.70661C75.6078 2.68044 75.5246 2.62578 75.4655 2.5509C75.3486 2.42982 75.1961 2.34446 75.0275 2.30571C74.859 2.26696 74.682 2.27658 74.5193 2.33335C74.3583 2.37328 74.2136 2.45776 74.1037 2.57596C73.9938 2.69416 73.9238 2.84068 73.9027 2.99674C73.8603 3.12593 73.768 3.23527 73.6441 3.30292"
                                fill="#9DCECA"
                            />
                            <path
                                d="M55.0227 8.16452C55.0227 8.90258 55.1161 9.64333 55.187 10.3787C55.3258 11.8548 55.5241 13.331 55.6062 14.8044C55.677 16.0846 55.6232 17.3702 55.6062 18.6531C55.6062 19.0262 55.5354 19.3965 55.5496 19.7642C55.5722 20.3601 55.6487 20.9532 55.6827 21.5517C55.6862 21.7136 55.7289 21.8725 55.8075 22.0163C55.886 22.1601 55.9984 22.2849 56.1359 22.381C56.5647 22.7378 57.1242 22.9209 57.694 22.8909C58.2237 22.797 58.7591 22.7299 59.2831 22.6038C59.76 22.4995 60.2249 22.3512 60.6712 22.1609C60.7829 22.1169 60.8838 22.0514 60.9675 21.9686C61.0513 21.8859 61.1161 21.7876 61.1578 21.68C61.1996 21.5724 61.2174 21.4578 61.2102 21.3433C61.203 21.2289 61.1709 21.1171 61.1159 21.0149C60.9148 20.5989 60.4502 20.4486 59.9318 20.5909C59.2043 20.8355 58.4376 20.959 57.6656 20.9559C57.4418 20.9425 57.3314 20.878 57.354 20.6606C57.3767 20.4433 57.422 20.2366 57.4305 20.0246C57.4834 18.3964 57.5334 16.7681 57.5806 15.1399C57.5776 15.0093 57.5634 14.8792 57.5382 14.7507C57.4503 14.0637 57.3597 13.3766 57.2832 12.6895C57.1897 11.8468 57.0877 11.0014 57.0311 10.156C56.9688 9.17902 56.9008 8.19672 56.9206 7.20369C56.9433 5.99863 57.0679 4.78821 57.1246 3.58851C57.1465 3.28348 57.046 2.98185 56.8433 2.74399C56.6405 2.50612 56.3505 2.34956 56.0311 2.30562C55.9272 2.27889 55.8183 2.27513 55.7126 2.29464C55.607 2.31414 55.5075 2.35639 55.4218 2.41812C55.3361 2.47985 55.2665 2.55941 55.2184 2.65066C55.1704 2.7419 55.145 2.8424 55.1445 2.94438C55.0906 4.68085 55.017 6.41463 55 8.1511"
                                fill="#9DCECA"
                            />
                            <path
                                d="M46.5178 0.818824C46.5182 0.609725 46.4385 0.408409 46.2952 0.256158C46.1519 0.103907 45.9557 0.0122573 45.747 0C45.5223 0 45.3069 0.0892428 45.148 0.248097C44.9892 0.406951 44.8999 0.622403 44.8999 0.847057C44.8322 2.15435 44.7672 3.45882 44.6797 4.76329C44.5696 6.38118 44.4115 7.99623 44.3183 9.61412C44.2533 10.8085 44.259 12.0085 44.2307 13.2056C44.2307 13.344 44.2053 13.488 44.194 13.6207C44.0643 13.5012 43.9671 13.3505 43.9117 13.1831C43.6124 12.2739 43.3046 11.3675 43.0223 10.4555C42.3107 8.15153 41.6105 5.83906 40.9018 3.53224C40.7014 2.92958 40.3331 2.39669 39.8402 1.99624C39.3009 1.536 38.7418 1.67435 38.5611 2.35482C38.3883 2.9583 38.2869 3.57996 38.259 4.20706C38.2279 5.33647 38.2929 6.46588 38.3183 7.60941C38.3409 8.82071 38.3973 10.0292 38.3832 11.2405C38.3832 12.6522 38.2929 14.064 38.2562 15.4758C38.2195 16.8875 38.1686 18.3755 38.1799 19.824C38.1955 20.5025 38.2663 21.1786 38.3917 21.8456C38.4246 22.0604 38.5388 22.2543 38.7106 22.3873C38.8825 22.5202 39.0988 22.5821 39.315 22.56C39.4257 22.5513 39.5335 22.5203 39.6318 22.4688C39.7302 22.4173 39.8171 22.3463 39.8873 22.2603C39.9575 22.1743 40.0095 22.0749 40.0402 21.9682C40.071 21.8615 40.0797 21.7497 40.066 21.6395C40.0378 20.9478 39.9249 20.2588 39.9305 19.5699C39.9446 18.1976 40.0237 16.8254 40.0576 15.4532C40.0933 13.84 40.1197 12.2268 40.1366 10.6136C40.1507 9.39106 40.1366 8.1713 40.1366 6.92612C40.3399 7.60659 40.5404 8.26729 40.7409 8.928C41.2209 10.5148 41.6133 12.1384 42.2091 13.6828C42.9735 15.6126 43.4749 17.6364 43.6999 19.6998C43.7524 20.272 43.8535 20.8388 44.002 21.3939C44.1573 21.936 44.6712 22.0264 44.9987 21.5746C45.4626 20.9878 45.7679 20.2917 45.8853 19.5529C45.9456 18.9638 45.9748 18.3719 45.9729 17.7798C45.9729 16.4696 45.9446 15.1539 45.9729 13.8268C46.0265 11.8165 46.1225 9.80329 46.2016 7.79012C46.2242 7.17459 46.2185 6.55341 46.2863 5.94353C46.4707 4.23905 46.5423 2.52427 46.5009 0.810354"
                                fill="#9DCECA"
                            />
                            <path
                                d="M26.4001 20.8179C26.3832 20.7304 26.3804 20.6428 26.3691 20.5553C26.2533 19.5953 26.1658 18.6325 26.0161 17.6753C25.8947 16.8847 25.6858 16.1054 25.5418 15.3177C25.5204 15.1639 25.4675 15.0162 25.3865 14.8838C25.3055 14.7514 25.198 14.6371 25.0708 14.548C24.9436 14.459 24.7995 14.3972 24.6473 14.3664C24.4952 14.3355 24.3383 14.3364 24.1865 14.369C23.9409 14.4113 23.6896 14.4198 23.4383 14.4537C23.187 14.4875 22.8058 14.4311 22.6392 14.5864C22.2354 14.9591 21.8543 15.1652 21.3206 14.9167C21.2459 14.9013 21.1684 14.9082 21.0976 14.9365C20.9169 14.9814 20.7609 15.0951 20.6628 15.2533C20.5648 15.4115 20.5323 15.6018 20.5724 15.7835C20.6111 15.9942 20.7281 16.1824 20.8999 16.3102C21.0718 16.438 21.2856 16.496 21.4985 16.4725C22.1228 16.4387 22.7394 16.319 23.331 16.1167C23.7573 15.9614 23.8477 16.0518 23.859 16.4894C23.859 16.6278 23.859 16.7718 23.8816 16.9045C24.0044 17.8292 23.9595 18.7685 23.7489 19.6772C23.706 19.8615 23.6074 20.0281 23.4665 20.1544C23.0711 20.4347 22.6026 20.5939 22.1183 20.6125C21.6339 20.631 21.1546 20.5081 20.739 20.2588C19.9937 19.6997 19.489 18.878 19.3272 17.9605C19.0872 16.8593 18.9178 15.7384 18.7794 14.6203C18.6411 13.5021 18.5366 12.3445 18.4971 11.201C18.4293 9.45884 18.7484 7.74495 19.0618 6.03954C19.2453 5.00613 19.5305 3.98966 20.3013 3.21601C20.7587 2.75013 21.2077 2.23343 21.9728 2.36895C22.1564 2.39719 22.3343 2.46213 22.5178 2.50166C22.737 2.5731 22.9753 2.55719 23.1831 2.45725C23.3909 2.35731 23.5521 2.18104 23.6331 1.96519C23.7089 1.7556 23.7028 1.52508 23.6159 1.31983C23.529 1.11458 23.3677 0.94975 23.1644 0.858369C22.0547 0.406604 20.9818 0.420722 19.9738 1.14072C18.9076 1.86276 18.122 2.92944 17.7489 4.1619C17.4661 5.12488 17.2491 6.10596 17.0994 7.09837C16.9231 8.22717 16.81 9.36494 16.7606 10.5064C16.7533 11.3874 16.7995 12.2681 16.899 13.1435C17.0063 14.4057 17.1051 15.6847 17.2886 16.9271C17.427 18.1834 17.8416 19.3934 18.5027 20.4706C19.0512 21.3615 19.9166 22.0117 20.925 22.2904C21.9334 22.5691 23.0099 22.4556 23.938 21.9727C24.2204 21.84 24.4604 21.6734 24.7343 21.5153C24.7907 21.5746 24.8416 21.6339 24.8924 21.6847C25.0266 21.8391 25.2114 21.9406 25.4137 21.9712C25.616 22.0017 25.8226 21.9592 25.9964 21.8513C26.1662 21.7525 26.2986 21.6004 26.3731 21.4187C26.4477 21.237 26.4601 21.0357 26.4086 20.8461"
                                fill="#9DCECA"
                            />
                            <path
                                d="M6.11026 0.220234C5.88928 0.280867 5.69271 0.408932 5.54796 0.586581C5.40321 0.76423 5.31748 0.982614 5.30273 1.21129C5.23497 1.776 5.18415 2.36047 5.14462 2.93647C5.03732 4.45553 4.94415 5.97459 4.8425 7.49082C4.79167 8.28424 4.7465 9.07482 4.67591 9.86259C4.56579 11.0654 4.43874 12.2654 4.31168 13.4626C4.23544 14.1939 4.14226 14.9252 4.05756 15.6536H3.97285C3.93897 15.5209 3.89944 15.3882 3.8712 15.2555C3.42226 12.9628 2.94509 10.6786 2.54415 8.37741C2.31262 7.04188 2.21379 5.68659 2.05003 4.33976C1.9512 3.51529 1.86085 2.69365 1.73097 1.872C1.65473 1.36941 1.21991 1.13223 0.601558 1.1887C0.268382 1.21976 0.00579417 1.584 0.000147112 2.03576C-0.00124469 2.19989 0.0072402 2.36395 0.0255578 2.52706C0.138499 3.41082 0.265559 4.29176 0.372853 5.17835C0.514029 6.32471 0.58744 7.48235 0.782264 8.62024C1.13238 10.6616 1.53897 12.6946 1.94556 14.7275C2.31544 16.5741 2.7192 18.4151 3.09191 20.2645C3.15968 20.6259 3.20485 20.9901 3.6058 21.1115C4.00674 21.2329 4.28344 20.928 4.53756 20.6626C4.58273 20.6146 4.61097 20.5581 4.65332 20.5129C5.25191 19.8551 5.32532 19.008 5.45238 18.1948C5.66415 16.8932 5.84203 15.5859 6.00015 14.2786C6.14697 13.056 6.25709 11.8306 6.37285 10.608C6.43779 9.88235 6.48015 9.15106 6.53379 8.42541C6.63262 7.07012 6.72015 5.71482 6.81615 4.36235C6.89803 3.36282 6.98556 2.36047 7.11262 1.36659C7.20297 0.646589 6.74556 0.104469 6.09897 0.237175"
                                fill="#9DCECA"
                            />
                            <path
                                d="M15.154 20.5779C15.1306 20.3951 15.0495 20.2246 14.9225 20.0911C14.7956 19.9576 14.6294 19.868 14.4481 19.8353C14.2483 19.7952 14.0408 19.8239 13.8594 19.9167C13.6779 20.0095 13.5332 20.1609 13.4486 20.3463C13.4142 20.4047 13.3681 20.4554 13.3132 20.4953C13.2583 20.5351 13.1958 20.5632 13.1296 20.5779C12.5281 20.623 11.9267 20.6343 11.3253 20.6597C11.2657 20.6702 11.2046 20.668 11.146 20.6533C11.0873 20.6386 11.0324 20.6117 10.9847 20.5745C10.9371 20.5372 10.8978 20.4904 10.8694 20.437C10.841 20.3836 10.8241 20.3248 10.8199 20.2644C10.7437 19.8211 10.6392 19.3807 10.5743 18.9346C10.4067 18.0716 10.3 17.1979 10.2552 16.32C10.2552 14.9506 10.3851 13.5811 10.467 12.2117C10.4633 12.1684 10.4689 12.1248 10.4835 12.0838C10.4981 12.0428 10.5213 12.0054 10.5515 11.9741C10.5817 11.9428 10.6183 11.9183 10.6587 11.9024C10.6992 11.8864 10.7426 11.8792 10.786 11.8814C11.4552 11.7995 12.1244 11.7007 12.7879 11.5736C13.0205 11.5192 13.2389 11.4163 13.4289 11.2715C13.5637 11.1729 13.6682 11.0383 13.7304 10.8832C13.7926 10.7281 13.8099 10.5587 13.7805 10.3942C13.7511 10.2297 13.676 10.0767 13.5639 9.95281C13.4519 9.82887 13.3072 9.7389 13.1465 9.69315C12.7992 9.61973 12.4434 9.56891 12.0905 9.52938C11.6529 9.47856 11.2152 9.45032 10.6985 9.40797C10.7211 9.14538 10.7578 8.90256 10.7691 8.65409C10.8256 7.14821 10.8783 5.65079 10.9272 4.16185C10.9441 3.59715 10.9498 3.58303 11.5201 3.55479C11.6726 3.55479 11.8223 3.55479 11.9747 3.55479C12.5394 3.51527 13.1042 3.47197 13.6689 3.42491C13.8601 3.41511 14.0423 3.34083 14.1859 3.21418C14.3294 3.08753 14.4259 2.91598 14.4594 2.7275C14.5027 2.54169 14.4931 2.34749 14.4317 2.16685C14.3704 1.98622 14.2597 1.82637 14.1121 1.70538C14.0258 1.60472 13.915 1.52795 13.7903 1.48246C13.6657 1.43697 13.5315 1.42429 13.4006 1.44562C12.6778 1.58115 11.9493 1.70256 11.218 1.79291C11.0379 1.79143 10.8637 1.72869 10.7239 1.61503C10.6185 1.52867 10.4947 1.46754 10.362 1.4363C10.2293 1.40506 10.0912 1.40454 9.95833 1.43477C9.82541 1.465 9.70116 1.52519 9.59505 1.61074C9.48893 1.6963 9.40376 1.80496 9.34603 1.92844C9.28691 2.06617 9.21105 2.19609 9.12015 2.31527C9.01032 2.43062 8.93803 2.57655 8.91283 2.73382C8.88762 2.89109 8.91069 3.05231 8.97897 3.19621C9.21897 3.61973 9.14556 4.02915 9.12015 4.46962C9.00156 6.66915 8.91403 8.8715 8.79827 11.0682C8.73897 12.1355 8.61756 13.2 8.57521 14.2673C8.52156 15.5463 8.51027 16.8282 8.5018 18.1073C8.48627 18.5482 8.5194 18.9894 8.60062 19.423C8.72203 19.9426 8.96203 20.4339 9.11732 20.9449C9.21077 21.2958 9.4022 21.6127 9.66922 21.8587C9.93623 22.1047 10.2678 22.2696 10.6251 22.3341C11.8004 22.5671 13.014 22.5216 14.1686 22.2014C14.3468 22.1727 14.5168 22.1061 14.667 22.006C14.8172 21.9059 14.9441 21.7747 15.0392 21.6213C15.1342 21.4679 15.1952 21.2958 15.2179 21.1167C15.2407 20.9377 15.2247 20.7558 15.171 20.5835"
                                fill="#9DCECA"
                            />
                            <path
                                d="M36.6269 22.8791C36.3022 21.6 35.9211 20.3379 35.6557 19.0447C35.4044 17.8221 35.0373 16.6052 35.2265 15.3261C35.2244 15.2145 35.2044 15.1039 35.1672 14.9986C35.0909 14.6315 34.9752 14.273 34.9357 13.9031C34.8114 12.6777 34.7239 11.4494 34.6081 10.2325C34.4698 8.73037 34.3597 7.22825 34.1592 5.73178C33.9926 4.50355 33.7328 3.2866 33.4702 2.06119C33.4466 1.82983 33.3331 1.61701 33.154 1.4686C32.975 1.32019 32.7448 1.24806 32.5131 1.26778C32.2695 1.25469 32.0302 1.33507 31.8439 1.49249C31.6576 1.64992 31.5384 1.87252 31.5107 2.11484C31.1324 3.75249 30.7794 5.39861 30.4011 7.03908C29.9352 9.0579 29.4128 11.0683 28.9893 13.0955C28.6166 14.8744 28.3258 16.6758 28.0406 18.4603C27.8825 19.4513 27.7582 20.4537 28.0208 21.456C28.0718 21.6851 28.2091 21.8857 28.4042 22.0161C28.5993 22.1465 28.8372 22.1967 29.0684 22.1563C29.1858 22.132 29.2972 22.0843 29.3958 22.016C29.4943 21.9476 29.578 21.86 29.6419 21.7585C29.7057 21.6569 29.7483 21.5435 29.7672 21.425C29.7861 21.3066 29.7808 21.1856 29.7517 21.0692C29.6648 20.6993 29.6287 20.3194 29.6444 19.9398C29.7545 18.9657 29.9408 18.0057 30.0622 17.0344C30.0621 16.9351 30.1001 16.8396 30.1685 16.7676C30.2368 16.6956 30.3302 16.6526 30.4293 16.6475L33.3658 16.1845C33.4787 16.9101 33.5634 17.568 33.6792 18.2231C33.9542 19.9485 34.3707 21.6483 34.9244 23.3054C34.9832 23.5462 35.1352 23.7537 35.347 23.8823C35.5588 24.011 35.813 24.0503 36.0538 23.9915C36.2778 23.9201 36.4647 23.7633 36.5741 23.5551C36.6834 23.347 36.7065 23.1041 36.6382 22.8791M32.8942 14.4875C32.1517 14.592 31.4091 14.7106 30.6637 14.8235C30.5864 14.8192 30.5097 14.8069 30.4349 14.7868L32.3832 6.3699H32.4622C32.5018 6.72284 32.547 7.0786 32.578 7.43437C32.6881 8.65978 32.7869 9.88519 32.8971 11.105C32.9874 12.1045 33.0815 13.104 33.1794 14.1035C33.2048 14.3379 33.1201 14.4452 32.8829 14.4763"
                                fill="#9DCECA"
                            />
                            <path
                                d="M137.062 4.25705C137.569 5.86496 138.181 7.4463 138.604 9.07637C139.405 11.9332 139.971 14.8572 140.294 17.8158C140.436 18.7037 140.695 19.5667 141.063 20.3805C141.151 20.6057 141.315 20.7893 141.523 20.897C141.732 21.0046 141.971 21.0289 142.195 20.9652C142.664 20.8766 142.778 20.4735 142.892 20.0572C143.551 17.5368 143.648 14.9278 143.906 12.3454C144.151 9.87812 144.463 7.41529 144.751 4.9569C144.869 4.25917 144.952 3.55538 145 2.84846C144.985 2.69075 144.937 2.53862 144.858 2.40356C144.778 2.2685 144.671 2.15405 144.544 2.06886C144.411 2.0129 144.268 1.99055 144.125 2.00364C143.983 2.01672 143.845 2.06487 143.724 2.14417C143.502 2.37426 143.361 2.67771 143.327 3.00348C143.133 4.22603 142.968 5.45744 142.833 6.68885C142.562 9.15167 142.317 11.6233 142.064 14.0862C142.005 14.6709 141.954 15.2511 141.899 15.8314C141.054 11.8448 140.298 7.85825 138.785 4.09316C138.718 3.92926 138.68 3.7565 138.6 3.60147C138.564 3.49856 138.51 3.40412 138.439 3.32377C138.368 3.24342 138.283 3.17881 138.188 3.13377C138.093 3.08872 137.99 3.06416 137.886 3.06157C137.782 3.05897 137.678 3.07839 137.581 3.11865C137.473 3.15318 137.373 3.21088 137.287 3.28813C137.2 3.36537 137.131 3.46049 137.081 3.56746C137.032 3.67443 137.005 3.79093 137.001 3.90962C136.996 4.02831 137.016 4.14661 137.057 4.25705"
                                fill="#9DCECA"
                            />
                            <path
                                d="M128.026 4.77314C128.092 5.0075 128.238 5.2041 128.432 5.32097C128.627 5.43784 128.855 5.46571 129.068 5.39865L130.172 5.14754C130.303 7.38478 130.468 9.517 130.538 11.6447C130.62 14.028 130.616 16.4159 130.662 18.7993C130.662 19.1782 130.538 19.3015 130.213 19.3061C129.869 19.2602 129.521 19.304 129.196 19.4339C129.061 19.5379 128.949 19.6738 128.868 19.8318C128.787 19.9897 128.738 20.1658 128.726 20.3471C128.761 20.5014 128.832 20.6428 128.932 20.7573C129.032 20.8719 129.157 20.9555 129.295 21C130.983 20.968 132.667 20.8813 134.351 20.7626C134.849 20.726 135.084 20.1964 134.973 19.5983C134.914 19.3838 134.787 19.2005 134.615 19.0835C134.442 18.9665 134.237 18.9238 134.038 18.9636C133.733 19.023 133.429 19.0961 133.124 19.16C132.42 19.297 132.226 19.128 132.226 18.3244C132.226 16.0415 132.226 13.7586 132.226 11.4757C132.226 11.1881 132.226 10.905 132.202 10.6174C132.103 8.9965 132.012 7.37564 131.889 5.75478C131.839 5.1247 132.037 4.87815 132.613 4.84162C132.729 4.84177 132.844 4.81356 132.949 4.75899C133.055 4.70443 133.148 4.62485 133.222 4.52591C133.296 4.42697 133.35 4.3111 133.379 4.18654C133.409 4.06198 133.413 3.93177 133.392 3.80519C133.375 3.67832 133.336 3.55646 133.276 3.44719C133.215 3.33792 133.135 3.24356 133.041 3.16994C132.946 3.09631 132.839 3.045 132.726 3.01919C132.613 2.99337 132.496 2.99361 132.383 3.01987L131.621 3.12944C130.625 3.29838 129.628 3.43536 128.644 3.64995C128.535 3.67699 128.432 3.72837 128.341 3.80097C128.251 3.87357 128.174 3.96586 128.117 4.07223C128.059 4.1786 128.022 4.29681 128.007 4.41967C127.992 4.54252 128 4.66745 128.03 4.78683"
                                fill="#9DCECA"
                            />
                            <path
                                d="M96.2825 4.43094C96.7874 4.80971 96.7117 5.22956 96.7369 5.68592C96.7723 6.31569 96.8379 6.94547 96.8631 7.57524C96.9641 9.93461 97.0651 12.294 97.1358 14.6534C97.2065 16.7937 97.2267 18.934 97.2822 21.0697C97.2793 21.2062 97.3103 21.3414 97.3728 21.4656C97.4354 21.5898 97.528 21.6997 97.6438 21.7872C97.7595 21.8748 97.8955 21.9378 98.0418 21.9716C98.1881 22.0054 98.3408 22.0091 98.4889 21.9824C98.6336 21.9651 98.7726 21.9203 98.8969 21.8512C99.0212 21.7821 99.128 21.6901 99.2104 21.5812C99.2928 21.4723 99.3489 21.3489 99.3751 21.2191C99.4013 21.0893 99.3969 20.956 99.3623 20.8279C99.2724 20.247 99.2201 19.6619 99.2058 19.0755C99.1806 17.25 99.2058 15.4246 99.2058 13.6311C99.2058 12.9785 99.1149 12.335 99.0594 11.5775C99.7057 11.5775 100.221 11.5775 100.736 11.5775C101.458 11.5775 101.745 11.3448 101.786 10.8108C101.799 10.687 101.781 10.5622 101.736 10.4451C101.69 10.3279 101.616 10.2211 101.52 10.1321C101.424 10.0431 101.308 9.97409 101.179 9.92974C101.051 9.8854 100.913 9.86682 100.776 9.87529C100.418 9.84791 100.054 9.87529 99.6956 9.84334C99.3371 9.8114 98.9433 9.69274 98.9281 9.22726C98.8827 7.80342 98.8373 6.37503 98.7716 4.95576C98.7464 4.4994 98.913 4.28947 99.4229 4.22102C100.372 4.08867 101.321 3.92438 102.265 3.76466C102.922 3.646 103.063 3.20335 102.977 2.68766C102.969 2.5847 102.936 2.48454 102.882 2.39396C102.827 2.30337 102.751 2.22447 102.66 2.1626C102.568 2.10073 102.463 2.05733 102.352 2.03532C102.24 2.01332 102.125 2.01323 102.013 2.03506C101.205 2.10808 100.413 2.25411 99.6047 2.30888C99.2438 2.33413 98.8816 2.2793 98.5495 2.14915C98.3036 2.01343 98.0095 1.96807 97.7278 2.0224C97.446 2.07673 97.198 2.22662 97.0348 2.44122C96.818 2.70939 96.5854 2.96685 96.3381 3.21247C95.9796 3.60494 95.8332 4.12518 96.2674 4.42181"
                                fill="#9DCECA"
                            />
                            <path
                                d="M112.073 18.0898C112.132 18.4694 112.272 18.8264 112.483 19.1281C112.693 19.4297 112.967 19.6666 113.278 19.817C113.589 19.9674 113.929 20.0265 114.265 19.9891C114.602 19.9516 114.925 19.8187 115.205 19.6024C115.633 19.2991 116.002 18.8988 116.29 18.4263C116.577 17.9538 116.776 17.4192 116.875 16.8554C117.137 15.3032 116.985 13.6973 116.44 12.2438C115.88 10.7051 115.132 9.25773 114.533 7.73645C114.331 7.12653 114.225 6.48045 114.221 5.82832C114.216 5.67827 114.241 5.52895 114.293 5.39107C114.345 5.2532 114.423 5.1302 114.522 5.03089C114.621 4.93158 114.738 4.85844 114.865 4.81671C114.991 4.77497 115.124 4.76569 115.254 4.78951C115.491 4.78951 115.727 4.89383 115.96 4.89383C116.143 4.90766 116.324 4.84111 116.466 4.70781C116.608 4.5745 116.7 4.3845 116.723 4.17666C116.767 3.98419 116.743 3.77952 116.656 3.60702C116.569 3.43453 116.426 3.30812 116.257 3.2552C114.983 2.85966 114.095 2.751 113.149 4.23316C112.896 4.60533 112.726 5.04111 112.651 5.50395C112.577 5.9668 112.601 6.44321 112.722 6.89323C113.135 8.32276 113.645 9.7135 114.247 11.0528C114.88 12.4872 115.468 13.9085 115.392 15.6167C115.44 16.0334 115.395 16.4573 115.262 16.8493C115.129 17.2413 114.911 17.5887 114.629 17.8595C114.095 18.4289 113.797 18.355 113.485 17.59C113.457 17.4769 113.408 17.3719 113.342 17.2819C113.276 17.1919 113.194 17.1189 113.101 17.0679C113.009 17.0169 112.907 16.989 112.804 16.9861C112.702 16.9832 112.599 17.0053 112.504 17.051C112.322 17.1198 112.171 17.2669 112.083 17.4609C111.994 17.6549 111.976 17.8806 112.031 18.0898"
                                fill="#9DCECA"
                            />
                            <path
                                d="M104.033 11.8288C104.65 12.5219 104.435 13.2628 104.386 14.018C104.262 15.2896 104.212 16.5659 104.237 17.8418C104.286 18.8791 104.601 19.8972 104.749 20.9296C104.766 21.1672 104.881 21.3915 105.074 21.5611C105.266 21.7307 105.523 21.8341 105.797 21.8521C106.502 21.9335 107.213 21.9814 107.924 21.9955C108.322 22.021 108.718 21.9373 109.057 21.7562C109.397 21.5752 109.662 21.306 109.815 20.987C109.971 20.7887 110.032 20.5455 109.984 20.309C109.937 20.0725 109.785 19.8613 109.561 19.7203C109.049 19.3905 108.569 19.5291 108.112 19.9067C108.005 19.9938 107.878 20.0595 107.739 20.0992C107.6 20.1388 107.452 20.1515 107.307 20.1362C107.171 20.0837 107.051 20.0052 106.956 19.9067C106.86 19.8082 106.792 19.6921 106.756 19.5674C106.569 18.7805 106.466 17.9806 106.447 17.1774C106.447 15.863 106.679 14.5437 106.673 13.2293C106.673 12.4932 107.042 12.3116 107.737 12.2733H108.255C109.148 12.2733 109.605 11.8718 109.523 11.2074C109.457 10.6291 108.828 10.2897 108.034 10.3805C107.649 10.4235 107.263 10.4474 106.805 10.4761C106.805 9.26681 106.805 8.16266 106.805 7.06329C106.805 6.38934 107.268 6.30808 107.88 6.23161C108.464 6.17472 109.027 6.01186 109.534 5.75362C109.681 5.63942 109.793 5.49541 109.86 5.33444C109.928 5.17347 109.948 5.00055 109.919 4.83112C109.815 4.53955 109.368 4.3101 109.016 4.11891C108.878 4.04243 108.586 4.11892 108.382 4.18583C107.671 4.38659 107.026 4.54911 106.287 4.11414C106.168 4.05282 106.035 4.0151 105.898 4.00369C105.76 3.99227 105.621 4.00744 105.491 4.04811C105.361 4.08878 105.242 4.15393 105.145 4.2389C105.047 4.32387 104.972 4.42654 104.926 4.53954C104.724 4.8597 104.602 5.21308 104.568 5.57677C104.507 7.0394 104.535 8.51159 104.479 9.979C104.406 10.2934 104.297 10.6007 104.154 10.8967C104.077 11.2074 103.906 11.6472 104.066 11.8527"
                                fill="#9DCECA"
                            />
                            <path
                                d="M119.788 4.69846C120.05 4.78929 120.324 4.85636 120.605 4.89849C120.687 4.90083 120.767 4.91788 120.84 4.94845C120.914 4.97901 120.978 5.02234 121.028 5.07539C121.079 5.12845 121.115 5.18993 121.133 5.25553C121.152 5.32114 121.152 5.38926 121.135 5.45511C121.082 6.05522 121.013 6.65097 121.024 7.25108C121.024 8.15993 121.13 9.06878 121.183 9.97763H121.077C121.14 10.9822 121.225 11.991 121.273 12.9955C121.337 14.4262 121.363 15.8613 121.422 17.2963C121.425 17.9539 121.482 18.6105 121.591 19.2619C121.623 19.4134 121.696 19.5573 121.804 19.6829C121.913 19.8085 122.054 19.9128 122.217 19.9881C122.407 20.0117 122.601 20.0001 122.785 19.9542C122.968 19.9083 123.137 19.8292 123.278 19.7228C123.497 19.4783 123.601 19.1771 123.57 18.8748C123.492 16.0048 123.397 13.1362 123.284 10.269C123.284 9.80804 123.183 9.34709 123.194 8.8818C123.194 7.70333 123.231 6.52052 123.294 5.34206C123.317 5.24756 123.367 5.15886 123.44 5.08326C123.513 5.00767 123.607 4.94733 123.713 4.9072C124.101 4.82255 124.5 4.77727 124.902 4.77238C125.655 4.7289 126 4.48538 126 3.95051C126 3.41563 125.602 3.10688 124.833 3.12428C124.148 3.12428 123.464 3.25038 122.785 3.23733C122.011 3.20981 121.24 3.13862 120.477 3.02426C119.804 2.93294 119.257 3.09818 119.066 3.54174C119.015 3.65566 118.993 3.77717 119.002 3.89842C119.011 4.01967 119.052 4.13798 119.12 4.24573C119.188 4.35348 119.284 4.44827 119.4 4.524C119.516 4.59974 119.65 4.65472 119.793 4.68542"
                                fill="#9DCECA"
                            />
                            <path
                                d="M160 13.2501C160.125 15.2861 160.215 17.0026 160.345 18.7146C160.355 19.0407 160.489 19.3514 160.721 19.5861C160.952 19.8209 161.265 19.9628 161.597 19.9844C161.942 19.9625 162.3 19.9844 162.649 19.9844C163.145 19.9844 163.646 20.0195 164.148 19.9844C164.391 19.9665 164.617 19.8551 164.776 19.6745C164.935 19.494 165.015 19.2591 164.998 19.0211C164.944 18.4957 164.599 18.3249 164.08 18.3249C163.523 18.3212 162.967 18.2759 162.416 18.1892C162.322 18.1531 162.238 18.0939 162.174 18.0172C162.11 17.9406 162.067 17.849 162.049 17.7513C161.959 16.9561 161.916 16.1564 161.919 15.3562C161.973 13.1143 162.009 10.8725 162.174 8.63498C162.286 7.16813 162.591 5.71442 162.837 4.25633C162.94 3.66084 162.756 3.17043 162.286 3.05659C162.157 3.00871 162.018 2.99085 161.88 3.0044C161.743 3.01794 161.61 3.06252 161.493 3.13465C161.376 3.20678 161.278 3.30449 161.206 3.4201C161.134 3.53571 161.09 3.66608 161.078 3.80096C160.857 4.78738 160.687 5.78404 160.568 6.78719C160.34 9.03343 160.17 11.2841 160 13.2238"
                                fill="#9DCECA"
                            />
                            <path
                                d="M157.969 14.2865C157.956 14.0804 157.853 13.8865 157.683 13.7448C157.513 13.6031 157.288 13.5244 157.054 13.5247C156.785 13.5247 156.511 13.4243 156.237 13.4243C155.72 13.4243 155.627 13.1734 155.612 12.7948C155.606 12.165 155.561 11.5361 155.478 10.9107C155.074 8.3833 154.645 5.86051 154.227 3.33772C154.182 3.08446 154.069 2.84455 153.896 2.63869C153.723 2.43283 153.496 2.26721 153.234 2.15616C153.114 2.07491 152.971 2.02316 152.82 2.00616C152.67 1.98916 152.517 2.0075 152.377 2.05932C152.237 2.11113 152.115 2.1946 152.023 2.30131C151.931 2.40802 151.873 2.53419 151.854 2.6671C151.296 4.55121 150.691 6.42621 150.2 8.32401C149.394 11.4307 148.867 14.5922 147.549 17.5803C147.341 18.0534 147.168 18.538 147.032 19.031C146.998 19.15 146.991 19.274 147.012 19.3954C147.033 19.5168 147.082 19.6331 147.155 19.7375C147.229 19.8419 147.325 19.9321 147.439 20.0027C147.553 20.0734 147.682 20.1231 147.818 20.1487C148.093 20.2306 148.393 20.2138 148.654 20.102C148.915 19.9902 149.116 19.7924 149.213 19.5511C149.591 18.4015 149.994 17.2701 150.324 16.1022C150.348 15.9111 150.451 15.7347 150.615 15.608C150.779 15.4812 150.991 15.4134 151.208 15.4179C152.03 15.3951 152.857 15.4179 153.793 15.4179C153.849 16.0977 153.886 16.6862 153.942 17.2655C154.061 18.2555 154.185 19.2455 154.346 20.2263C154.352 20.3451 154.388 20.4613 154.451 20.5666C154.514 20.6718 154.602 20.7636 154.709 20.8354C154.817 20.9073 154.941 20.9573 155.073 20.9822C155.205 21.007 155.341 21.0059 155.472 20.979C155.606 20.9673 155.736 20.931 155.853 20.8724C155.969 20.8138 156.071 20.7342 156.151 20.6388C156.231 20.5434 156.287 20.4342 156.316 20.3183C156.345 20.2025 156.347 20.0826 156.32 19.9663C156.196 18.7528 156.093 17.5393 155.932 16.3166C155.839 15.5867 155.932 15.4362 156.744 15.3769C156.904 15.3735 157.064 15.3536 157.219 15.3176C157.345 15.2947 157.465 15.2502 157.572 15.1864C157.678 15.1226 157.769 15.0409 157.84 14.946C157.91 14.851 157.959 14.7447 157.983 14.6331C158.007 14.5215 158.006 14.4068 157.979 14.2957M151.11 13.5749L152.692 6.89609H152.981C153.219 9.02655 153.446 11.1524 153.689 13.3924L151.105 13.5703"
                                fill="#9DCECA"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_199_101">
                                <rect width="165" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <section className={styles.section}>
                    <ul>
                        <li>
                            <Link href="https://el.veganlife.gr">
                                <a
                                    target="_blank"
                                    className="umami--click--visit-vegan-life-website"
                                >
                                    Vegan Life Festival
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.wikodid.com/">
                                <a
                                    target="_blank"
                                    className="umami--click--visit-wikodid-website"
                                >
                                    Wikodid
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Terms of Services</a>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>

            <p className={styles.small}>
                &copy; Copyright 2022 - All rights reserved - Wikodid
            </p>
        </footer>
    );
};

export default Footer;
