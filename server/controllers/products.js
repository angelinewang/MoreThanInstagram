import Product from "../models/product.js";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

//All routes to create products, to see products, to delete products, and to update products are protected so that only logged in users can access and perform these tasks

// dotenv.config();

// const SECRET = process.env.SECRET;

export async function createProduct(req, res) {
//   const newProduct = new Product(req.body);
  try {
    const product = await new Product(req.body).save();
    res.json(product);
    // const token = createJWT(user);
    // res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    console.log(err);
    res.status(400).json(err);
  }
}

export async function updateProduct(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.json(updatedProduct);
      // const token = createJWT(user);
      // res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      console.log(err);
      res.status(400).json(err);
    }
  }

  export async function productDetail(req, res) {
    try {
    const { id } = req.params;
      const product = await Product.findById(id).populate("seller")
      if (!product) {
        return res.status(401).json({message: "No product with that ID exists", error: true });
      }
      res.json(product);
      // const token = createJWT(user);
      // res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      console.log(err);
      res.status(400).json(err);
    }
  }

  export async function deleteProduct(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(204).send();
      res.json({"message": "Product was successfully deleted."});
      // const token = createJWT(user);
      // res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      next(error);
    }
  }

  export async function getAllProducts(req, res) {
    try {
      const products = await Product.find().populate("seller");
      return res.json(products);
      // const token = createJWT(user);
      // res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      console.log(err);
      res.status(400).json(err);
    }
  }

// export async function login(req, res) {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) return res.status(401).json({ err: "bad credentials" });
//     user.comparePassword(req.body.pw, (err, isMatch) => {
//       if (isMatch) {
//         const token = createJWT(user);
//         res.json({ token });
//       } else {
//         return res.status(401).json({ err: "bad credentials" });
//       }
//     });
//   } catch (err) {
//     return res.status(401).json(err);
//   }
// }

/*----- Helper Functions -----*/

// function createJWT(user) {
//   return jwt.sign(
//     { user }, // data payload
//     SECRET,
//     { expiresIn: "24h" }
//   );
// }
