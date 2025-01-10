import mycql from "mysql2";
export const dbconnection = () => {
  const conn = mycql.createConnection(
    "mysql://ubrloidy8zck4bbx:iNtaiet3V9S2fB0YjcmZ@b4h6bixzsnkros9rw8zu-mysql.services.clever-cloud.com:3306/b4h6bixzsnkros9rw8zu"
  );
  conn.connect((err) => {
    if (err) return console.log("database erro ", err);
    console.log("conection established");
  });
  return conn;
};
