import { Button } from "@/components/ui/button";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const Community = () => {
  return (
    <>
      {" "}
      {/* Left Top 1. Description Bottom 1. Input Name 2. Input Contact No. Right
Full 1. */}
      <Card className='flex h-auto w-full flex-row border-none shadow-none font-general '>
        {/* Left */}
        <Card className='flex basis-1/2 py-[48px] flex-col border-none shadow-none'>
          <Card className='flex basis-1/2 justify-center px-[45px] py-[79px] flex-col border-none shadow-none'>
            <span className='text-[#ACACAC]'>join as</span>
            <h1 className=' mt-[16px] mb-[32px] font-bold font-abc text-[60px]'>
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
                  id='comName'
                  type='text'
                  placeholder='Enter your full name'
                  className='p-[24px]'
                />
              </div>
              <div className='grid gap-2'>
                <Label>POC Name</Label>
                <Input
                  id='poc'
                  type='number'
                  placeholder='Enter your contact no.'
                  className='p-[24px]'
                />
              </div>
            </CardContent>
          </Card>
        </Card>

        {/* Right */}
        <Card className='flex basis-1/2 py-[48px] px-[56px] flex-col border-none shadow-none'>
          <CardContent className='grid gap-4 text-[#ACACAC]'>
            <div className='grid gap-2'>
              <Label>Email ID of POC</Label>
              <Input
                id='pocEmail'
                type='email'
                placeholder='Enter your email id'
                className='p-[24px]'
              />
            </div>
            <div className='grid gap-2'>
              <Label>Contact No. of POC</Label>
              <Input
                id='pocNum'
                type='number'
                placeholder='Enter your number'
                className='p-[24px]'
              />
            </div>
            <div className='grid gap-2'>
              <Label>How will you contribute in event success?</Label>
              <Textarea
                id='description'
                placeholder='Describe within 200 words'
                className='p-[24px]'
              />
            </div>
            <div className='grid gap-2'>
              <Label>LinkedIn Profile</Label>
              <Input
                id='linkedin'
                type='url'
                placeholder='linkedin.com/in/username'
                className='p-[24px]'
              />
            </div>
            <div className='grid gap-2'>
              <Label>Number of Registration which can be brought</Label>
              <Input
                id='noOfReg'
                type='number'
                placeholder='20'
                className='p-[24px]'
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full px-[91px] py-[6px]'>Save</Button>
          </CardFooter>
        </Card>
      </Card>
    </>
  );
};

export default Community;
