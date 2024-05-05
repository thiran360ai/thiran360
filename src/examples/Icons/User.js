// Import necessary modules
import PropTypes from "prop-types";
import colors from "assets/theme/base/colors";

// Define the User icon component
function User({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={colors[color] ? colors[color].main : colors.dark.main}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12c1.66 0 2.99-1.34 2.99-3S13.66 6 12 6s-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-2.5c0-2.33-4.67-3.5-7-3.5zM12 10c-2.33 0-7 1.17-7 3.5S9.67 17 12 17s7-1.17 7-3.5S14.33 10 12 10zm0 2c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm0-8c2.67 0 8 1.33 8 4v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-3c0-2.67 5.33-4 8-4z" />
    </svg>
  );
}

// Set default props
User.defaultProps = {
  color: "dark",
  size: "24px",
};

// Define prop types
User.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

// Export the User icon component
export default User;
