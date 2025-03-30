db = db.getSiblingDB("mydb");
db.createUser({
  user: "admin",
  pwd: "123456",
  roles: [{ role: "readWrite", db: "mydb" }]
});
