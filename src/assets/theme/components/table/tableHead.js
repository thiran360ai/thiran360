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

// Construction Progress React base styles
import borders from "assets/theme/base/borders";

// Construction Progress React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

const tableHead = {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};

export default tableHead;
