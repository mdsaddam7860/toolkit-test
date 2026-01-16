import "dotenv/config";
import { app } from "./app.js";
// import { testFunction } from "./controllers/test.controller.js";

const PORT = process.env.PORT || 5000;

// testFunction(); // Run Function

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
