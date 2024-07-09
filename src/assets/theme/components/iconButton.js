/**
=========================================================
* Construction Progress React - v3.1.0
=========================================================

* Product Page: https://www.thiran360.ai/product/soft-ui-dashboard-pro-react
* Copyright 2023 Thiran360AI (https://www.thiran360.ai)

Coded by www.thiran360.ai

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Construction Progress React Base Styles
import colors from "assets/theme/base/colors";

const { transparent } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default iconButton;
