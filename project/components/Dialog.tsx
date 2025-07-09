// External packages
import { twMerge } from 'tailwind-merge';
import * as RadixDialog from '@radix-ui/react-dialog';
import React from 'react';

// Components
import { Button } from 'react-aria-components';
import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { Button as ButtonA } from '@/components/Button';

export const Dialog: React.FC<
  React.ComponentPropsWithoutRef<'button'> & {
    title?: string;
    footer?: React.ReactNode;
    trigger?: React.ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    className?: string;
  }
 
> = ({ title, footer, className, open, setOpen, ...rest }) => {
    const [isSignIn, setIsSignIn] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleChange = () => {
      setIsSignIn(!isSignIn);
      setEmail("");
      setPassword("");
      setError(false);
    }
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (email === "" || password === "") {
        setError(true);
        return;
      }
      setError(false);
      if (setOpen) setOpen(false);
    }
  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen} {...rest}>
      <RadixDialog.Trigger asChild>
        <Button className="focus:outline-none">
          <Icon name="user" className="scale-125" />
        </Button>
      </RadixDialog.Trigger>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black bg-opacity-10" />
        <RadixDialog.Content
          className={twMerge(
            'fixed left-[50%] top-[50%] z-[60] w-96 -translate-x-1/2 -translate-y-1/2 border border-orange-800 rounded-2xl bg-white p-10',
            className
          )}
        >
          <RadixDialog.Title className="mb-10 text-md md:text-xl font-black text-orange-800 text-center">
            {title || (isSignIn ? 'Sign In' : 'Sign Up')}
          </RadixDialog.Title>
          <form onSubmit={handleSubmit} className="w-full">
            <Input
              label="Email"
              type="email"
              value={email}
              inputProps={{
                onChange: (e) => setEmail(e.target.value),
                validationError: "Please enter a valid email address.",
              }}
              autoComplete="username"
              className="mb-10 w-full"
              isRequired
            />
            <Input
              label="Password"
              type="password"
              inputProps={{
                onChange: (e) => setPassword(e.target.value),
                validationError: "Please enter a valid password.",
              }}
              value={password}
              autoComplete="current-password"
              className="mb-10 w-full"
              isRequired
            />
              <ButtonA className="h-14 w-full" type="submit">
                {isSignIn ? 'Login' : 'Sign Up'}
              </ButtonA>
            {error && (
              <p className="absolute mx-auto mt-2 text-orange-400">
                Incorrect email or password.
              </p>
            )}
          </form>

          <Button onPress={handleChange} className="mt-10 text-orange-800 underline underline-orange-800 underline-offset-4">Switch to {isSignIn ? 'Sign Up' : 'Sign In'}</Button>
          {footer}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};