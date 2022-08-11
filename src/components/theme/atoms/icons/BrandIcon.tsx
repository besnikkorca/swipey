import * as React from "react";
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg";

export default function SvgComponent(props: any) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 176 51"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Defs>
        <Path id="a" d="M0 0H176V51H0z" />
      </Defs>
      <G stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <Mask id="b" fill="#fff">
          <Use xlinkHref="#a" />
        </Mask>
        <Path
          d="M1.464 1.75c20.7 14.51 45.124 18.137 73.274 10.882 28.149-7.255 52.058-10.383 71.728-9.384"
          stroke="#FCE703"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <Path
          d="M1.464 16.25c20.46 14.51 44.6 18.137 72.422 10.882 27.822-7.255 51.454-10.383 70.895-9.384 6.887.46 12.046 1.115 15.478 1.966 3.431.852 8.012 2.614 13.741 5.286"
          stroke="#FCE703"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <Path
          d="M1.464 24.75c20.46 14.51 44.6 18.137 72.422 10.882 27.822-7.255 51.454-10.383 70.895-9.384 6.887.46 12.046 1.115 15.478 1.966 3.431.852 8.012 2.614 13.741 5.286M101.024 39.122c10.744-1.937 25.082-3.062 43.013-3.374 6.774.46 11.848 1.115 15.222 1.966 3.375.852 7.88 2.614 13.515 5.286M1.464 34.25c23.16 10.707 41.673 15.394 55.541 14.062M74.471 19.882c24.262-6.365 45.318-9.554 63.168-9.565 1.662-.001 4.093.06 7.292.181 6.845.46 11.973 1.115 15.383 1.966 3.41.852 7.963 2.614 13.657 5.286M1.695 8.492c5.141 3.673 9.168 6.235 12.079 7.687 5.556 2.771 12.85 5.165 16.727 6.116"
          stroke="#FCE703"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <G fill="#000" fillRule="nonzero">
          <Path
            d="M6.384 20.337c-2.067 0-3.694-.46-4.883-1.38C.501 18.194 0 17.31 0 16.31c0-.513.155-.938.464-1.276.31-.338.736-.507 1.282-.507.732 0 1.27.375 1.61 1.123.465 1.001 1.515 1.502 3.15 1.502 1.4 0 2.755-.305 4.065-.916 1.36-.626 2.039-1.314 2.039-2.063 0-1.025-.423-1.7-1.27-2.026-.602-.236-1.81-.374-3.625-.415-1.408-.033-2.67-.297-3.784-.793-1.506-.676-2.246-1.644-2.222-2.906.024-1.587.87-3.041 2.539-4.364 1.668-1.322 3.508-1.983 5.518-1.983.797 0 1.782.183 2.954.549 1.456.456 2.185.98 2.185 1.575 0 .423-.147.797-.44 1.123-.325.366-.744.549-1.257.549-.382 0-.954-.081-1.715-.244-.761-.163-1.337-.244-1.727-.244a6.447 6.447 0 00-2.991.757c-.977.504-1.465 1.053-1.465 1.647 0 .31.149.564.446.763.297.2.742.34 1.336.422l3.113.17c1.807.139 3.235.647 4.285 1.526 1.155.977 1.733 2.328 1.733 4.053 0 2.1-1.196 3.69-3.589 4.773-1.823.822-3.906 1.233-6.25 1.233zM41.797 3.93c-.138.334-.301.745-.488 1.234a65.714 65.714 0 01-.672 2.1c-.464 1.195-1.2 2.937-2.21 5.224-1.033 2.327-1.773 4.065-2.22 5.212-.335.855-.648 1.538-.94 2.051-.383.675-.965 1.013-1.746 1.013a2.2 2.2 0 01-1.258-.378c-.44-.293-.675-.68-.708-1.16-.374-.936-.61-1.7-.708-2.295-.358-1.741-.854-4.358-1.49-7.849-.528 1.636-1.098 3.105-1.708 4.407-.912 1.953-1.51 3.487-1.795 4.602.074.179.11.37.11.574 0 .504-.223.915-.671 1.232-.39.269-.822.403-1.294.403-.594 0-1.086-.15-1.477-.451-.423-.334-.643-.79-.66-1.368l-.378-1.428c-.268-1.27-.708-3.165-1.318-5.688-.537-1.929-1.436-4.676-2.698-8.24a1.792 1.792 0 01-.11-.61c0-.489.188-.875.562-1.16.334-.26.736-.39 1.208-.39.619 0 1.111.26 1.477.78.204.285.436.802.696 1.55C22.1 5.592 22.998 8.936 24 13.33c.651-1.587 1.314-3.459 1.99-5.615.545-1.758.989-3.007 1.33-3.748.814-1.774 1.644-2.66 2.49-2.66.798 0 1.38.435 1.746 1.305.18.415.354 1.168.525 2.259.049.333.155 1.151.317 2.453.171 1.4.684 3.947 1.539 7.642.862-2.018 2.022-4.928 3.479-8.728.09-.228.3-.977.634-2.246.236-.912.533-1.632.891-2.16.391-.57.912-.855 1.563-.855.496 0 .907.152 1.233.457.325.306.488.698.488 1.178 0 .171-.142.61-.427 1.319zM54.419 5.164c-.423 0-1.583-.114-3.48-.342-.113 1.497-.17 3.487-.17 5.969l-.012 5.481c1.082-.024 2.185-.037 3.308-.037.488 0 .893.163 1.215.489.321.325.482.716.482 1.172 0 .455-.161.844-.482 1.165-.322.322-.727.482-1.215.482-.456 0-1.14.01-2.05.031-.912.02-1.596.03-2.052.03-.537 0-1.342.072-2.417.214-1.074.143-1.88.214-2.417.214-.488 0-.893-.161-1.214-.482a1.588 1.588 0 01-.482-1.166c0-.456.16-.847.482-1.172.321-.326.726-.488 1.214-.488.554 0 1.282-.061 2.185-.183-.016-.96-.024-2.8-.024-5.518 0-2.214.081-4.325.244-6.335l-2.649.073c-.488 0-.897-.159-1.227-.476a1.577 1.577 0 01-.494-1.184c0-.48.163-.871.488-1.172a1.844 1.844 0 011.111-.476c.716-.065 1.961-.098 3.736-.098 1.595 0 3.65.17 6.164.513 1.001.138 1.502.7 1.502 1.684 0 .521-.204.932-.61 1.233a1.834 1.834 0 01-1.136.379zM61.438 12.78c-.138 0-.48-.028-1.025-.085-.05 1.14-.074 3.011-.074 5.616 0 .43-.15.801-.451 1.11-.301.31-.684.464-1.148.464-.464 0-.848-.154-1.153-.464a1.526 1.526 0 01-.458-1.11v-3.406c0-1.262.081-3.13.244-5.603.155-2.515.236-4.39.244-5.628.008-2.116.602-3.129 1.782-3.04.277-.072.66-.127 1.148-.164a24.392 24.392 0 011.782-.055c1.595 0 3.093.517 4.492 1.55 1.555 1.156 2.332 2.564 2.332 4.224 0 2.083-.826 3.74-2.478 4.968-1.465 1.083-3.21 1.624-5.237 1.624zm.61-9.216c-.26 0-.49.002-.69.007-.199.004-.368.014-.506.03 0 .383-.004.956-.012 1.721-.016.904-.094 2.311-.232 4.224.415.065.692.098.83.098 1.27 0 2.323-.302 3.162-.904.895-.643 1.342-1.493 1.342-2.551 0-.692-.419-1.306-1.257-1.843a4.761 4.761 0 00-2.637-.782zM83.252 3.943c-.163 0-.334-.025-.513-.073a14.642 14.642 0 00-3.845-.537c-.61 0-1.265.048-1.965.146-.7.098-1.445.244-2.234.44 0 1.082-.037 2.69-.11 4.821.456-.032 2.047-.183 4.773-.451 1.554-.155 2.539-.232 2.954-.232.48 0 .891.152 1.233.457.342.306.513.71.513 1.215 0 .968-.517 1.518-1.55 1.648-.652.049-1.624.13-2.918.244-1.156.13-2.897.289-5.225.476a47.551 47.551 0 00-.085 2.503c0 1.595.093 2.502.28 2.722.09.106.603.158 1.539.158.504 0 1.265-.012 2.282-.036 1.018-.025 1.779-.037 2.283-.037.163 0 .403-.024.72-.073a5.15 5.15 0 01.708-.073c.472 0 .875.134 1.209.403.382.3.574.724.574 1.27 0 .91-.477 1.456-1.429 1.635-.814.154-2.502.232-5.066.232-2.653 0-4.382-.358-5.188-1.074-.887-.79-1.33-2.499-1.33-5.127 0-1.09.08-2.729.238-4.914.159-2.185.238-3.818.238-4.9 0-.286-.04-.707-.122-1.264-.082-.558-.122-.979-.122-1.264 0-1.237.57-1.855 1.709-1.855.358 0 .687.102.989.305a25.685 25.685 0 012.691-.531C77.333.059 78.137 0 78.894 0c2.05 0 3.69.236 4.92.708.748.285 1.123.802 1.123 1.55 0 .423-.147.798-.44 1.123-.325.375-.74.562-1.245.562zM100.061 4.529c-.415.854-1.25 2.702-2.502 5.542-1.042 2.376-1.93 4.24-2.662 5.59-1.27 2.344-1.949 3.585-2.038 3.724-.48.708-1.034 1.062-1.66 1.062-.448 0-.843-.147-1.184-.44a1.539 1.539 0 01-.562-1.208c0-.399.85-2.075 2.551-5.03-.626-.903-1.525-2.274-2.697-4.113-.88-1.351-2.17-3.39-3.87-6.116a1.685 1.685 0 01-.244-.867c0-.472.183-.87.55-1.196.341-.301.74-.452 1.195-.452.538 0 1.026.273 1.465.818l.916 1.465 2.1 3.565c.846 1.456 1.595 2.608 2.246 3.454.618-1.245 1.51-3.129 2.673-5.652.244-.561.61-1.412 1.099-2.551.309-.732.838-1.099 1.586-1.099.448 0 .843.147 1.185.44.374.317.561.716.561 1.196 0 .277-.236.9-.708 1.868z"
            transform="translate(36.742 10.408)"
          />
        </G>
        <G fill="#000" fillRule="nonzero">
          <Path
            d="M6.384 20.337c-2.067 0-3.694-.46-4.883-1.38C.501 18.194 0 17.31 0 16.31c0-.513.155-.938.464-1.276.31-.338.736-.507 1.282-.507.732 0 1.27.375 1.61 1.123.465 1.001 1.515 1.502 3.15 1.502 1.4 0 2.755-.305 4.065-.916 1.36-.626 2.039-1.314 2.039-2.063 0-1.025-.423-1.7-1.27-2.026-.602-.236-1.81-.374-3.625-.415-1.408-.033-2.67-.297-3.784-.793-1.506-.676-2.246-1.644-2.222-2.906.024-1.587.87-3.041 2.539-4.364 1.668-1.322 3.508-1.983 5.518-1.983.797 0 1.782.183 2.954.549 1.456.456 2.185.98 2.185 1.575 0 .423-.147.797-.44 1.123-.325.366-.744.549-1.257.549-.382 0-.954-.081-1.715-.244-.761-.163-1.337-.244-1.727-.244a6.447 6.447 0 00-2.991.757c-.977.504-1.465 1.053-1.465 1.647 0 .31.149.564.446.763.297.2.742.34 1.336.422l3.113.17c1.807.139 3.235.647 4.285 1.526 1.155.977 1.733 2.328 1.733 4.053 0 2.1-1.196 3.69-3.589 4.773-1.823.822-3.906 1.233-6.25 1.233zM41.797 3.93c-.138.334-.301.745-.488 1.234a65.714 65.714 0 01-.672 2.1c-.464 1.195-1.2 2.937-2.21 5.224-1.033 2.327-1.773 4.065-2.22 5.212-.335.855-.648 1.538-.94 2.051-.383.675-.965 1.013-1.746 1.013a2.2 2.2 0 01-1.258-.378c-.44-.293-.675-.68-.708-1.16-.374-.936-.61-1.7-.708-2.295-.358-1.741-.854-4.358-1.49-7.849-.528 1.636-1.098 3.105-1.708 4.407-.912 1.953-1.51 3.487-1.795 4.602.074.179.11.37.11.574 0 .504-.223.915-.671 1.232-.39.269-.822.403-1.294.403-.594 0-1.086-.15-1.477-.451-.423-.334-.643-.79-.66-1.368l-.378-1.428c-.268-1.27-.708-3.165-1.318-5.688-.537-1.929-1.436-4.676-2.698-8.24a1.792 1.792 0 01-.11-.61c0-.489.188-.875.562-1.16.334-.26.736-.39 1.208-.39.619 0 1.111.26 1.477.78.204.285.436.802.696 1.55C22.1 5.592 22.998 8.936 24 13.33c.651-1.587 1.314-3.459 1.99-5.615.545-1.758.989-3.007 1.33-3.748.814-1.774 1.644-2.66 2.49-2.66.798 0 1.38.435 1.746 1.305.18.415.354 1.168.525 2.259.049.333.155 1.151.317 2.453.171 1.4.684 3.947 1.539 7.642.862-2.018 2.022-4.928 3.479-8.728.09-.228.3-.977.634-2.246.236-.912.533-1.632.891-2.16.391-.57.912-.855 1.563-.855.496 0 .907.152 1.233.457.325.306.488.698.488 1.178 0 .171-.142.61-.427 1.319zM54.419 5.164c-.423 0-1.583-.114-3.48-.342-.113 1.497-.17 3.487-.17 5.969l-.012 5.481c1.082-.024 2.185-.037 3.308-.037.488 0 .893.163 1.215.489.321.325.482.716.482 1.172 0 .455-.161.844-.482 1.165-.322.322-.727.482-1.215.482-.456 0-1.14.01-2.05.031-.912.02-1.596.03-2.052.03-.537 0-1.342.072-2.417.214-1.074.143-1.88.214-2.417.214-.488 0-.893-.161-1.214-.482a1.588 1.588 0 01-.482-1.166c0-.456.16-.847.482-1.172.321-.326.726-.488 1.214-.488.554 0 1.282-.061 2.185-.183-.016-.96-.024-2.8-.024-5.518 0-2.214.081-4.325.244-6.335l-2.649.073c-.488 0-.897-.159-1.227-.476a1.577 1.577 0 01-.494-1.184c0-.48.163-.871.488-1.172a1.844 1.844 0 011.111-.476c.716-.065 1.961-.098 3.736-.098 1.595 0 3.65.17 6.164.513 1.001.138 1.502.7 1.502 1.684 0 .521-.204.932-.61 1.233a1.834 1.834 0 01-1.136.379zM61.438 12.78c-.138 0-.48-.028-1.025-.085-.05 1.14-.074 3.011-.074 5.616 0 .43-.15.801-.451 1.11-.301.31-.684.464-1.148.464-.464 0-.848-.154-1.153-.464a1.526 1.526 0 01-.458-1.11v-3.406c0-1.262.081-3.13.244-5.603.155-2.515.236-4.39.244-5.628.008-2.116.602-3.129 1.782-3.04.277-.072.66-.127 1.148-.164a24.392 24.392 0 011.782-.055c1.595 0 3.093.517 4.492 1.55 1.555 1.156 2.332 2.564 2.332 4.224 0 2.083-.826 3.74-2.478 4.968-1.465 1.083-3.21 1.624-5.237 1.624zm.61-9.216c-.26 0-.49.002-.69.007-.199.004-.368.014-.506.03 0 .383-.004.956-.012 1.721-.016.904-.094 2.311-.232 4.224.415.065.692.098.83.098 1.27 0 2.323-.302 3.162-.904.895-.643 1.342-1.493 1.342-2.551 0-.692-.419-1.306-1.257-1.843a4.761 4.761 0 00-2.637-.782zM83.252 3.943c-.163 0-.334-.025-.513-.073a14.642 14.642 0 00-3.845-.537c-.61 0-1.265.048-1.965.146-.7.098-1.445.244-2.234.44 0 1.082-.037 2.69-.11 4.821.456-.032 2.047-.183 4.773-.451 1.554-.155 2.539-.232 2.954-.232.48 0 .891.152 1.233.457.342.306.513.71.513 1.215 0 .968-.517 1.518-1.55 1.648-.652.049-1.624.13-2.918.244-1.156.13-2.897.289-5.225.476a47.551 47.551 0 00-.085 2.503c0 1.595.093 2.502.28 2.722.09.106.603.158 1.539.158.504 0 1.265-.012 2.282-.036 1.018-.025 1.779-.037 2.283-.037.163 0 .403-.024.72-.073a5.15 5.15 0 01.708-.073c.472 0 .875.134 1.209.403.382.3.574.724.574 1.27 0 .91-.477 1.456-1.429 1.635-.814.154-2.502.232-5.066.232-2.653 0-4.382-.358-5.188-1.074-.887-.79-1.33-2.499-1.33-5.127 0-1.09.08-2.729.238-4.914.159-2.185.238-3.818.238-4.9 0-.286-.04-.707-.122-1.264-.082-.558-.122-.979-.122-1.264 0-1.237.57-1.855 1.709-1.855.358 0 .687.102.989.305a25.685 25.685 0 012.691-.531C77.333.059 78.137 0 78.894 0c2.05 0 3.69.236 4.92.708.748.285 1.123.802 1.123 1.55 0 .423-.147.798-.44 1.123-.325.375-.74.562-1.245.562zM100.061 4.529c-.415.854-1.25 2.702-2.502 5.542-1.042 2.376-1.93 4.24-2.662 5.59-1.27 2.344-1.949 3.585-2.038 3.724-.48.708-1.034 1.062-1.66 1.062-.448 0-.843-.147-1.184-.44a1.539 1.539 0 01-.562-1.208c0-.399.85-2.075 2.551-5.03-.626-.903-1.525-2.274-2.697-4.113-.88-1.351-2.17-3.39-3.87-6.116a1.685 1.685 0 01-.244-.867c0-.472.183-.87.55-1.196.341-.301.74-.452 1.195-.452.538 0 1.026.273 1.465.818l.916 1.465 2.1 3.565c.846 1.456 1.595 2.608 2.246 3.454.618-1.245 1.51-3.129 2.673-5.652.244-.561.61-1.412 1.099-2.551.309-.732.838-1.099 1.586-1.099.448 0 .843.147 1.185.44.374.317.561.716.561 1.196 0 .277-.236.9-.708 1.868z"
            transform="translate(37.492 11.908)"
          />
        </G>
        <G fill="#000" fillRule="nonzero">
          <Path
            d="M6.384 20.337c-2.067 0-3.694-.46-4.883-1.38C.501 18.194 0 17.31 0 16.31c0-.513.155-.938.464-1.276.31-.338.736-.507 1.282-.507.732 0 1.27.375 1.61 1.123.465 1.001 1.515 1.502 3.15 1.502 1.4 0 2.755-.305 4.065-.916 1.36-.626 2.039-1.314 2.039-2.063 0-1.025-.423-1.7-1.27-2.026-.602-.236-1.81-.374-3.625-.415-1.408-.033-2.67-.297-3.784-.793-1.506-.676-2.246-1.644-2.222-2.906.024-1.587.87-3.041 2.539-4.364 1.668-1.322 3.508-1.983 5.518-1.983.797 0 1.782.183 2.954.549 1.456.456 2.185.98 2.185 1.575 0 .423-.147.797-.44 1.123-.325.366-.744.549-1.257.549-.382 0-.954-.081-1.715-.244-.761-.163-1.337-.244-1.727-.244a6.447 6.447 0 00-2.991.757c-.977.504-1.465 1.053-1.465 1.647 0 .31.149.564.446.763.297.2.742.34 1.336.422l3.113.17c1.807.139 3.235.647 4.285 1.526 1.155.977 1.733 2.328 1.733 4.053 0 2.1-1.196 3.69-3.589 4.773-1.823.822-3.906 1.233-6.25 1.233zM41.797 3.93c-.138.334-.301.745-.488 1.234a65.714 65.714 0 01-.672 2.1c-.464 1.195-1.2 2.937-2.21 5.224-1.033 2.327-1.773 4.065-2.22 5.212-.335.855-.648 1.538-.94 2.051-.383.675-.965 1.013-1.746 1.013a2.2 2.2 0 01-1.258-.378c-.44-.293-.675-.68-.708-1.16-.374-.936-.61-1.7-.708-2.295-.358-1.741-.854-4.358-1.49-7.849-.528 1.636-1.098 3.105-1.708 4.407-.912 1.953-1.51 3.487-1.795 4.602.074.179.11.37.11.574 0 .504-.223.915-.671 1.232-.39.269-.822.403-1.294.403-.594 0-1.086-.15-1.477-.451-.423-.334-.643-.79-.66-1.368l-.378-1.428c-.268-1.27-.708-3.165-1.318-5.688-.537-1.929-1.436-4.676-2.698-8.24a1.792 1.792 0 01-.11-.61c0-.489.188-.875.562-1.16.334-.26.736-.39 1.208-.39.619 0 1.111.26 1.477.78.204.285.436.802.696 1.55C22.1 5.592 22.998 8.936 24 13.33c.651-1.587 1.314-3.459 1.99-5.615.545-1.758.989-3.007 1.33-3.748.814-1.774 1.644-2.66 2.49-2.66.798 0 1.38.435 1.746 1.305.18.415.354 1.168.525 2.259.049.333.155 1.151.317 2.453.171 1.4.684 3.947 1.539 7.642.862-2.018 2.022-4.928 3.479-8.728.09-.228.3-.977.634-2.246.236-.912.533-1.632.891-2.16.391-.57.912-.855 1.563-.855.496 0 .907.152 1.233.457.325.306.488.698.488 1.178 0 .171-.142.61-.427 1.319zM54.419 5.164c-.423 0-1.583-.114-3.48-.342-.113 1.497-.17 3.487-.17 5.969l-.012 5.481c1.082-.024 2.185-.037 3.308-.037.488 0 .893.163 1.215.489.321.325.482.716.482 1.172 0 .455-.161.844-.482 1.165-.322.322-.727.482-1.215.482-.456 0-1.14.01-2.05.031-.912.02-1.596.03-2.052.03-.537 0-1.342.072-2.417.214-1.074.143-1.88.214-2.417.214-.488 0-.893-.161-1.214-.482a1.588 1.588 0 01-.482-1.166c0-.456.16-.847.482-1.172.321-.326.726-.488 1.214-.488.554 0 1.282-.061 2.185-.183-.016-.96-.024-2.8-.024-5.518 0-2.214.081-4.325.244-6.335l-2.649.073c-.488 0-.897-.159-1.227-.476a1.577 1.577 0 01-.494-1.184c0-.48.163-.871.488-1.172a1.844 1.844 0 011.111-.476c.716-.065 1.961-.098 3.736-.098 1.595 0 3.65.17 6.164.513 1.001.138 1.502.7 1.502 1.684 0 .521-.204.932-.61 1.233a1.834 1.834 0 01-1.136.379zM61.438 12.78c-.138 0-.48-.028-1.025-.085-.05 1.14-.074 3.011-.074 5.616 0 .43-.15.801-.451 1.11-.301.31-.684.464-1.148.464-.464 0-.848-.154-1.153-.464a1.526 1.526 0 01-.458-1.11v-3.406c0-1.262.081-3.13.244-5.603.155-2.515.236-4.39.244-5.628.008-2.116.602-3.129 1.782-3.04.277-.072.66-.127 1.148-.164a24.392 24.392 0 011.782-.055c1.595 0 3.093.517 4.492 1.55 1.555 1.156 2.332 2.564 2.332 4.224 0 2.083-.826 3.74-2.478 4.968-1.465 1.083-3.21 1.624-5.237 1.624zm.61-9.216c-.26 0-.49.002-.69.007-.199.004-.368.014-.506.03 0 .383-.004.956-.012 1.721-.016.904-.094 2.311-.232 4.224.415.065.692.098.83.098 1.27 0 2.323-.302 3.162-.904.895-.643 1.342-1.493 1.342-2.551 0-.692-.419-1.306-1.257-1.843a4.761 4.761 0 00-2.637-.782zM83.252 3.943c-.163 0-.334-.025-.513-.073a14.642 14.642 0 00-3.845-.537c-.61 0-1.265.048-1.965.146-.7.098-1.445.244-2.234.44 0 1.082-.037 2.69-.11 4.821.456-.032 2.047-.183 4.773-.451 1.554-.155 2.539-.232 2.954-.232.48 0 .891.152 1.233.457.342.306.513.71.513 1.215 0 .968-.517 1.518-1.55 1.648-.652.049-1.624.13-2.918.244-1.156.13-2.897.289-5.225.476a47.551 47.551 0 00-.085 2.503c0 1.595.093 2.502.28 2.722.09.106.603.158 1.539.158.504 0 1.265-.012 2.282-.036 1.018-.025 1.779-.037 2.283-.037.163 0 .403-.024.72-.073a5.15 5.15 0 01.708-.073c.472 0 .875.134 1.209.403.382.3.574.724.574 1.27 0 .91-.477 1.456-1.429 1.635-.814.154-2.502.232-5.066.232-2.653 0-4.382-.358-5.188-1.074-.887-.79-1.33-2.499-1.33-5.127 0-1.09.08-2.729.238-4.914.159-2.185.238-3.818.238-4.9 0-.286-.04-.707-.122-1.264-.082-.558-.122-.979-.122-1.264 0-1.237.57-1.855 1.709-1.855.358 0 .687.102.989.305a25.685 25.685 0 012.691-.531C77.333.059 78.137 0 78.894 0c2.05 0 3.69.236 4.92.708.748.285 1.123.802 1.123 1.55 0 .423-.147.798-.44 1.123-.325.375-.74.562-1.245.562zM100.061 4.529c-.415.854-1.25 2.702-2.502 5.542-1.042 2.376-1.93 4.24-2.662 5.59-1.27 2.344-1.949 3.585-2.038 3.724-.48.708-1.034 1.062-1.66 1.062-.448 0-.843-.147-1.184-.44a1.539 1.539 0 01-.562-1.208c0-.399.85-2.075 2.551-5.03-.626-.903-1.525-2.274-2.697-4.113-.88-1.351-2.17-3.39-3.87-6.116a1.685 1.685 0 01-.244-.867c0-.472.183-.87.55-1.196.341-.301.74-.452 1.195-.452.538 0 1.026.273 1.465.818l.916 1.465 2.1 3.565c.846 1.456 1.595 2.608 2.246 3.454.618-1.245 1.51-3.129 2.673-5.652.244-.561.61-1.412 1.099-2.551.309-.732.838-1.099 1.586-1.099.448 0 .843.147 1.185.44.374.317.561.716.561 1.196 0 .277-.236.9-.708 1.868z"
            transform="translate(36.992 9.908)"
          />
        </G>
        <G fill="#000" fillRule="nonzero">
          <Path
            d="M6.384 20.337c-2.067 0-3.694-.46-4.883-1.38C.501 18.194 0 17.31 0 16.31c0-.513.155-.938.464-1.276.31-.338.736-.507 1.282-.507.732 0 1.27.375 1.61 1.123.465 1.001 1.515 1.502 3.15 1.502 1.4 0 2.755-.305 4.065-.916 1.36-.626 2.039-1.314 2.039-2.063 0-1.025-.423-1.7-1.27-2.026-.602-.236-1.81-.374-3.625-.415-1.408-.033-2.67-.297-3.784-.793-1.506-.676-2.246-1.644-2.222-2.906.024-1.587.87-3.041 2.539-4.364 1.668-1.322 3.508-1.983 5.518-1.983.797 0 1.782.183 2.954.549 1.456.456 2.185.98 2.185 1.575 0 .423-.147.797-.44 1.123-.325.366-.744.549-1.257.549-.382 0-.954-.081-1.715-.244-.761-.163-1.337-.244-1.727-.244a6.447 6.447 0 00-2.991.757c-.977.504-1.465 1.053-1.465 1.647 0 .31.149.564.446.763.297.2.742.34 1.336.422l3.113.17c1.807.139 3.235.647 4.285 1.526 1.155.977 1.733 2.328 1.733 4.053 0 2.1-1.196 3.69-3.589 4.773-1.823.822-3.906 1.233-6.25 1.233zM41.797 3.93c-.138.334-.301.745-.488 1.234a65.714 65.714 0 01-.672 2.1c-.464 1.195-1.2 2.937-2.21 5.224-1.033 2.327-1.773 4.065-2.22 5.212-.335.855-.648 1.538-.94 2.051-.383.675-.965 1.013-1.746 1.013a2.2 2.2 0 01-1.258-.378c-.44-.293-.675-.68-.708-1.16-.374-.936-.61-1.7-.708-2.295-.358-1.741-.854-4.358-1.49-7.849-.528 1.636-1.098 3.105-1.708 4.407-.912 1.953-1.51 3.487-1.795 4.602.074.179.11.37.11.574 0 .504-.223.915-.671 1.232-.39.269-.822.403-1.294.403-.594 0-1.086-.15-1.477-.451-.423-.334-.643-.79-.66-1.368l-.378-1.428c-.268-1.27-.708-3.165-1.318-5.688-.537-1.929-1.436-4.676-2.698-8.24a1.792 1.792 0 01-.11-.61c0-.489.188-.875.562-1.16.334-.26.736-.39 1.208-.39.619 0 1.111.26 1.477.78.204.285.436.802.696 1.55C22.1 5.592 22.998 8.936 24 13.33c.651-1.587 1.314-3.459 1.99-5.615.545-1.758.989-3.007 1.33-3.748.814-1.774 1.644-2.66 2.49-2.66.798 0 1.38.435 1.746 1.305.18.415.354 1.168.525 2.259.049.333.155 1.151.317 2.453.171 1.4.684 3.947 1.539 7.642.862-2.018 2.022-4.928 3.479-8.728.09-.228.3-.977.634-2.246.236-.912.533-1.632.891-2.16.391-.57.912-.855 1.563-.855.496 0 .907.152 1.233.457.325.306.488.698.488 1.178 0 .171-.142.61-.427 1.319zM54.419 5.164c-.423 0-1.583-.114-3.48-.342-.113 1.497-.17 3.487-.17 5.969l-.012 5.481c1.082-.024 2.185-.037 3.308-.037.488 0 .893.163 1.215.489.321.325.482.716.482 1.172 0 .455-.161.844-.482 1.165-.322.322-.727.482-1.215.482-.456 0-1.14.01-2.05.031-.912.02-1.596.03-2.052.03-.537 0-1.342.072-2.417.214-1.074.143-1.88.214-2.417.214-.488 0-.893-.161-1.214-.482a1.588 1.588 0 01-.482-1.166c0-.456.16-.847.482-1.172.321-.326.726-.488 1.214-.488.554 0 1.282-.061 2.185-.183-.016-.96-.024-2.8-.024-5.518 0-2.214.081-4.325.244-6.335l-2.649.073c-.488 0-.897-.159-1.227-.476a1.577 1.577 0 01-.494-1.184c0-.48.163-.871.488-1.172a1.844 1.844 0 011.111-.476c.716-.065 1.961-.098 3.736-.098 1.595 0 3.65.17 6.164.513 1.001.138 1.502.7 1.502 1.684 0 .521-.204.932-.61 1.233a1.834 1.834 0 01-1.136.379zM61.438 12.78c-.138 0-.48-.028-1.025-.085-.05 1.14-.074 3.011-.074 5.616 0 .43-.15.801-.451 1.11-.301.31-.684.464-1.148.464-.464 0-.848-.154-1.153-.464a1.526 1.526 0 01-.458-1.11v-3.406c0-1.262.081-3.13.244-5.603.155-2.515.236-4.39.244-5.628.008-2.116.602-3.129 1.782-3.04.277-.072.66-.127 1.148-.164a24.392 24.392 0 011.782-.055c1.595 0 3.093.517 4.492 1.55 1.555 1.156 2.332 2.564 2.332 4.224 0 2.083-.826 3.74-2.478 4.968-1.465 1.083-3.21 1.624-5.237 1.624zm.61-9.216c-.26 0-.49.002-.69.007-.199.004-.368.014-.506.03 0 .383-.004.956-.012 1.721-.016.904-.094 2.311-.232 4.224.415.065.692.098.83.098 1.27 0 2.323-.302 3.162-.904.895-.643 1.342-1.493 1.342-2.551 0-.692-.419-1.306-1.257-1.843a4.761 4.761 0 00-2.637-.782zM83.252 3.943c-.163 0-.334-.025-.513-.073a14.642 14.642 0 00-3.845-.537c-.61 0-1.265.048-1.965.146-.7.098-1.445.244-2.234.44 0 1.082-.037 2.69-.11 4.821.456-.032 2.047-.183 4.773-.451 1.554-.155 2.539-.232 2.954-.232.48 0 .891.152 1.233.457.342.306.513.71.513 1.215 0 .968-.517 1.518-1.55 1.648-.652.049-1.624.13-2.918.244-1.156.13-2.897.289-5.225.476a47.551 47.551 0 00-.085 2.503c0 1.595.093 2.502.28 2.722.09.106.603.158 1.539.158.504 0 1.265-.012 2.282-.036 1.018-.025 1.779-.037 2.283-.037.163 0 .403-.024.72-.073a5.15 5.15 0 01.708-.073c.472 0 .875.134 1.209.403.382.3.574.724.574 1.27 0 .91-.477 1.456-1.429 1.635-.814.154-2.502.232-5.066.232-2.653 0-4.382-.358-5.188-1.074-.887-.79-1.33-2.499-1.33-5.127 0-1.09.08-2.729.238-4.914.159-2.185.238-3.818.238-4.9 0-.286-.04-.707-.122-1.264-.082-.558-.122-.979-.122-1.264 0-1.237.57-1.855 1.709-1.855.358 0 .687.102.989.305a25.685 25.685 0 012.691-.531C77.333.059 78.137 0 78.894 0c2.05 0 3.69.236 4.92.708.748.285 1.123.802 1.123 1.55 0 .423-.147.798-.44 1.123-.325.375-.74.562-1.245.562zM100.061 4.529c-.415.854-1.25 2.702-2.502 5.542-1.042 2.376-1.93 4.24-2.662 5.59-1.27 2.344-1.949 3.585-2.038 3.724-.48.708-1.034 1.062-1.66 1.062-.448 0-.843-.147-1.184-.44a1.539 1.539 0 01-.562-1.208c0-.399.85-2.075 2.551-5.03-.626-.903-1.525-2.274-2.697-4.113-.88-1.351-2.17-3.39-3.87-6.116a1.685 1.685 0 01-.244-.867c0-.472.183-.87.55-1.196.341-.301.74-.452 1.195-.452.538 0 1.026.273 1.465.818l.916 1.465 2.1 3.565c.846 1.456 1.595 2.608 2.246 3.454.618-1.245 1.51-3.129 2.673-5.652.244-.561.61-1.412 1.099-2.551.309-.732.838-1.099 1.586-1.099.448 0 .843.147 1.185.44.374.317.561.716.561 1.196 0 .277-.236.9-.708 1.868z"
            transform="translate(37.492 9.908)"
          />
        </G>
        <G fill="#FCE703" fillRule="nonzero">
          <Path
            d="M6.384 20.337c-2.067 0-3.694-.46-4.883-1.38C.501 18.194 0 17.31 0 16.31c0-.513.155-.938.464-1.276.31-.338.736-.507 1.282-.507.732 0 1.27.375 1.61 1.123.465 1.001 1.515 1.502 3.15 1.502 1.4 0 2.755-.305 4.065-.916 1.36-.626 2.039-1.314 2.039-2.063 0-1.025-.423-1.7-1.27-2.026-.602-.236-1.81-.374-3.625-.415-1.408-.033-2.67-.297-3.784-.793-1.506-.676-2.246-1.644-2.222-2.906.024-1.587.87-3.041 2.539-4.364 1.668-1.322 3.508-1.983 5.518-1.983.797 0 1.782.183 2.954.549 1.456.456 2.185.98 2.185 1.575 0 .423-.147.797-.44 1.123-.325.366-.744.549-1.257.549-.382 0-.954-.081-1.715-.244-.761-.163-1.337-.244-1.727-.244a6.447 6.447 0 00-2.991.757c-.977.504-1.465 1.053-1.465 1.647 0 .31.149.564.446.763.297.2.742.34 1.336.422l3.113.17c1.807.139 3.235.647 4.285 1.526 1.155.977 1.733 2.328 1.733 4.053 0 2.1-1.196 3.69-3.589 4.773-1.823.822-3.906 1.233-6.25 1.233zM41.797 3.93c-.138.334-.301.745-.488 1.234a65.714 65.714 0 01-.672 2.1c-.464 1.195-1.2 2.937-2.21 5.224-1.033 2.327-1.773 4.065-2.22 5.212-.335.855-.648 1.538-.94 2.051-.383.675-.965 1.013-1.746 1.013a2.2 2.2 0 01-1.258-.378c-.44-.293-.675-.68-.708-1.16-.374-.936-.61-1.7-.708-2.295-.358-1.741-.854-4.358-1.49-7.849-.528 1.636-1.098 3.105-1.708 4.407-.912 1.953-1.51 3.487-1.795 4.602.074.179.11.37.11.574 0 .504-.223.915-.671 1.232-.39.269-.822.403-1.294.403-.594 0-1.086-.15-1.477-.451-.423-.334-.643-.79-.66-1.368l-.378-1.428c-.268-1.27-.708-3.165-1.318-5.688-.537-1.929-1.436-4.676-2.698-8.24a1.792 1.792 0 01-.11-.61c0-.489.188-.875.562-1.16.334-.26.736-.39 1.208-.39.619 0 1.111.26 1.477.78.204.285.436.802.696 1.55C22.1 5.592 22.998 8.936 24 13.33c.651-1.587 1.314-3.459 1.99-5.615.545-1.758.989-3.007 1.33-3.748.814-1.774 1.644-2.66 2.49-2.66.798 0 1.38.435 1.746 1.305.18.415.354 1.168.525 2.259.049.333.155 1.151.317 2.453.171 1.4.684 3.947 1.539 7.642.862-2.018 2.022-4.928 3.479-8.728.09-.228.3-.977.634-2.246.236-.912.533-1.632.891-2.16.391-.57.912-.855 1.563-.855.496 0 .907.152 1.233.457.325.306.488.698.488 1.178 0 .171-.142.61-.427 1.319zM54.419 5.164c-.423 0-1.583-.114-3.48-.342-.113 1.497-.17 3.487-.17 5.969l-.012 5.481c1.082-.024 2.185-.037 3.308-.037.488 0 .893.163 1.215.489.321.325.482.716.482 1.172 0 .455-.161.844-.482 1.165-.322.322-.727.482-1.215.482-.456 0-1.14.01-2.05.031-.912.02-1.596.03-2.052.03-.537 0-1.342.072-2.417.214-1.074.143-1.88.214-2.417.214-.488 0-.893-.161-1.214-.482a1.588 1.588 0 01-.482-1.166c0-.456.16-.847.482-1.172.321-.326.726-.488 1.214-.488.554 0 1.282-.061 2.185-.183-.016-.96-.024-2.8-.024-5.518 0-2.214.081-4.325.244-6.335l-2.649.073c-.488 0-.897-.159-1.227-.476a1.577 1.577 0 01-.494-1.184c0-.48.163-.871.488-1.172a1.844 1.844 0 011.111-.476c.716-.065 1.961-.098 3.736-.098 1.595 0 3.65.17 6.164.513 1.001.138 1.502.7 1.502 1.684 0 .521-.204.932-.61 1.233a1.834 1.834 0 01-1.136.379zM61.438 12.78c-.138 0-.48-.028-1.025-.085-.05 1.14-.074 3.011-.074 5.616 0 .43-.15.801-.451 1.11-.301.31-.684.464-1.148.464-.464 0-.848-.154-1.153-.464a1.526 1.526 0 01-.458-1.11v-3.406c0-1.262.081-3.13.244-5.603.155-2.515.236-4.39.244-5.628.008-2.116.602-3.129 1.782-3.04.277-.072.66-.127 1.148-.164a24.392 24.392 0 011.782-.055c1.595 0 3.093.517 4.492 1.55 1.555 1.156 2.332 2.564 2.332 4.224 0 2.083-.826 3.74-2.478 4.968-1.465 1.083-3.21 1.624-5.237 1.624zm.61-9.216c-.26 0-.49.002-.69.007-.199.004-.368.014-.506.03 0 .383-.004.956-.012 1.721-.016.904-.094 2.311-.232 4.224.415.065.692.098.83.098 1.27 0 2.323-.302 3.162-.904.895-.643 1.342-1.493 1.342-2.551 0-.692-.419-1.306-1.257-1.843a4.761 4.761 0 00-2.637-.782zM83.252 3.943c-.163 0-.334-.025-.513-.073a14.642 14.642 0 00-3.845-.537c-.61 0-1.265.048-1.965.146-.7.098-1.445.244-2.234.44 0 1.082-.037 2.69-.11 4.821.456-.032 2.047-.183 4.773-.451 1.554-.155 2.539-.232 2.954-.232.48 0 .891.152 1.233.457.342.306.513.71.513 1.215 0 .968-.517 1.518-1.55 1.648-.652.049-1.624.13-2.918.244-1.156.13-2.897.289-5.225.476a47.551 47.551 0 00-.085 2.503c0 1.595.093 2.502.28 2.722.09.106.603.158 1.539.158.504 0 1.265-.012 2.282-.036 1.018-.025 1.779-.037 2.283-.037.163 0 .403-.024.72-.073a5.15 5.15 0 01.708-.073c.472 0 .875.134 1.209.403.382.3.574.724.574 1.27 0 .91-.477 1.456-1.429 1.635-.814.154-2.502.232-5.066.232-2.653 0-4.382-.358-5.188-1.074-.887-.79-1.33-2.499-1.33-5.127 0-1.09.08-2.729.238-4.914.159-2.185.238-3.818.238-4.9 0-.286-.04-.707-.122-1.264-.082-.558-.122-.979-.122-1.264 0-1.237.57-1.855 1.709-1.855.358 0 .687.102.989.305a25.685 25.685 0 012.691-.531C77.333.059 78.137 0 78.894 0c2.05 0 3.69.236 4.92.708.748.285 1.123.802 1.123 1.55 0 .423-.147.798-.44 1.123-.325.375-.74.562-1.245.562zM100.061 4.529c-.415.854-1.25 2.702-2.502 5.542-1.042 2.376-1.93 4.24-2.662 5.59-1.27 2.344-1.949 3.585-2.038 3.724-.48.708-1.034 1.062-1.66 1.062-.448 0-.843-.147-1.184-.44a1.539 1.539 0 01-.562-1.208c0-.399.85-2.075 2.551-5.03-.626-.903-1.525-2.274-2.697-4.113-.88-1.351-2.17-3.39-3.87-6.116a1.685 1.685 0 01-.244-.867c0-.472.183-.87.55-1.196.341-.301.74-.452 1.195-.452.538 0 1.026.273 1.465.818l.916 1.465 2.1 3.565c.846 1.456 1.595 2.608 2.246 3.454.618-1.245 1.51-3.129 2.673-5.652.244-.561.61-1.412 1.099-2.551.309-.732.838-1.099 1.586-1.099.448 0 .843.147 1.185.44.374.317.561.716.561 1.196 0 .277-.236.9-.708 1.868z"
            transform="translate(37.242 10.158)"
          />
        </G>
      </G>
    </Svg>
  );
}