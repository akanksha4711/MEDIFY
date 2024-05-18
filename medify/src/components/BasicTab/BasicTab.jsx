import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import BookingComponent from '../BookingComponent/BookingComponent';

function CustomTabPanel(props) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({name,address,city,state,zipcode,rating,bookings,setBookings}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const timeSlots = {
    "Morning": ["11:30 AM"],
    "Afternoon": ["12:00 PM","12:30 PM","01:30 PM","02:00 PM","02:30 PM"],
    "Evening": ["06:00 PM","06:30 PM","07:00 PM","07:30 PM"]
  }

  const getDate = (num) => {
    const currentDate = new Date(new Date().getTime() + num*24 * 60 * 60 * 1000);
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    return `${month}/${day}/${year}`
  }

  const TabContent = ({num}) => {
    return (
        <Stack direction={'column'} spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={2}>Morning</Grid>
            {timeSlots.Morning.map((time) => <Grid xs={2} item><BookingComponent time={time} name={name} address={address} city={city} state={state} zipcode={zipcode} rating={rating} getDate={getDate} num={num} bookings={bookings} setBookings={setBookings}/></Grid>)}
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={2}>Afternoon</Grid>
            {timeSlots.Afternoon.map((time) => <Grid xs={2} item><BookingComponent time={time} name={name} address={address} city={city} state={state} zipcode={zipcode} rating={rating} getDate={getDate} num={num} bookings={bookings} setBookings={setBookings}/></Grid>)}
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={2}>Evening</Grid>
            {timeSlots.Evening.map((time) => <Grid xs={2} item><BookingComponent time={time} name={name} address={address} city={city} state={state} zipcode={zipcode} rating={rating} getDate={getDate} num={num} bookings={bookings} setBookings={setBookings}/></Grid>)}
          </Grid>
        </Stack>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={getDate(0)} {...a11yProps(0)} />
          <Tab label={getDate(1)} {...a11yProps(1)} />
          <Tab label={getDate(2)} {...a11yProps(2)} />
          <Tab label={getDate(3)} {...a11yProps(3)} />
          <Tab label={getDate(4)} {...a11yProps(4)} />
          <Tab label={getDate(5)} {...a11yProps(5)} />
          <Tab label={getDate(6)} {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabContent num={0}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TabContent num={1}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TabContent num={2}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TabContent num={3}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <TabContent num={4}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <TabContent num={5}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <TabContent num={6}/>
      </CustomTabPanel>
    </Box>
  );
}
