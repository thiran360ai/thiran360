/**
=========================================================
* Construction Progress React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Instant Tech (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import axios from 'axios';
// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Construction Progress React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Construction Progress React context
import {
  useSoftUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "context";

function Configurator() {
  const [controller, dispatch] = useSoftUIController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  const [location, setLocation] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectID, setProjectID] = useState('');
  const [companyName, setCompanyName] = useState('');
  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });

  const handleSubmit = async (e) => {
    console.log("clicked", projectName, "-", companyName, "-", location);
    e.preventDefault();

    try {
      const response = await axios.post('http://54.167.129.144/building/post/', {
      user: projectID,  
      project_name:projectName,
        company_name:companyName,
        location,
      });
      
      console.log('Response:', response.data);
      
      if (response) {
        // Redirect to admin dashboard
        alert("Project Added");
      } else {
        alert(response.data.message || "Unable to process your req")
      }
      setLocation("");
      setCompanyName("");
      setProjectName("");
      setProjectID("");

      handleCloseConfigurator();

    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show error message
    }
  };


  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <SoftBox>
          <SoftTypography variant="h5">Add Project</SoftTypography>
        </SoftBox>

      


        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </SoftBox>

      <Divider />

      <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
          <SoftBox mb={2}>
              <SoftInput placeholder="Project ID" value={projectID} onChange={(e) => setProjectID(e.target.value)}/>
            </SoftBox>
          <SoftBox mb={2}>
              <SoftInput placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
            </SoftBox>
            <SoftBox mb={2}>
            <select className="form-select" style={{color:"grey"}} value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Default select example">
              <option style={{color:"grey"}} selected>Select Location</option>
              <option style={{color:"grey"}} value="India">India</option>
              <option style={{color:"grey"}} value="UK">UK</option>
              <option style={{color:"grey"}} value="US">US</option>
            </select>
            </SoftBox>
       
           
            <SoftBox mt={4} mb={1}>
              <SoftButton onClick={handleSubmit} color="dark" fullWidth>
                Save
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>

     
    </ConfiguratorRoot>
  );
}

export default Configurator;
