/* eslint-disable react/prop-types */
// Construction Progress React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import axios from "axios";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// const response = await axios.get('http://54.167.129.144/building/total-users/');

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "employee", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      employee: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      function: <Function job="Admin" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      employee: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="User" org="Construction" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      employee: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      function: <Function job="Admin" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/22  
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      employee: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="User" org="Construction" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/23
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      employee: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/23
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      employee: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      function: <Function job="User" org="Construction" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/23
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
  ],
};


const fetchData = async () => {
  try {
    const response = await axios.get('http://54.167.129.144/building/project/');
    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
};

const getCustomersData = () => {
  axios
      .get("https://jsonplaceholder.typicode.com/customers")
      .then(data => console.log(data.data))
      .catch(error => console.log(error));
};
getCustomersData();

const updateAuthorsTableData = async () => {
  const data = await fetchData(); // Fetch data from the API
  // Update rows with fetched data
  if (!Array.isArray(data)) {
    console.error('Data fetched is not an array:', data);
    return; // Exit early if data is not an array
  }
  const updatedRows = data.map(user => ({
    employee: <Author name={user.username} email={user.email} />,
    function: <Function job={user.role} org="Construction" />,
    status: (
      <SoftBadge
        variant="gradient"
        badgeContent={user.is_active ? "online" : "offline"}
        color={user.is_active ? "success" : "secondary"}
        size="xs"
        container
      />
    ),
    employed: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {/* You can format the date according to your requirement */}
        {/* Here I'm assuming employed date is stored in "employed" key */}
        {user.employed}
      </SoftTypography>
    ),
    action: (
      <SoftTypography
        component="a"
        href="#"
        variant="caption"
        color="secondary"
        fontWeight="medium"
      >
        Edit
      </SoftTypography>
    ),
  }));
  // Update authorsTableData with the new rows
  authorsTableData.rows = updatedRows;
};



updateAuthorsTableData();
export default authorsTableData;
