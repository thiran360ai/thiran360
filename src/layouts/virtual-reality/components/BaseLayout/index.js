/**
=========================================================
* Construction Progress React - v4.0.1
=========================================================

* Product Page: https://www.thiran360.ai/product/Construction-Progress
* Copyright 2023 Thiran360AI (https://www.thiran360.ai)

Coded by www.thiran360.ai

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Construction Progress React components
import SoftBox from "components/SoftBox";

// Construction Progress React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

// Construction Progress React context
import { useSoftUIController, setMiniSidenav, setLayout, setTransparentSidenav } from "context";

// Construction Progress React routes
import routes from "routes";

// Custom styles for the BaseLayout
import {
  baseLayout,
  baseLayoutBackground,
  baseLayoutContent,
} from "layouts/virtual-reality/components/BaseLayout/styles";

// Images
import brand from "assets/images/logo-ct.png";

function BaseLayout({ children }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the document layout to VR for the VR view
  useEffect(() => {
    setLayout(dispatch, "vr");
    setTransparentSidenav(dispatch, false);
  }, [pathname]);

  return (
    <SoftBox sx={baseLayout}>
      <SoftBox mt={3} mx={3}>
        <DashboardNavbar />
      </SoftBox>
      <SoftBox sx={baseLayoutBackground}>
        <SoftBox display={{ xs: "block", lg: "none" }}>
          <Sidenav
            brand={brand}
            brandName="Construction Progress PRO"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </SoftBox>
        <SoftBox sx={baseLayoutContent}>
          <SoftBox display={{ xs: "none", lg: "block" }}>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="Construction Progress PRO"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          </SoftBox>
          <DashboardLayout>{children}</DashboardLayout>
        </SoftBox>
      </SoftBox>
      <SoftBox pb={2} pt={0.25}>
        <Footer />
      </SoftBox>
    </SoftBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
