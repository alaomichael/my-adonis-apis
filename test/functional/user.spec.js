"use strict";

// Next, open the test file and paste in the following code:

const { test, trait } = use("Test/Suite")("User");
const User = use("App/Models/User");

trait("Test/ApiClient");

test("create a new user and fetch it", async ({ client }) => {


  const response = await User.create({
    username: "user10",
    email: "testing10@gmail.com",
    password: "testing1234",
  });
  console.log(response.text);
  response.assertStatus(200);
});

test("get the home page", async ({ client, assert }) => {
  const response = await client.get("/").end();
  console.log(response.text);
  response.assertStatus(200);
  response.assertText(
    "Welcome to the Adonis API tutorial ,updated welcome page!"
  );
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
