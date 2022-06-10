// Get Goals

const getMessage = (req, res) => res.send("<h1>Hello from the root route</h1>");

// Set Goal

const users = [
  {
    id: 1,
    name: "test",
  },
];

const getJson = (req, res) => {
  res.json(users);
};

const setMessage = (req, res) => {
  const user = {
    id: Math.floor(Math.random() * 10),
    name: req.body.name,
  };
  users.push(user);
  res.send(users);
};
module.exports = {
  getMessage,
  getJson,
  setMessage,
};
