export interface SvgWaveProps {}

// Followed tutorial from
// https://dev.to/theliquidcharcoal/pure-html-animation-animate-svg-with-animate-2a5m
const SvgWave: React.FC<SvgWaveProps> = () => {
  return (
    <div
      // className="absolute bottom-0 left-0 right-0 text-white z-10 overflow-hidden"
      style={{ height: 140 }}
    >
      <svg width="100%" height="100%" fill="none" className="absolute bottom-0 left-0 right-0">
        <path
          className="fill-current text-gray-50 transition-colors duration-500 dark:text-gray-800"
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
            className="fill-current text-gray-50 transition-colors duration-500 dark:text-gray-800"
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
    </div>
  );
};

export default SvgWave;
