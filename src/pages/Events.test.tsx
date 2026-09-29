import { describe, expect, it, vi, type Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { Events } from "./Events";
import { client } from "../assets/sanity-client";

vi.mock("../assets/sanity-client", () => ({
    client: { fetch: vi.fn() },
    urlFor: vi.fn(() => ({ auto: () => ({ url: () => "https://example.com/image.png" }) })),
}));

const fetchMock = client.fetch as unknown as Mock<(query: string) => Promise<unknown>>;

const renderEvents = () =>
    render(
        <HelmetProvider>
            <Events />
        </HelmetProvider>
    );

describe("Events", () => {
    it("shows the empty state when there are no upcoming events", async () => {
        fetchMock.mockResolvedValueOnce([]);

        renderEvents();

        expect(await screen.findByText(/no upcoming events right now/i)).toBeInTheDocument();
    });

    it("renders a card for each event returned by Sanity", async () => {
        fetchMock.mockResolvedValueOnce([
            {
                title: "Robotics Workshop",
                img: {},
                description: [],
                date: "2026-01-01",
            },
        ]);

        renderEvents();

        expect(
            await screen.findByRole("heading", { name: "Robotics Workshop" })
        ).toBeInTheDocument();
    });
});
