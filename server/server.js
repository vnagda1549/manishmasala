import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { readFile } from "fs/promises";
import { connectToDb, getDb } from "./db.js";
import { ObjectId } from "mongodb";
import bodyParser from "body-parser";

let db;

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Allow requests from both origins
  })
);

app.use(express.json());

const productAdd = async (_root, { product }) => {
  const result = await db.collection("products").insertOne(product);
  const savedProduct = await db
    .collection("products")
    .findOne({ _id: result.insertedId });
  return savedProduct;
};

const productList = async () => {
  console.log("Fetching products from database...");
  const products = await db.collection("products").find({}).toArray();
  console.log("Products fetched: ", products);
  return products;
};

const product = async (_root, { id }) => {
  console.log(`Fetching product with id ${id}`);
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid product ID");
  }
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });
  console.log("Product fetched: ", product);
  return product;
};

const productUpdate = async (_root, { id, product }) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid product ID");
  }
  const result = await db
    .collection("products")
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: product },
      { returnOriginal: false }
    );
  return result.value;
};

const productDelete = async (_root, { id }) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid product ID");
  }
  const result = await db.collection("products").findOneAndDelete({
    _id: new ObjectId(id),
  });
  return result.value;
};

// Review Resolvers
const reviewAdd = async (_root, { review }) => {
  try {
    console.log("Received review:", review);
    const result = await db.collection("reviews").insertOne(review);
    const savedReview = await db
      .collection("reviews")
      .findOne({ _id: result.insertedId });
    console.log("Review added:", savedReview);
    return savedReview;
  } catch (error) {
    console.error("Error adding review:", error);
    throw new Error("Failed to add review");
  }
};

const reviewList = async () => {
  try {
    console.log("Fetching reviews from database...");
    const reviews = await db.collection("reviews").find({}).toArray();
    console.log("Reviews fetched:", reviews);
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews");
  }
};
const typeDefs = await readFile("./schema.graphql", "utf8");

const resolvers = {
  Query: {
    productList: productList,
    product: product,
    reviewList: reviewList,
  },
  Mutation: {
    productAdd: productAdd,
    productUpdate,
    productDelete,
    reviewAdd: reviewAdd, // Add reviewAdd mutation
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

await apolloServer.start();

app.use(
  "/graphql",
  expressMiddleware(apolloServer, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

console.log("Starting server...");

connectToDb((err) => {
  if (!err) {
    app.listen(4000, () => {
      console.log("Express Server started on port 4000");
      console.log(
        "GraphQL Server started on port http://localhost:4000/graphql"
      );
    });
    db = getDb();
  } else {
    console.log("Failed to connect to MongoDB", err);
  }
});
