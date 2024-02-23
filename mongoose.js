const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydatabase");


const Schema = mongoose.Schema;
const mySchema = new Schema({
    name: String,
    age: Number
});


async function run() {
    const PersonModel = await mongoose.model("PersonModel", mySchema);
    const newPerson = await new PersonModel({ name: "John", age: 30 });
    newPerson.save();
}


run();