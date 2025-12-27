const express = require('express');
const cors = require('cors');
const path = require('path');
// const connectDB = require('./database/connection');
// connectDB();
const routes = require('./routes');

const app = express();
app.use(cors());

const frontendPath = path.join(__dirname, '..', 'frontend');
const stylesPath = path.join(frontendPath, 'User_file', 'styles');
console.log('Frontend path:', frontendPath);
console.log('Styles path:', stylesPath); // Debug CSS path

// Serve CSS FIRST (accessible at /styles/*.css)
app.use('/styles', express.static(stylesPath));

// Serve other static files (JS/images/etc.)
app.use(express.static(frontendPath));

// Routes AFTER static middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Home.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'userDashboard.html'));
});

app.get('/dashboard/request', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'request.html'));
});

app.get('/dashboard/assets', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'assets.html'));
});

app.get('/dashboard/teams', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'teams.html'));
});

app.get('/dashboard/maintenance', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'maintenance.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Admin_file', 'admin-dashboard.html'));
});

app.get('/admin/')

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
