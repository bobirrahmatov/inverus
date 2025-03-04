"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { CarFront, HospitalIcon, DollarSign, ShieldCheckIcon, Landmark } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/solutions" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            Solutions
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-muted-foreground">
                        Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-4">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/industries"
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                                    >
                                        <div className="text-blue-300 animate-glow">
                                            <ShieldCheckIcon className="w-32 h-32" />
                                        </div>
                                        <div className="my-2 text-lg font-normal">
                                            inVerus
                                        </div>
                                        <p className="text-sm text-foreground">
                                            The Next Evolution in Identity Fraud Prevention
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="Auto Dealers" href="/industries/car-dealers" icon={<CarFront className="w-5 h-5" />}>
                                <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                                    Dealers, DMS Providers +
                                </p>
                            </Item>
                            <Item title="Financial Institutions" href="/industries/finance" icon={<DollarSign className="w-5 h-5" />}>
                                <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                                    Banks, Insurance Providers +
                                </p>
                            </Item>
                            <Item title="Healthcare Providers" href="/industries/healthcare" icon={<HospitalIcon className="w-5 h-5" />}>
                                <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                                    Hospitals, Medical Practices +
                                </p>
                            </Item>
                            <Item title="Government" href="/industries/government" icon={<Landmark className="w-5 h-5" />}>
                                <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                                    Safeguarding Public Systems
                                </p>
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            Blog
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about-us" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            About us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link
                        href="mailto:andrew@inverus.tech?subject=Potential%20Project%20Request&body=Hello%20inVerus,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Here%20are%20the%20details:%0D%0A%0D%0A[Add%20your%20project%20details%20here]%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]"
                        legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            Contact us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                >
                    <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm group-hover:text-muted-foreground font-normal leading-none">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
};

Item.displayName = "Item";

export default Menu
