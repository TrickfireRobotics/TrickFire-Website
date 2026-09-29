import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { PageSEO } from "./PageSEO";

describe("PageSEO", () => {
    it("sets the document title and canonical url", async () => {
        render(
            <HelmetProvider>
                <PageSEO title="Events" description="Upcoming events" url="/events" />
            </HelmetProvider>
        );

        await vi.waitFor(() => {
            expect(document.title).toBe("Events");
        });
        expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
            "href",
            "https://trickfirerobotics.com/events"
        );
    });
});
