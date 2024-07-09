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

import { useState } from "react";
import axios from 'axios';
// react-router-dom components
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// @mui material components
import Switch from "@mui/material/Switch";

// Construction Progress React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("clicked", username, "-", password);
    e.preventDefault();
const response = [];
    try {
      const response = await axios.post('http://54.167.129.144/building/login/', {
        username,
        password
      });
      await AsyncStorage.setItem('userid', response.data.user);;
      
      console.log('Response:', response.data);
      
      if (response.data.Success == 'login successfully' && response.data.result === 'admin') {
        // Redirect to admin dashboard
        if(rememberMe){
            await AsyncStorage.setItem('login', true);
        }
        navigate('/dashboard');
      } else {
        alert("Login Failed")
      }

    } catch (error) {
      console.error('Error:', error);
      // navigate('/dashboard');
      // Handle error, e.g., show error message
    }
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your User name and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              User Name
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" value={password} fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
