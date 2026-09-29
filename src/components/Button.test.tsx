import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Button } from "./Button";

describe("Button", () => {
    it("renders an external link that opens in a new tab", () => {
        render(<Button type="external" link="https://example.com" buttonText="Visit Site" />);

        const link = screen.getByRole("link", { name: /visit site/i });
        expect(link).toHaveAttribute("href", "https://example.com");
        expect(link).toHaveAttribute("target", "_blank");
    });

    it("renders an internal link using react-router", () => {
        render(
            <MemoryRouter>
                <Button type="internal" link="/get-involved" buttonText="Get Involved" />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", { name: /get involved/i })).toHaveAttribute(
            "href",
            "/get-involved"
        );
    });

    it("renders a default button that fires onClick", () => {
        const onClick = vi.fn();
        render(<Button buttonText="Click Me" onClick={onClick} />);

        screen.getByRole("button", { name: "Click Me" }).click();
        expect(onClick).toHaveBeenCalledOnce();
    });
});
