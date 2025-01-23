// External packages
import * as RadixDialog from "@radix-ui/react-dialog";
import Link from "next/link";

// Components
import { Icon } from "@/components/Icon";

export const HamburgerMenu: React.FC<
  React.ComponentPropsWithoutRef<"button">
> = ({ ...rest }) => (
  <RadixDialog.Root {...rest}>
    <RadixDialog.Trigger className="group h-6 w-6 focus:outline-none">
      <Icon name="hamburger" className="group-data-[state=open]:hidden" />
    </RadixDialog.Trigger>
    <RadixDialog.Overlay className="data-[state=closed]:animate-overlayShow data-[state=open]:animate-overlayHide">
      <RadixDialog.Content
        className={`hamburger-menu border-l border-l-white fixed bottom-0 right-0 top-0 z-[70] min-w-[80%] bg-orange-800 data-[state=closed]:animate-hamburgerMenuOut data-[state=open]:animate-hamburgerMenu`}
      >
        <RadixDialog.Title />
        <RadixDialog.DialogDescription />
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="relative flex h-[70px] w-full items-center justify-end border-b border-b-white px-8 text-white">
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
                <Link href={"/products"}>Shop</Link>
              </li>
            </ul>
          </div>
        </div>
      </RadixDialog.Content>
    </RadixDialog.Overlay>
  </RadixDialog.Root>
);
