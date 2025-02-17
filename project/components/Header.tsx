"use client";

// External packages
import * as React from "react";
import { Button } from "react-aria-components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import { Icon } from "@/components/Icon";
import { Drawer } from "@/components/Drawer";
import { useCart } from "@/app/cart-provider";

// Assets
import Logo from "@/public/images/logo.png";

export const Header = () => {
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();
  const { cart } = useCart();
  const cartNum = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Models", href: "/models" },
  ];

  return (
    <div
      ref={headerRef}
      className="group fixed top-0 z-40 mx-auto w-full border-b border-b-orange-800 bg-orange-25 md:border-b"
    >
      <div className="mx-auto grid grid-cols-2 items-center px-6 py-2 sm:container md:grid-cols-[1fr_auto_1fr] md:px-6 md:py-4 md:group-data-[theme=light]:text-white">
        <Link
          href="/"
          className="justify-self-start leading-none focus:outline-none"
        >
          <Image
            alt="logo"
            src={Logo}
            height={54}
            width={120}
            className="-translate-x-4 scale-75 md:translate-x-0 md:scale-100"
          />
        </Link>
        <div className="hidden gap-8 font-medium uppercase md:flex">
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
            <Link href="/pages/cart" className="relative focus:outline-none">
              <Icon name="bag" className="scale-125" />
              <div className="absolute left-1.5 top-1.5 min-h-3 min-w-3 text-center text-2xs">
                {cartNum > 0 && cartNum}
              </div>
            </Link>
          </li>
          <li className="flex h-6 w-6 items-center md:hidden">
            <Drawer />
          </li>
        </ul>
      </div>
    </div>
  );
};
