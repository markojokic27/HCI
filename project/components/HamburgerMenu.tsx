// External packages
import * as RadixDialog from "@radix-ui/react-dialog";
import Link from "next/link";

// Components
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";

export const HamburgerMenu: React.FC<
  React.ComponentPropsWithoutRef<"button"> & {
    headerTheme?: "light" | "dark";
  }
> = ({ headerTheme = "dark", ...rest }) => (
  <RadixDialog.Root {...rest}>
    <RadixDialog.Trigger className="group h-6 w-6 focus:outline-none">
      <Icon name="hamburger" className="group-data-[state=open]:hidden" />
    </RadixDialog.Trigger>
    <RadixDialog.Overlay>
      <RadixDialog.Content
        className={`hamburger-menu fixed bottom-0 left-0 top-0 z-[70] -translate-x-full transform bg-black transition-all duration-300 data-[state=open]:translate-x-0`}
      >
        <RadixDialog.Title />
        <RadixDialog.DialogDescription />
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="relative flex h-fit w-full items-center border-b border-b-white px-8 text-white">
              <Icon name="search" className="scale-110" />
              <Input
                label="Search"
                className="-mb-2 p-0"
                inputProps={{
                  className: "bg-black text-white h-18 m-0 border-0",
                }}
              />
              <RadixDialog.Trigger>
                <Icon name="x" className="scale-110 hover:cursor-pointer" />
              </RadixDialog.Trigger>
            </div>
            <ul className="m-8 flex flex-col gap-8 text-xl text-grayscale-10">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/models"}>Models</Link>
              </li>
              <li>
                <Link href={"/shop"}>Shop</Link>
              </li>
            </ul>
          </div>
        </div>
      </RadixDialog.Content>
    </RadixDialog.Overlay>
  </RadixDialog.Root>
);
