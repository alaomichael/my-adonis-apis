"use strict";

// Next, open the test file and paste in the following code:

const { test, trait } = use("Test/Suite")("User");
const User = use("App/Models/User");

trait("Test/ApiClient");

test("get list of users", async ({ client, assert }) => {
  await User.create({
    username: "user8",
    email: "testing8@gmail.com",
    password: "testing1234",
  });

  const response = await client.get("/user/get/?id=8").end();
  console.log(response.text);

  response.assertStatus(200);
  response.assertJSONSubset([
    {
      username: "user8",
      email: "testing8@gmail.com",
    },
  ]);
  assert.equal(2 * 3, 6);
});
