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

const { info, dark } = colors;

const globals = {
  html: {
    scrollBehavior: "smooth",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
};

export default globals;
