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

import { useState } from "react";
import axios from 'axios';

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Construction Progress React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import InputBase from '@material-ui/core/InputBase';

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import { Password } from "@mui/icons-material";

import { useNavigate } from 'react-router-dom';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    width: '100%',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);



function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const handleSetAgremment = () => setAgremment(!agreement);

  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    console.log("clicked", username, "-", password, "-", location, "-", email);
    e.preventDefault();

    try {
      const response = await axios.post('http://54.167.129.144/building/create_user/', {
        username,
        email,
        password,
        role,
        location
      });
      
      console.log('Response:', response.data);
      
      if (response.data.message == 'User created successfully') {
        // Redirect to admin dashboard
        navigate('/authentication/sign-in');
      } else {
        alert(response.data.message || "Unable to process your req")
      }

    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <BasicLayout
      title="Welcome!"
      description="Please enter your details to get started"
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </SoftBox>
            <SoftBox mb={2}>
            <select className="form-select" style={{color:"grey"}} value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Default select example">
              <option style={{color:"grey"}} selected>Select Location</option>
              <option style={{color:"grey"}} value="India">India</option>
              <option style={{color:"grey"}} value="UK">UK</option>
              <option style={{color:"grey"}} value="US">US</option>
            </select>
            </SoftBox>
            <SoftBox mb={2}>
            <select className="form-select" style={{color:"grey"}} value={role} onChange={(e) => setRole(e.target.value)} aria-label="Default select example">
              <option style={{color:"grey"}} selected>Select Role</option>
              <option style={{color:"grey"}} value="member">member</option>
              <option style={{color:"grey"}} value="admin">admin</option>
            </select>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton component={Link} to="/authentication/sign-in" variant="gradient" onClick={handleSubmit} color="dark" fullWidth>
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
