import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://jainmrinal140:${process.env.DATABASE_PASSWORD}@cluster0.5yymuvg.mongodb.net/linkseva?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (error) {
    console.log(error.message);
  }
};
