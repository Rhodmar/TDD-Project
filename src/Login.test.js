import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Check the UI.",()=>{
	it("has an input for email",()=>{
		render(<Login />);
		const email = screen.getByTestId("email");
		expect(email).toBeInTheDocument();
	});

	it("has an input for email type text",()=>{
		render(<Login />);
		const input = screen.getByTestId("email");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "text");
	});

	it("has an input for password",()=>{
		render(<Login />);
		const password = screen.getByTestId("password");
		expect(password).toBeInTheDocument();
	});

	it("has an input for email type password",()=>{
		render(<Login />);
		const input = screen.getByTestId("password");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "password");
	});
});

describe("Check the logic.",()=>{

	afterEach(cleanup);

	it("Check the email data input", () => {		
		render(<Login />);
		const input1 = screen.getByTestId("email");
		fireEvent.change(input1, { target: { value: "eve.holt@reqres.in" }});
		expect(input1.value).toBe("eve.holt@reqres.in");
	});

	it("Check the password data input", () => {		
		render(<Login />);
		const input2 = screen.getByTestId("password");
		fireEvent.change(input2, { target: { value: "cityslicka" }});
		expect(input2.value).toBe("cityslicka");
	});

	it("Check if valid user with token", async () => {   
		render(<Login />);
		await waitFor(() => {
		    expect(screen.findByText('QpwL5tke4Pnpja7X4')).toBeTruthy() 
		})
	});
});