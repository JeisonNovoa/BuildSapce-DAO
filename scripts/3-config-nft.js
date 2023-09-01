import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x79D9d9dadDf68E0aF34eC6434afB8365655c4999", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "DaoGameToken NFT",
        description: "This NFT will give you access to Ready Player Dao!",
        image: readFileSync("scripts/assets/iconRPD.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();