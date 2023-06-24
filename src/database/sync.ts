import * as dotenv from "dotenv";
dotenv.config();

import Role from "../api/models/Role";
import User from "../api/models/User";

const syncTables = () =>
  new Promise(async (resolve, reject) => {
    await Role.sync().catch((e) => reject(e));
    await User.sync().catch((e) => reject(e));

    resolve("Tables were Synced");
  });

syncTables()
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => process.exit());
