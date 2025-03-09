"use client";

import Link from "next/link"
import { HeaderDecoration } from "./HeaderDecoration"
import { useEffect, useState } from "react";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { usePathname } from "next/navigation";

const StyledLink = ({ href, title }: { href: string, title: string }) => <Link className={`m-1 p-1 rounded-full hover:bg-outline`} href={href}>{title}</Link>

const ToggleNavbarButton = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) => {
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <button
            onClick={toggleNavbar}
            className="relative size-[32px] flex flex-col bg-background justify-center items-center rounded-full border-solid border border-outline shadow-xl overflow-hidden"
        >
            <span
                className={`bg-foreground block transition-all duration-300 ease-out w-[16px] h-[1px] rounded-sm transform ${isOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-[4px]'}`}
            ></span>
            <span
                className={`bg-foreground block transition-all duration-300 ease-out w-[16px] h-[1px] rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
                className={`bg-foreground block transition-all duration-300 ease-out w-[16px] h-[1px] rounded-sm transform ${isOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-[4px]'}`}
            ></span>
        </button>

    )
}

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mobileNavRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            {/* Nav desktop */}
            <nav className="hidden md:flex flex-col shrink-0 h-fit rounded-3xl border-solid border border-outline shadow-xl overflow-hidden">
                <HeaderDecoration />
                <StyledLink href="/" title="Home" />
                <StyledLink href="/art" title="Art" />
                <StyledLink href="/woodwork" title="Woodworking" />
                <StyledLink href="/code" title="Code" />
                <StyledLink href="/contact" title="Contact me" />
            </nav>
            {/* Nav mobile */}
            <div ref={mobileNavRef} className="md:hidden fixed z-40">
                <ToggleNavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />
                {isOpen &&
                    <nav className="bg-background absolute top-[40px] flex flex-col shrink-0 h-fit rounded-3xl border-solid border border-outline shadow-xl overflow-hidden">
                        <HeaderDecoration />
                        <StyledLink href="/" title="Home" />
                        <StyledLink href="/art" title="Art" />
                        <StyledLink href="/woodwork" title="Woodworking" />
                        <StyledLink href="/code" title="Code" />
                        <StyledLink href="/contact" title="Contact me" />
                    </nav>
                }
            </div>
        </>
    )
}
