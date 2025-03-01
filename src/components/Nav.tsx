import Link from "next/link"
import { HeaderDecoration } from "./HeaderDecoration"

const StyledLink = ({ href, title }: { href: string, title: string }) => <Link className="my-1" href={href}>{title}</Link>

export const Nav = () => {
    return (
        <div className="flex flex-col shrink-0">
            <HeaderDecoration />
            <StyledLink href="/" title="Home" />
            <StyledLink href="/art" title="Art" />
        </div>
    )
}