import React from "react";
import { FloatingDock } from "../AceternityUI/floating-dock";
import {
    IconAddressBook,
    IconInfoSquare,
    IconExchange,
    IconHome,
    IconNewSection,
    IconBubble
} from "@tabler/icons-react";
// import Image from "next/image";

export function Navbar({scrollToHome, scrollToContactUs, scrollToAbout, scrollToFeatures, scrollToFAQ}) {
    const links = [

        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: scrollToHome,
        },





        {
            title: "About Us",
            icon: (
                <IconInfoSquare className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: scrollToAbout,
        },
        {
            title: "Features",
            icon: (
                <IconNewSection className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: scrollToFeatures,
        },
        {
            title: "Contact Us",
            icon: (
                <IconAddressBook className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: scrollToContactUs,
        },
        {
            title: "FAQ",
            icon: (
                <IconBubble className="h-full w-full text-white dark:text-neutral-300" />
            ),
            href: scrollToFAQ,
        },
    ];
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                // only for demo, remove for production
                // mobileClassName="translate-y-20"
                items={links} />
        </div>
    );
}
