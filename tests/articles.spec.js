const request = require("supertest");
const { app } = require("../server");
const jwt = require("jsonwebtoken");
const config = require("../config");
const mongoose = require("mongoose");
const mockingoose = require("mockingoose");
const User = require("../api/users/users.model");


describe("tester API articles", () => {
  let token;
  const USER_ID = "fake";
  const MOCK_DATA = [
    {
      _id: USER_ID,
      name: "ana",
      email: "nfegeg@gmail.com",
      password: "azertyuiop",
    },
];
  beforeEach(() => {
    token = jwt.sign({ userId: USER_ID }, config.secretJwtToken);
    mockingoose(User).toReturn(MOCK_DATA, "find");
  });

  test("[Articles] Get All", async () => {
    const res = await request(app)
      .get("/api/articles")
      .set("x-access-token", token);
    expect(res.status).toBe(200);
  });
});
