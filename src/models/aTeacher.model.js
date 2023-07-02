module.exports = {
  RATE: "insert into rate(title, rate, descr, groups_id, users_id, pupils_id)values($1,$2,$3,$4,$5,$6);",
  GETRATE: "SELECT * FROM rate WHERE users_id = $1;",
  DELETERATE: "DELETE FROM rate WHERE id = $1;",
  GETRATING:
    "SELECT  sum((rate * 100) / 10 )/ count(*) AS rate_percentage FROM rate WHERE groups_id = $1;",
};
