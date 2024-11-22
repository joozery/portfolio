import React, { useState, useEffect } from "react";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper } from "@mui/material";

const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({ title: "", description: "" });

  const fetchActivities = async () => {
    try {
      const response = await fetch("http://localhost:5000/activities");
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  const addActivity = async () => {
    try {
      await fetch("http://localhost:5000/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivity),
      });
      fetchActivities();
      setNewActivity({ title: "", description: "" });
    } catch (error) {
      console.error("Error adding activity:", error);
    }
  };

  const deleteActivity = async (id) => {
    try {
      await fetch(`http://localhost:5000/activities/${id}`, {
        method: "DELETE",
      });
      fetchActivities();
    } catch (error) {
      console.error("Error deleting activity");
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <h2>Admin Dashboard - Manage Activities</h2>

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Title"
          value={newActivity.title}
          onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Description"
          value={newActivity.description}
          onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={addActivity}>
          Add Activity
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.title}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteActivity(activity.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
