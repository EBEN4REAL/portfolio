import React from "react";
import { render, screen } from "@testing-library/react";
import User from "../Components/User";
import {getUsers} from "../Services/users"
import { config } from "../config";


describe("User component", () => {
  test("renders user component correctly", async () => {
    const users = await getUsers(`${config.APP_BASE_URL}/users`)
    render(<User user={users[0]} />);
  });

  test("Renders user address element", async () => {
    const users = await getUsers(`${config.APP_BASE_URL}/users`)
    render(<User user={users[0]} />);
    expect(screen.queryByTestId('user-address')).not.toBeEmptyDOMElement()
  })
});
