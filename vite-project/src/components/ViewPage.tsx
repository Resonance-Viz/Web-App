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
            top: {xs:80, md:100, xl:120},
            left: 0,
            width: { xs: '100px', sm: '120px', md: '150px', lg: '180px', xl: '250px' },
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
                color: '#d3d3d3',
              },
              '& .Mui-selected': {
                color: blue[500],
              },
            }}
          >
            <Tab
              label={
                <Typography
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '14px',
                      md: '20px',
                      lg: '24px',
                      xl: '33px',
                    },
                  }}>
                  Character Usage
                </Typography>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <Typography
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '14px',
                      md: '20px',
                      lg: '24px',
                      xl: '33px',
                    },
                  }}
                >
                  Team Usage
                </Typography>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Box sx={{ transform: { xs: '80%', sm: '100%'}, marginLeft: { xs: '100px', sm: '150px', md: '180px', lg: '250px', xl: '400px' } }}>
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
