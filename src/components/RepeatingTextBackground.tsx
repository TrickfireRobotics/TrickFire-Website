import type { ReactNode } from "react";

interface RepeatingTextBackgroundProps {
    /** The text that will be repeated in the background of this section. */
    backgroundText: string;
    children: ReactNode;
}

export const RepeatingTextBackground = ({
    backgroundText,
    children,
}: RepeatingTextBackgroundProps) => {
    // Repeat the given background text
    const repeatedText = Array.from({ length: 10 }, (_, i) => (
        <div
            key={i}
            className="absolute translate-x-0 font-heading text-[3.5rem] font-bold whitespace-nowrap text-eerie-black italic uppercase even:translate-x-12"
            style={{ top: `${i * 3.5}rem` }}
        >
            {`${backgroundText} `.repeat(30)}
        </div>
    ));

    // Return the full background
    return (
        <div className="relative flex min-h-[22rem] items-center justify-center overflow-hidden bg-black outline-1 outline-white/40 select-none">
            {repeatedText}
            {children}
        </div>
    );
};
