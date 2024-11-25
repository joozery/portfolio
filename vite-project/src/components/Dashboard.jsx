import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Dashboard() {
  const theme = useTheme(); // ใช้ useTheme เพื่อดึงค่าจากธีม

  return (
    <Box
      className="dashboard"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(4),
        borderRadius: theme.shape?.borderRadius || 4,
      }}
    >
      {/* Header */}
      <Typography variant="h4" color="primary" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Monitor and manage your application with the widgets below.
      </Typography>

      {/* Grid Layout for Widgets */}
      <Grid container spacing={3} mt={3}>
        {/* Widget 1: Users */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: theme.spacing(2),
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="primary">
              Total Users
            </Typography>
            <Typography variant="h4" color="textSecondary">
              1,230
            </Typography>
          </Paper>
        </Grid>

        {/* Widget 2: Revenue */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: theme.spacing(2),
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="primary">
              Revenue
            </Typography>
            <Typography variant="h4" color="textSecondary">
              $25,000
            </Typography>
          </Paper>
        </Grid>

        {/* Widget 3: New Orders */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: theme.spacing(2),
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="primary">
              New Orders
            </Typography>
            <Typography variant="h4" color="textSecondary">
              150
            </Typography>
          </Paper>
        </Grid>

        {/* Widget 4: Active Users */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: theme.spacing(2),
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="primary">
              Active Users
            </Typography>
            <Typography variant="h4" color="textSecondary">
              45
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box mt={5} textAlign="center">
        <Button variant="contained" color="primary" sx={{ marginRight: theme.spacing(2) }}>
          View Details
        </Button>
        <Button variant="outlined" color="secondary">
          Manage Settings
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
