import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut } from "@clerk/clerk-react";

const ClerkBtn = () => {
  return (
    <>
      <SignedOut>
        <Button variant='outline' asChild={true}>
          <SignInButton redirectUrl='/dashboard' />
        </Button>
      </SignedOut>
    </>
  );
};

export default ClerkBtn;
