import { getByText, render, screen, fireEvent } from "@testing-library/react";

test("learning tests", () => {
  render(
    <div>
      <label htmlFor="text-input">Test</label>
      <input id="text-input" type="text" placeholder="Test" />
    </div>
  );

  const input = screen.getByLabelText("Test");
  expect(input).toBeInTheDocument();
});

test("finds Test texts by tags ", () => {
  render(
    <div id="app">
      <h1>Test</h1>
      <p>Test</p>
      <button onClick={() => console.log("Test")}>Test</button>
    </div>
  );

  const container = document.querySelector("h1");
  const text = getByText(container, "Test");
  const container2 = document.querySelector("p");

  const p = getByText(container2, "Test");

  expect(text).toBeInTheDocument();
  expect(p).toBeInTheDocument();
});

test("tests sample button", () => {
  render(
    <div id="app">
      <button onClick={() => console.log("Test")}>Test</button>
    </div>
  );

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  fireEvent(
    screen.getByText("Test"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
});

test("finds right button and clicks", () => {
  render(
    <div id="app">
      <button onClick={() => console.log("Test")}>Button</button>
      <button onClick={() => console.log("Hehe")}>Hehe</button>
    </div>
  );

  const button = screen.getByRole("button", { name: "Hehe" });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});
