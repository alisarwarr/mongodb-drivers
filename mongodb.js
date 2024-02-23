const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");


async function run() {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('myCollection');
    await collection.insertOne({ name: "John", age: 30 });
    await client.close();
}


run();