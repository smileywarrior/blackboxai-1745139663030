const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const mongoUri = 'mongodb+srv://logeshsankar:27112023@cluster0.lo78a.mongodb.net/?retryWrites=true&w=majority';

// MongoDB connection
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Import routes
const authRoutes = require('./routes/auth');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Blood Bank Management System API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
