const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const frontendPath = path.join(__dirname, '..', 'frontend');
console.log('Frontend path:', frontendPath); // Debug: verify path exists

// Serve static files (CSS/JS/images) FIRST
app.use(express.static(frontendPath));

// Routes AFTER static middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Home.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(frontendPath, 'User_file', 'userDashboard.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(frontendPath, 'Admin_file', 'admin-dashboard.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
