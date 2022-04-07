"use strict";

// Next, open the test file and paste in the following code:

const { test, trait } = use("Test/Suite")("User");
const User = use("App/Models/User");

trait("Test/ApiClient");

test("create a new user and fetch it", async ({ client }) => {
  await User.create({
    username: "user9",
    email: "testing9@gmail.com",
    password: "testing1234",
  });

  const response = await client.get("/user/get/?id=9").end();
  console.log(response.text);

  response.assertStatus(200);
  response.assertJSONSubset([
    {
      username: "user9",
      email: "testing9@gmail.com",
    },
  ]);
});

test("get a specific user by id", async ({ client, assert }) => {
  const response = await client.get("/user/get/?id=7").end();
  console.log(response.text);

  response.assertStatus(200);
  response.assertJSONSubset([
    {
      username: "user7",
      email: "testing7@gmail.com",
    },
  ]);
});
