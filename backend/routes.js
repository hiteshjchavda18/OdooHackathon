// handling web routes
const express = require('express');
const router = express.Router();
const path = require('path');



const frontendPath = path.join(__dirname, '..', 'frontend');
const stylesPath = path.join(frontendPath, 'User_file', 'styles');
console.log('Frontend path:', frontendPath);

// Route for user dashboard
router.get('/Dashboard', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'userDashboard.html'));
});

// Route for request page
router.get('/request', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'request.html'));
});

// Route for admin dashboard
router.get('/admin-dashboard', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Admin_file', 'admin-dashboard.html'));
});

module.exports = router;