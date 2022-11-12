import cookie from "cookie";

const persistUser = async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);
    const user = { username: "incard", password: "incard" };

    if (token === "847329842398982fsdhjfs9823yfe") {
      res.status(200).json(user);
    } else {
      res.status(403).json({ message: "User forbidden" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default persistUser;
