const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const leaveRequestRoutes = require('./routes/leaveRequestRoutes');  
const { connectDB } = require('./config/db');

dotenv.config(); 

const app = express();


app.use(bodyParser.json());


connectDB();


app.use('/api/auth', authRoutes);  
app.use('/api/leave-requests', leaveRequestRoutes);  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

