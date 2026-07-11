const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const User = require("./models/User");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    // Check if admin already exists
    const existingAdmin = await User.findOne({
      role: "admin",
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "saianvesh",
      10
    );

    const admin = await User.create({
      name: "admin",
      email: "admin@smartserve.com",
      password: hashedPassword,
      role: "admin",
      phone: "9876543210",
    });

    console.log("Admin Created Successfully");
    console.log(admin);

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });