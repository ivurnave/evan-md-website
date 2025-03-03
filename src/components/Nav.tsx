import Link from "next/link"
import { HeaderDecoration } from "./HeaderDecoration"
import { Colors } from "@/colors";

// TODO: make this work lol
const chooseHoverColor = () => {
    const colors = Object.keys(Colors.light);
    const randomIndex = Math.floor(Math.random() * 4);
    return colors[randomIndex];
}

const StyledLink = ({ href, title }: { href: string, title: string }) => <Link className={`mx-1 p-1 rounded-full hover:bg-${chooseHoverColor()}-light`} href={href}>{title}</Link>

export const Nav = () => {
    return (
        <>
            {/* Nav desktop */}
            <div className="hidden md:flex flex-col shrink-0 rounded-3xl border-solid border border-slate-50 shadow-xl overflow-hidden">
                <HeaderDecoration />
                <StyledLink href="/" title="Home" />
                <StyledLink href="/art" title="Art" />
                <StyledLink href="/woodwork" title="Woodworking" />
                <StyledLink href="/code" title="Code" />
                <StyledLink href="/contact" title="Contact me" />
            </div>
            {/* Nav mobile */}
            {/* <div className="md:mr-4 md:hidden">
                <HeaderDecoration />
                <StyledLink href="/" title="Home" />
                <StyledLink href="/art" title="Art" />
                <StyledLink href="/woodwork" title="Woodworking" />
                <StyledLink href="/code" title="Code" />
                <StyledLink href="/contact" title="Contact me" />
            </div> */}
        </>
    )
}