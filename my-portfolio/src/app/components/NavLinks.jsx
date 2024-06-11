import Link from 'next/link';
const Navlink = ({ href, children }) => {
    return (
        <Link href={href} className="block pl-3 pr-4 text-white md:text-3xl rounded md:p-0 hover:text-slate-200">{children}</Link>
    )
}

export default Navlink