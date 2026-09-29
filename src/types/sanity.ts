import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

export interface EventLink {
    href: string;
    name: string;
}

export interface EventDoc {
    img: SanityImageSource;
    altText?: string;
    title: string;
    timeDescription?: string;
    locationDescription?: string;
    description: PortableTextBlock[];
    date: string;
    links?: EventLink[];
}

export interface OfficerDoc {
    name: string;
    position: string;
    image: SanityImageSource;
}
