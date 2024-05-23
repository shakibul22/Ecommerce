const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hyww9ng.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: "Forbidden access" });
  }
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: true, message: "Unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("EcommerceDB").collection("users");
    const productsCollection = client.db("EcommerceDB").collection("products");

    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      if (user?.role !== "admin") {
        return res.status(403).send({ error: true, message: "Forbidden access" });
      }
      next();
    };

    
    app.get("/products", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });

    
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
      }

      const filter = { _id: new ObjectId(id) };

      try {
        const result = await productsCollection.findOne(filter);
        if (!result) {
          return res.status(404).send({ error: "Product not found" });
        }
        res.send(result);
      } catch (error) {
        console.error("Error fetching product: ", error);
        res.status(500).send({ error: "An error occurred while fetching the product" });
      }
    });

    app.get('/search', async (req, res) => {
        const { query } = req.query;
      
        if (!query) {
          return res.status(400).json({ message: 'Query parameter is required' });
        }
      
        try {
          const products = await productsCollection.find({
            $or: [
              { brand: { $regex: query, $options: 'i' } },
              { category: { $regex: query, $options: 'i' } },
            //   { description: { $regex: query, $options: 'i' } },
              { title: { $regex: query, $options: 'i' } }
            ]
          }).toArray();
          res.json(products);
        } catch (error) {
          res.status(500).json({ message: 'Server error', error });
        }
    });
    
    

  


    app.post("/user", async (req, res) => {
      const userInfo = req.body;
      const query = { email: userInfo.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "User already exists" });
      }
      const result = await userCollection.insertOne(userInfo);
      res.send(result);
    });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("eCommerceDb is running");
});

app.listen(port, () => {
  console.log(`eCommerceDb is running on port ${port}`);
});
