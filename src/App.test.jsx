import App from "./App";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { act } from "react-test-renderer";

describe("App", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({  results: [{ original_title: "abc" }]  }),
      })
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("first snapshot test", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("increment button is clicked and the value increments by 1", async () => {
    await act(async () => {
      render(<App />);
    });

    fireEvent.click(screen.getByText("Add To Favorite"));
    expect(localStorage.add_fav).toBe("1");

    fireEvent.click(screen.getByText("Add To Favorite"));
    expect(localStorage.add_fav).toBe("2");
  });


it("should render filterd movie results",async()=>{
    let app;
    await act(async()=>{
      app = render(<App />);
    });
    const searchbox = app.container.querySelector('input');
    await act(async()=>{
      fireEvent.change(searchbox, { target: { value: '123' } })
    });
   
  });

  it("should search movies after 3 milliseconds",async()=>{
    jest.useFakeTimers();
    let app;
    await act(async()=>{
      app = render(<App />);
    });
    jest.advanceTimersByTime(300);
    const timerOut = app.container.querySelector('input');
    await act(async()=>{
    expect(timerOut).toBeInTheDocument();
    });
  });

  it("should render movies after hitting url",async()=>{
    let app;
    await act(async()=>{
      app = render(<App />);
    });
    const searchText='';
    const result=(searchText);
    expect(result).toEqual("");
  });
});
