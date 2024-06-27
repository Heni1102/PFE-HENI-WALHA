const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

// Set view engine
app.set('view engine', 'ejs');

// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const produitRoutes = require('./routes/produitRoutes');
app.use('/produits', produitRoutes);
const newsRoutes = require('./routes/newsRoutes');
app.use('/news', newsRoutes);



// Default route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Start the server and sync database
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
