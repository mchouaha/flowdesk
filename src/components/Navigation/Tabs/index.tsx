import * as React from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode
  index?: number
  value?: number
  setValue?: Function
}

function TabPanel(props: TabPanelProps) {
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
          {children}
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

const BasicTabs: React.FunctionComponent<TabPanelProps> = ({children, index, setValue}) =>  {

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue && setValue(newValue)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', textDecoration: 'lowercase' }}>
        <Tabs value={index} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="recent trades" {...a11yProps(0)} />
          <Tab label="ticker" {...a11yProps(1)} />
          <Tab label="24 ticker" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={index} index={index}>
        {children}
      </TabPanel>
    </Box>
  );
}

export default BasicTabs