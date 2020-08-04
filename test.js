const Caver = require("caver-js");

const accessKeyId = "201373a4713f5d6f6dd0409035dbf89e7a89ddb1";
const secretAccessKey = "253c8ecb52c79a8fd895beada9e471df7be8d429";
const option = {
  headers: [
    {
      name: "Authorization",
      value:
        "Basic " +
        Buffer.from(accessKeyId + ":" + secretAccessKey).toString("base64"),
    },
    { name: "origin", value: "localhost" },
    { name: "x-krn", value: "krn:1001:node" },
  ],
};

const caver = new Caver(
  new Caver.providers.HttpProvider(
    "https://node-api.beta.klaytn.io/v1/klaytn",
    option
  )
);

test();
async function test() {
  console.log(caver.currentProvider);
  //   const senderKeyring = caver.wallet.add(
  //     caver.wallet.keyring.createFromPrivateKey(
  //       "0x72ebaed478e97f936b2c4c0a6f50c413988a96a9c824abb9cd51cec406113448"
  //     )
  //   );
  //   const kip17 = new caver.kct.kip17(
  //     "0xFDAb61A8a86d635108C747Ae5a17B9A7D4d747dF"
  //   );
  //   const transferResult = await kip17.transferFrom(
  //     senderKeyring.address,
  //     caver.wallet.keyring.generate().address,
  //     3964688417759567,
  //     {
  //       from: senderKeyring.address,
  //     }
  //   );
  //   console.log(transferResult);
}
