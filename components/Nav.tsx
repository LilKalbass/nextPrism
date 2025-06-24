import Link from "next/link";

export const Nav = () => {
    const links = [
        { href: '/', text: 'About' },
        { href: '/', text: 'Community' },
        { href: '/', text: 'Maintenance Portal' },
        { href: '/', text: 'Resident Portal' },
        { href: '/', text: 'For Rent' }
    ];

    return (
        <nav className='space-x-6 flex'>
                {links.map(({ href, text }) => (
                    <Link key={text} href={href} className='hover:scale-115 transition-all duration-300'>
                        {text}
                    </Link>
                ))}
        </nav>
    );
};