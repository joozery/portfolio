import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Dashboard() {
  const theme = useTheme(); // ใช้ useTheme เพื่อดึงค่าธีม

  return (
    <Box
      className="dashboard"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(3),
        borderRadius: theme.shape?.borderRadius || 4, // ใช้ค่าจากธีม (ถ้ามี)
      }}
    >
      <Typography variant="h4" color="primary">
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1" color="textSecondary">
        This is the dashboard page.
      </Typography>
    </Box>
  );
}

export default Dashboard;
