import Link from "next/link"
import { HeaderDecoration } from "./HeaderDecoration"

const StyledLink = ({ href, title }: { href: string, title: string }) => <Link className="my-1" href={href}>{title}</Link>

export const Nav = () => {
    return (
        <div className="hidden md:mr-4 md:flex flex-col shrink-0">
            <HeaderDecoration />
            <StyledLink href="/" title="Home" />
            <StyledLink href="/art" title="Art" />
            <StyledLink href="/woodwork" title="Woodworking" />
            <StyledLink href="/code" title="Code" />
            <StyledLink href="/contact" title="Contact me" />
        </div>
    )
}