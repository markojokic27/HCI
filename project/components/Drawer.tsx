// External packages
import * as React from "react";
import {
  ModalOverlay,
  Dialog,
  DialogTrigger,
  Button,
  Modal,
} from "react-aria-components";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export const Drawer: React.FC<
  React.ComponentPropsWithoutRef<"button">
> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <DialogTrigger>
        <Button
          onPress={() => setIsOpen(true)}
          className="h-6 w-6 focus:outline-none"
        >
          <Icon name="hamburger" className={isOpen ? "hidden" : ""} />
        </Button>
        <ModalOverlay
          isDismissable
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          className="data-[entering]:animate-drawer data-[exiting]:animate-drawerOut fixed bottom-0 left-0 top-0 z-[70] w-full"
        >
          <Modal className="drawer fixed bottom-0 left-0 top-0 z-[70] border-r border-r-white bg-orange-800">
            <Dialog className="flex h-full flex-col justify-between outline-none">
              <div className="flex flex-col h-full relative">
                <div className="flex h-[70px] w-full items-center justify-end border-b border-b-white px-8 text-white">
                  <Button
                    onPress={() => setIsOpen(false)}
                    className="outline-none"
                  >
                    <Icon name="x" className="scale-110 hover:cursor-pointer" />
                  </Button>
                </div>
                <ul className="m-8 flex flex-col gap-8 text-xl text-grayscale-10">
                  <li>
                    <Link href={"/home"} onClick={() => setIsOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about"} onClick={() => setIsOpen(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href={"/models"} onClick={() => setIsOpen(false)}>
                      Models
                    </Link>
                  </li>
                  <li>
                    <Link href={"/products"} onClick={() => setIsOpen(false)}>
                      Products
                    </Link>
                  </li>
                </ul>
                <div className="text-white absolute bottom-0 text-center left-1/2 -translate-x-1/2">
                  <p>Follow us on social media</p>
                  <div className="flex gap-4 justify-center sm:justify-end lg:justify-center mt-2">
                    <Link
                      href={"https://www.instagram.com/pelletteriabizaca/"}
                      target="_blank"
                    >
                      <Icon name="instagram" />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/pelletteriabizaca/"}
                      target="_blank"
                    >
                      <Icon name="facebook" />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/pelletteriabizaca/"}
                      target="_blank"
                    >
                      <Icon name="youtube" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="m-8 text-grayscale-10"></div>
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </>
  );
};
