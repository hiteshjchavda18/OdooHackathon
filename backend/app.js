const express = require('express');
const cors = require('cors');
const path = require('path');
// const getApiRoutes = require('./APIs/get_api');
// const postApiRoutes = require('./APIs/post_api');

const app = express();
app.use(cors());
app.use(express.json());

const frontendPath = path.join(__dirname, '..', 'frontend');
const stylesPath = path.join(frontendPath, 'User_file', 'styles');
console.log('Frontend path:', frontendPath);
console.log('Styles path:', stylesPath);

// Serve CSS FIRST
app.use('/styles', express.static(stylesPath));

// Serve other static files
app.use(express.static(frontendPath));

// HTML Routes FIRST (before API)
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Auth', 'view', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Auth', 'view', 'register.html'));
});


app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'view', 'userDashboard.html'));
});

app.get('/dashboard/request', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'view', 'request.html'));
});

app.get('/dashboard/assets', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'view', 'assets.html'));
});

app.get('/dashboard/teams', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'view', 'teams.html'));
});

app.get('/dashboard/maintenance', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'view', 'maintenance.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Admin_file', 'view', 'admin-dashboard.html'));
});

// API Routes LAST
// app.use('/api', getApiRoutes);
// app.use('/api', postApiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
