
import mongoose, { model, models, Schema } from "mongoose";

const URI = `badjokes-oqauztob5-d-opri.vercel.app`;

const jokesSchema = new Schema({
  id: String,
  text: String,
  author: String,
  categories: [String],
});

const Joke = models.Joke || model("Joke", jokesSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllJokes() {
  await connectDatabase();

  const jokes = await Joke.find({});
  return jokes;
}

async function getJoke(id) {
  await connectDatabase();

  const joke = await Joke.findOne({
    id,
  });
  return joke;
}

export { getAllJokes, getJoke };