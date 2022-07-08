import express from 'express';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import cors from 'cors';

// Importing routes
import mealDataRoutes from './routes/mealData.js'

const app = express();

//Middleware

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/meals', mealDataRoutes)

// this is connection is failing. to be investigated
// const CONNECTION_URL = "mongodb+srv://BoB:BrainsOnBrioche@bobcluster.ntzdqlk.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

// this is connection is failing. to be investigated
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);