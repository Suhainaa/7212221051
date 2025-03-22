require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
const userRoutes = require('./Routes/user');   
const fileRoutes = require('./Routes/files');

app.use('/users', userRoutes);
app.use('/files', fileRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
