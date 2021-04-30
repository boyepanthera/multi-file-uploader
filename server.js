import express from "express";
const app = express();
const { NODE_ENV, PORT: productionPort, IP: productionIP } = process.env;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Multiple uploader api",
  });
});

if (NODE_ENV === "production") {
  app.listen(productionPort, productionIP, () =>
    console.log("Multiple uploader api started in production!")
  );
} else {
  app.listen(productionPort, productionIP, () =>
    console.log("Multiple uploader api started in development!")
  );
}
