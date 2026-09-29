import type { ReactNode } from "react";

interface MaxWidthContainerProps {
    children: ReactNode;
    /** Extra Tailwind classes to layer onto this wrapper for context-specific layout. */
    className?: string;
}

/**
 * Container component that reduces the max width of its children to 1440px. This is
 * done so that content is displayed in the middle of the screen for ultrawide monitors.
 *
 * @example
 * <MaxWidthContainer>
 *   // Inner content to restrict the width of
 * </MaxWidthContainer>
 */
export const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => (
    <div className={`mx-auto w-full max-w-[1440px] ${className ?? ""}`}>{children}</div>
);
