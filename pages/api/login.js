import cookie from "cookie";

const incard = "incard";

const login = async (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (username === incard && password === incard) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "847329842398982fsdhjfs9823yfe", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({
        user: {
          username: incard,
          password: incard,
        },
      });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default login;
