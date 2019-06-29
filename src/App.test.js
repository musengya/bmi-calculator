import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
    test("displays correct title", () => {
        const { getByText } = render(<App />);

        expect(getByText("BMI Calculator")).toBeDefined();
    });

    test("displays all form inputs", () => {
        const { getByText } = render(<App />);

        expect(getByText("Please enter your name")).toBeDefined();
        expect(getByText("Enter your weight in kgs:")).toBeDefined();
        expect(getByText("Enter your height in metres:")).toBeDefined();
    });

    test("it has a disabled button until both fields have a value", () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId("submit-button").disabled).toBe(true);

        const nameTextFieldNode = getByTestId("name-input");

        fireEvent.change(nameTextFieldNode, { target: { value: "Irene" } });

        expect(getByTestId("submit-button").disabled).toBe(true);

        const weightTextFieldNode = getByTestId("weight-input");

        fireEvent.change(weightTextFieldNode, { target: { value: "24" } });

        expect(getByTestId("submit-button").disabled).toBe(true);

        const heightTextFieldNode = getByTestId("height-input");

        fireEvent.change(heightTextFieldNode, { target: { value: "1.2" } });

        expect(getByTestId("submit-button").disabled).toBe(false);
    });

    test("greets the user on change of name input", () => {
        const { getByTestId } = render(<App />);

        const nameTextFieldNode = getByTestId("name-input");

        fireEvent.change(nameTextFieldNode, { target: { value: "I" } });

        expect(getByTestId("greeting-text").textContent).toBe("Hello I");

        fireEvent.change(nameTextFieldNode, { target: { value: "Ire" } });

        expect(getByTestId("greeting-text").textContent).toBe("Hello Ire");

        fireEvent.change(nameTextFieldNode, { target: { value: "" } });

        expect(getByTestId("greeting-text").textContent).toBe("Hello ");
    });

    test("shows the user their local time", () => {
        global.Date = class extends Date {
            toLocaleTimeString() {
                return "6:37:21 PM";
            }
        };

        const { getByTestId } = render(<App />);

        expect(getByTestId("current-time").textContent).toBe(
            "It's currently 6:37:21 PM where you are living."
        );
    });

    test("shows the user their BMI score and highlights the BMI in the list", () => {
        const { getByTestId, getAllByTestId } = render(<App />);

        expect(getByTestId("bmi-score").textContent).toBe("Your BMI is ");

        const nameTextFieldNode = getByTestId("name-input");
        const weightTextFieldNode = getByTestId("weight-input");
        const heightTextFieldNode = getByTestId("height-input");
        const submitButtonNode = getByTestId("submit-button");

        fireEvent.change(nameTextFieldNode, { target: { value: "Irene" } });
        fireEvent.change(weightTextFieldNode, { target: { value: "24" } });
        fireEvent.change(heightTextFieldNode, { target: { value: "1.2" } });
        fireEvent.click(submitButtonNode);

        expect(getByTestId("bmi-score").textContent).toBe("Your BMI is 16.7");
        expect(getAllByTestId("bmi-row")[0].className).toBe("");
        expect(getAllByTestId("bmi-row")[1].className).toBe("");
        expect(getAllByTestId("bmi-row")[2].className).toBe("");
        expect(getAllByTestId("bmi-row")[3].className).toBe("your-bmi"); // Underweight

        fireEvent.change(nameTextFieldNode, { target: { value: "Antony" } });
        fireEvent.change(weightTextFieldNode, { target: { value: "68" } });
        fireEvent.change(heightTextFieldNode, { target: { value: "1.5" } });
        fireEvent.click(submitButtonNode);

        expect(getByTestId("bmi-score").textContent).toBe("Your BMI is 30.2");
        expect(getAllByTestId("bmi-row")[0].className).toBe("your-bmi"); // Obese
        expect(getAllByTestId("bmi-row")[1].className).toBe("");
        expect(getAllByTestId("bmi-row")[2].className).toBe("");
        expect(getAllByTestId("bmi-row")[3].className).toBe("");
    });
});
