import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut } from "@clerk/clerk-react";

const ClerkBtn = () => {
  return (
    <>
      <SignedOut>
        <Button variant='outline'>
          <SignInButton afterSignInUrl='/dashboard' />
        </Button>
      </SignedOut>
    </>
  );
};

export default ClerkBtn;
