import React from "react";
// import { render ,screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import { createMocks } from "node-mocks-http";
import Postpage from "@/pages/api/posts";

describe("api/posts", () => {
  it("Should get all posts", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await Postpage(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
});
