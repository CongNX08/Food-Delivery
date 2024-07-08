import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://congnx08:Cong24082001@cluster0.xvpcawy.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
