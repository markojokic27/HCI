"use client";

// External packages
import * as React from "react";
import { Button } from "react-aria-components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import { Icon } from "@/components/Icon";
import { HamburgerMenu } from "@/components/HamburgerMenu";

// Assets
import Logo from "@/public/images/logo.png";

export const Header = () => {
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Models", href: "/models" },
    { label: "Products", href: "/products" },
  ];

  return (
    <div
      ref={headerRef}
      className="group fixed top-0 z-40 mx-auto w-full border-b md:border-b border-b-orange-800 bg-orange-25"
    >
      <div className="mx-auto grid grid-cols-2 items-center px-6 py-2 sm:container md:grid-cols-[1fr_auto_1fr] md:px-6 md:py-4 md:group-data-[theme=light]:text-white">
        <Link
          href="/"
          className="leading-none justify-self-start focus:outline-none"
        >
          <Image
            alt="logo"
            src={Logo}
            height={54}
            width={120}
            className="scale-75 -translate-x-4 md:scale-100 md:translate-x-0 "
          />
        </Link>
        <div className="hidden gap-8 md:flex uppercase font-medium">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`self-center focus:outline-none ${
                pathName === href ? "text-orange-800" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <ul className="flex items-center gap-8 justify-self-end">
          <li className="hidden items-center md:flex">
            <Button className="focus:outline-none">
              <Icon name="search" />
            </Button>
          </li>
          <li>
            <Link href="/pages/cart" className="focus:outline-none">
              <Icon name="bag" />
            </Link>
          </li>
          <li className="flex h-6 w-6 items-center md:hidden">
            <HamburgerMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};
