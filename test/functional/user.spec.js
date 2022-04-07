"use strict";

const { test, trait } = use("Test/Suite")("User");
const User = use("App/Models/User");

trait("Test/ApiClient");

test("create a new user", async ({ client }) => {
  // create a user data
  let data = {
    username: "user13",
    email: "testing13@gmail.com",
    password: "testing1234",
  };

  await User.create({
    username: data.username,
    email: data.email,
    password: data.password,
  });
  // always put .end() to your method to initiate it.
  const response = await client.get("/user/get").end();
  console.log("Browser response: ", response.text);

  response.assertStatus(200);
  // check if the response contain the data
  // even when we are not sure of if location
  response.assertJSONSubset([
    {
      username: data.username,
      email: data.email,
    },
  ]);
});

test("get the home page", async ({ client }) => {
  const response = await client.get("/").end();
  console.log(response.text);
  response.assertStatus(200);
  // check if the text is equal to the response
  response.assertText(
    "Welcome to the Adonis API tutorial ,updated welcome page!"
  );
});

test("get a specific user by id", async ({ client }) => {
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
