const app = require('./src/app.js');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});