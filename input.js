let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  switch (key) {
  case 'w': connection.write("Move: up");
    break;
  case 'a': connection.write("Move: left");
    break;
  case 's': connection.write("Move: down");
    break;
  case 'd': connection.write("Move: right");
    break;
  case 'f': connection.write('Say: sssss');
    break;
  case '\u0003': process.exit();
    break;
  }
};

module.exports = {
  setupInput
};