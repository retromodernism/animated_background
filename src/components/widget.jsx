import "./widget.css";

const colors = [
  "#e1a1ff",
  "#74d878",
  "#f4ffe2",
  "#deb5ff",
  "#c29d93",
  "#b5ffe2",
  "#e3e6b8",
  "#ffc1ef",
  "#fec8ee",
  "#c4afff",
  "#ecf9d4",
  "#e3b4ff",
];

const convertHexToRGBA = (hexCode, opacity) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

const Widget = () => (
  <div className="animation">
    {/* <h1>Animation should be here!</h1> */}
    <div className="animated-background">
      {colors.map((color) => (
        <div className="block" style={{ backgroundColor: color }}>
          <div className="waves-animation">
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g class="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill={convertHexToRGBA(color, 70)}
                  // fill="rgba(255,255,255,0.7)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill={convertHexToRGBA(color, 50)}
                  // fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill={convertHexToRGBA(color, 30)}
                  // fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill={color} />
              </g>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Widget;
