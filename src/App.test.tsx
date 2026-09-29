import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("./assets/sanity-client", () => ({
    client: { fetch: vi.fn().mockResolvedValue([]) },
    urlFor: vi.fn(() => ({ auto: () => ({ url: () => "" }) })),
}));

describe("App", () => {
    it("renders the homepage at the root route", () => {
        window.history.pushState({}, "", "/");
        render(<App />);

        expect(screen.getByRole("heading", { name: /trickfire robotics/i })).toBeInTheDocument();
    });

    it("renders the About Us page when navigating to /about-us", () => {
        window.history.pushState({}, "", "/about-us");
        render(<App />);

        expect(screen.getByRole("heading", { name: /our story/i })).toBeInTheDocument();
    });
});
