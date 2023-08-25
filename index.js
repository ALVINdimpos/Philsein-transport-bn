const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/users'); // Assuming you have a separate users.js route file
const contactRoutes = require('./routes/contact');
const quoteRequestRoutes = require('./routes/quoteRequest');
const customClearanceService=require('./routes/customClearanceService.js');
const cargopackagingandlashingRoutes = require('./routes/cargopackagingandlashingRoutes');
const equipmentRentalsRoutes = require('./routes/equipmentRentalsRoutes');
const CargoEscortService = require('./routes/cargoEscortServicesRoutes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS setup
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Test route
app.get('/', (req, res, next) => {
  res.send('Hello World');
});

// CRUD routes
app.use('/users', userRoutes); // Use the userRoutes for /users endpoints
app.use('/querry',contactRoutes);
app.use('/quoteRequest',quoteRequestRoutes);
app.use('/customClearanceService',customClearanceService);
app.use('/cargopackagingandlashing', cargopackagingandlashingRoutes);
app.use('/equipmentRentals', equipmentRentalsRoutes );
app.use('/cargoEscortService', CargoEscortService);

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
  .catch(err => console.log(err));
