const express = require("express");
const connectDB = require("./src/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

// Import and use routes
app.use("/api/roles", require("./src/routes/role.routes"));
app.use("/api/users", require("./src/routes/user.routes"));

// Get all registered routes in the backend app
app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    console.log(middleware.route.path);
  } else if (middleware.name === "router") {
    middleware.handle.stack.forEach((route) => {
      if (route.route) {
        console.log(route.route.path);
      }
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
