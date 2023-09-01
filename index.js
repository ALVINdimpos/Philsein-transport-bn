const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add this line to import the cors middleware
const db = require("./models");
const userRoutes = require("./routes/users");
const contactRoutes = require("./routes/contact");
const projectForwardingQuote = require("./routes/ProjectForwardingQuoteRequest");
const customClearanceService = require("./routes/customClearanceService.js");
const cargopackagingandlashingRoutes = require("./routes/cargopackagingandlashingRoutes");
const CargoEscortService = require("./routes/cargoEscortServicesRoutes");
const requestQuickQuoteRoutes = require("./routes/requestQuickQuoteRoutes");
const QuoteRequest =require('./routes/QuoteRequestRutes')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors());

// Test route
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

// CRUD routes
app.use("/users", userRoutes);
app.use("/querry", contactRoutes);
app.use("/projectForwardingQuote", projectForwardingQuote);
app.use("/customClearanceService", customClearanceService);
app.use("/cargopackagingandlashing", cargopackagingandlashingRoutes);
app.use("/cargoEscortService", CargoEscortService);
app.use("/requestQuickQuote", requestQuickQuoteRoutes);
app.use("/QuoteRequest", QuoteRequest);

// Error handling middleware
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// Sync database and start server
db.sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
