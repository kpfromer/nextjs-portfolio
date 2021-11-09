export interface SvgWaveProps {}

// Followed tutorial from
// https://dev.to/theliquidcharcoal/pure-html-animation-animate-svg-with-animate-2a5m
const SvgWave: React.FC<SvgWaveProps> = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 text-white z-10 overflow-hidden"
      style={{ height: 150 }}
    >
      <svg width="100%" height="150px" fill="none" className="absolute bottom-0 left-0 right-0">
        <path
          className="fill-current text-gray-50"
          d="
    M0 67
    C 273,183
      822,-40
      1920.00,106 

    V 359 
    H 0 
    V 67
    Z"
        >
          <animate
            repeatCount="indefinite"
            fill="#454599"
            attributeName="d"
            // dur="15s"
            dur="30s"
            values="
      M0 77 
      C 473,283
        822,-40
        1920,116 

      V 359 
      H 0 
      V 67 
      Z; 

      M0 77 
      C 473,-40
        1222,283
        1920,136 

      V 359 
      H 0 
      V 67 
      Z; 

      M0 77 
      C 973,260
        1722,-53
        1920,120 

      V 359 
      H 0 
      V 67 
      Z; 

      M0 77 
      C 473,283
        822,-40
        1920,116 

      V 359 
      H 0 
      V 67 
      Z
      "
          />
        </path>
      </svg>
      {/* <svg
      preserveAspectRatio="none"
      width="1440"
      height="74"
      viewBox="0 0 1440 74"
      className="absolute bottom-0 left-0 right-0 animate-wave"
      style={{
        width: '3200px',
        // minWidth: 600,
      }}
    >
      <path
        className="fill-current text-gray-50"
        d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
      ></path>
    </svg> */}
    </div>
  );
};

export default SvgWave;
