import * as dotenv from "dotenv";
dotenv.config();

const populate = () =>
  new Promise(async (resolve, reject) => {
    resolve(1)
  });

populate()
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => process.exit());
