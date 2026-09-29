import { Button } from "./Button";
import { MaxWidthContainer } from "./MaxWidthContainer";
import { RepeatingTextBackground } from "./RepeatingTextBackground";

interface OutlinedBoxProps {
    /** Text to repeat as the background pattern */
    backgroundText: string;
    /** The text content displayed within the outlined box */
    text: string;
    /** The type of button behavior */
    buttonType: "external" | "internal" | "default";
    /** URL or route for the button (required for 'external' and 'internal' types) */
    link?: string;
    buttonText: string;
}

/**
 * Renders a gray outlined box with text and a centered button.
 *
 * @example
 * <OutlinedBox
 *   backgroundText="JOIN"
 *   text="Ready to be part of our team? Click below to apply!"
 *   buttonType="external"
 *   link="https://forms.example.com/apply"
 *   buttonText="Apply Now"
 * />
 */
export const OutlinedBox = ({
    backgroundText,
    text,
    buttonType,
    link,
    buttonText,
}: OutlinedBoxProps) => {
    return (
        <RepeatingTextBackground backgroundText={backgroundText}>
            <MaxWidthContainer>
                <div className="m-12 flex min-h-52 w-auto items-center justify-between gap-8 bg-eerie-black p-8 outline-1 outline-white/40 max-md:flex-col max-md:items-start">
                    <p className="min-w-0 flex-1 font-body text-[1.1rem] font-normal text-dark-white">
                        {text}
                    </p>
                    <Button type={buttonType} link={link} buttonText={buttonText} />
                </div>
            </MaxWidthContainer>
        </RepeatingTextBackground>
    );
};
