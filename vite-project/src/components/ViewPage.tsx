import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import LargeContainer from './LargeContainer';
import { StructuredData } from '../App';
import { blue } from '@mui/material/colors';

interface ViewPageProps {
  data: StructuredData[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >

      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ViewPage: React.FC<ViewPageProps> = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            position: 'fixed',
            top: 80,
            left: 0,
            width: '150px',
            height: '100vh',
            bgcolor: '#1a1a1a',
          }}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              '& .MuiTab-root': {
                color: '#d3d3d3', // Slightly grey white color for unselected tabs
              },
              '& .Mui-selected': {
                color: blue[500], // Default blue color for selected tab
              },
            }}
          >
            <Tab label="Character Usage" {...a11yProps(0)} />
            <Tab label="Team Usage" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <Box sx={{ marginLeft: '150px', flexGrow: 1, p: 3 }}>
          <CustomTabPanel value={value} index={0}>
            <LargeContainer data={data} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            TODO: Team usage
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
}

export default ViewPage;
