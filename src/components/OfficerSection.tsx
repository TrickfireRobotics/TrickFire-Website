import { Officer } from "./Officer";
import { urlFor } from "../assets/sanity-client";
import type { OfficerDoc } from "../types/sanity";

interface OfficerSectionProps {
    allOfficers: OfficerDoc[];
}

/**
 * Renders the complete officer section.
 *
 * @example
 * <OfficerSection allOfficers={officers} />
 */
export const OfficerSection = ({ allOfficers }: OfficerSectionProps) => {
    return (
        <div>
            <h1 className="py-12 text-center font-heading text-[5rem] font-semibold text-white max-md:text-[3.2rem]">
                TrickFire is 100% Student-Led
            </h1>
            {/* Grid of Officer Images */}
            <div className="flex flex-wrap justify-center gap-12 pb-12">
                {allOfficers.map((officer, i) => (
                    <Officer
                        key={i}
                        image={urlFor(officer.image).auto("format").url()}
                        name={officer.name}
                        position={officer.position}
                    />
                ))}
            </div>
        </div>
    );
};
