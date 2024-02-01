import { Button } from "@/components/ui/button";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ToastAction } from "@radix-ui/react-toast";
import { useState } from "react";

const Community = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    contact: "",
    socials: ["", ""],
  });

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      college: "",
      contact: "",
      socials: ["", ""],
    });
  };

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;

    // Check if the input field is for socials
    if (id.startsWith("socials-")) {
      const socialsArray = [...formData.socials];
      const socialType = id.split("-")[1]; // Extract the social media type (linkedin, twitter, etc.)

      // Map social media type to an index in the array (you might need a different mapping logic)
      const socialIndex = {
        linkedin: 0,
        twitter: 1,
        // Add more social media types as needed
      }[socialType];

      if (socialIndex !== undefined) {
        socialsArray[socialIndex] = value;

        setFormData((prevData) => ({
          ...prevData,
          socials: socialsArray,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    const body = JSON.stringify(formData);
    e.preventDefault();

    try {
      const response = await fetch(
        " https://messiah.snxk.workers.dev/join/community",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: body,
        }
      );

      console.log(`Response--->${body}`);

      console.log(response.status);

      if (response.ok) {
        console.log("Data successfully sent to the API");
        toast({
          title: "Successfull submitted",
          description: `${formData.email} mail is sent`,
        });
        resetFormData();
      } else {
        console.error("Error sending data to the API");
        resetFormData();
        toast({
          variant: "destructive",
          title: "Form Not Submitted!!",
          description: "There was a problem with your request.",
          action: <ToastAction altText='Try again'>Try again</ToastAction>,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }
  };
  return (
    <>
      {/* Left Top 1. Description Bottom 1. Input Name 2. Input Contact No. Right
Full 1. */}
      <Card className='flex h-auto w-full flex-row border-none shadow-none font-general sm:flex-col'>
        {/* Left */}
        <Card className='flex basis-1/2 py-[48px] flex-col border-none shadow-none sm:py-[0px]'>
          <Card className='flex basis-1/2 justify-center px-[45px] py-[79px] flex-col border-none shadow-none sm:px-[0px] sm:p-0'>
            <span className='text-[#ACACAC]'>join as</span>
            <h1 className=' mt-[16px] mb-[32px] font-bold font-abc text-[60px] sm:mt-[0px]'>
              COMMUNITY PARTNER
            </h1>
            <span className='text-[#ACACAC]'>
              Go through the norms for positive collaboration
            </span>
          </Card>
          <Card className='basis-1/2 border-none shadow-none'>
            <CardContent className='grid gap-4 text-[#ACACAC]'>
              <div className='grid gap-2'>
                <Label>Community Name</Label>
                <Input
                  id='name'
                  type='text'
                  placeholder='Enter your full name'
                  className='p-[24px]'
                  onChange={handleInputChange}
                  value={formData.name}
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label>Community Mail</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Enter community mail id'
                  className='p-[24px]'
                  onChange={handleInputChange}
                  value={formData.email}
                  required
                />
              </div>
            </CardContent>
          </Card>
        </Card>

        {/* Right */}
        <Card className='flex basis-1/2 py-[48px] px-[56px] flex-col border-none shadow-none sm:px-[0px] sm:py-0'>
          <CardContent className='grid gap-4 text-[#ACACAC]'>
            <div className='grid gap-2'>
              <Label>College Name</Label>
              <Input
                id='college'
                type='text'
                placeholder='Enter community college name'
                className='p-[24px]'
                onChange={handleInputChange}
                value={formData.college}
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label>Community Contact Number</Label>
              <Input
                id='contact'
                type='text'
                placeholder='Enter Community Contact No.'
                className='p-[24px]'
                onChange={handleInputChange}
                value={formData.contact}
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label>LinkedIn Profile</Label>
              <Input
                id='socials-linkedin'
                type='url'
                placeholder='linkedin.com/in/username'
                className='p-[24px]'
                onChange={handleInputChange}
                value={formData.socials[0]}
              />
            </div>
            <div className='grid gap-2'>
              <Label>Twitter Profile</Label>
              <Input
                id='socials-twitter'
                type='url'
                placeholder='linkedin.com/in/username'
                className='p-[24px]'
                onChange={handleInputChange}
                value={formData.socials[1]}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className='w-full px-[91px] py-[6px]
            '
              onClick={handleSubmit}
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </Card>
    </>
  );
};

export default Community;
