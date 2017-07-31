import Lowdb = require("lowdb");
//import fileAsync = require("lowdb/lib/storages/file-async");

let ldb: Lowdb = new Lowdb("./work/test-db.json", {
  storage: require("lowdb/lib/storages/file-async")
});

(async () => {
console.log(await ldb.get("reusables")
.push({ url: "xxx", id: "sdfcsdf"}).write()
//.find({ url: "testxurl" })

);
})();