import { MaxWidthContainer } from "./MaxWidthContainer";

interface OpportunitiesSectionProps {
    /** List of discipline names to display */
    disciplines: string[];
}

/**
 * Section showcasing the different fields of opportunities at TrickFire Robotics
 *
 * @example
 * <OpportunitiesSection disciplines={["Software Engineering", "Mechanical Engineering"]} />
 */
export const OpportunitiesSection = ({ disciplines }: OpportunitiesSectionProps) => {
    return (
        <div className="border-y border-white/40 bg-black py-14">
            <MaxWidthContainer>
                <h1 className="text-center font-heading text-[5rem] text-white italic max-md:text-[3rem]! max-[480px]:text-[2rem]!">
                    Opportunities In...
                </h1>
                <div className="mx-auto block w-4/5 text-center">
                    {disciplines.map((item, index) => (
                        <div
                            className="m-4 inline-block border-[0.3rem] border-dark-white p-2 shadow-[0.5rem_0.5rem_0_var(--color-accent-pink)] max-md:my-8! max-md:mx-4! max-md:block!"
                            key={index}
                        >
                            <h1 className="text-center font-heading text-[2rem] text-dark-white max-md:text-[1.25rem]!">
                                {item}
                            </h1>
                        </div>
                    ))}
                </div>
            </MaxWidthContainer>
        </div>
    );
};
