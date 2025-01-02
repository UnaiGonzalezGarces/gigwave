import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {children}
    </div>
  );
};

export default MainLayout;
