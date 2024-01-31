import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut } from "@clerk/clerk-react";

const ClerkBtn = () => {
  return (
    <>
      <SignedOut>
        <Button variant='outline'>
          <SignInButton redirectUrl='/dashboard' />
        </Button>
      </SignedOut>
    </>
  );
};

export default ClerkBtn;
