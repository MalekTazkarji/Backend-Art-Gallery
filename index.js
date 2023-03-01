import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import artists from "./src/routes/artistroutes.js";
import hero from "./src/routes/hero.js";
import users from "./src/routes/Users.js";
import arts from "./src/routes/artroutes.js";
import bodyParser from "body-parser";
import aboutus from "./src/routes/AboutUsroutes.js";

const app = express();
const PORT = 5000;

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use('/public', express.static('./public'));


app.use("/artists", artists);
app.use("/", hero);
app.use("/", users);
app.use("/arts",arts);
app.use("/aboutus",aboutus);


mongoose.connect(process.env.MONGO_URI, (err, connect) => {
  if (err) console.log(`Error: ${err.message}`);
  else {
    console.log(`MongoDB connected:${connect.host}`);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  }
});


const visitorSchema = new mongoose.Schema({
  name: String,
  count: Number,
});
const Visitor = mongoose.model("Visitor", visitorSchema);

app.get("/visits", async function (req, res) {
  // Storing the records from the Visitor table
  let visitors = await Visitor.findOne({ name: "localhost" });

  // If the app is being visited first
  // time, so no records
  if (visitors == null) {
    // Creating a new default record
    const beginCount = new Visitor({
      name: "localhost",
      count: 1,
    });

    // Saving in the database
    beginCount.save();

    // Sending thee count of visitor to the browser
    res.send(`<h2>Counter: ` + 1 + "</h2>");

    // Logging when the app is visited first time
    console.log("First visitor arrived");
  } else {
    // Incrementing the count of visitor by 1
    visitors.count += 1;


    // Saving to the database
    visitors.save();

    // Sending thee count of visitor to the browser
    res.status(200).send(`Visitors Count: ` + visitors.count);

    // Logging the visitor count in the console
    console.log("visitor arrived: ", visitors.count);
  }
});

// app.listen(port, () => console.log(`listening on port ${port}`));
