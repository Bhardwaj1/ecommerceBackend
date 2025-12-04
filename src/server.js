require("dotenv").config()
const app = require("./app");
const cors=require("cors");

// ⚡ CORS middleware must come before routes
app.use(cors({
  origin: '*' // Allow all for development
}));
const PORT = process.env.PORT||5000;
const connectDB=require("./config/database");
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
