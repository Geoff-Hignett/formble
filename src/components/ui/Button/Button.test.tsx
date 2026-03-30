import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
    it("renders with default props", () => {
        render(<Button>Click me</Button>);

        const button = screen.getByRole("button", { name: /click me/i });

        expect(button).toBeInTheDocument();
    });

    it("applies variant classes", () => {
        render(<Button variant="secondary">Test</Button>);

        const button = screen.getByRole("button");

        expect(button.className).toMatch(/bg-gray-200/);
    });

    it("applies size classes", () => {
        render(<Button size="lg">Test</Button>);

        const button = screen.getByRole("button");

        expect(button.className).toMatch(/px-6/);
    });

    it("handles click events", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<Button onClick={handleClick}>Click</Button>);

        await user.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("can be disabled", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <Button disabled onClick={handleClick}>
                Disabled
            </Button>,
        );

        const button = screen.getByRole("button");

        expect(button).toBeDisabled();

        await user.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });
});
