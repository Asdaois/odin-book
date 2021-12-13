import express from 'express'
import cors from 'cors'

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.listen(3001 || process.env.PORT, () => {
  console.log("Server is running on port 3001!");
});