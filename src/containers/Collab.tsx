import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CampusAmbassador, Community } from ".";
import { Toast } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";

const Collab = () => {
  return (
    <Card className='w-auto h-auto border-none shadow-none'>
      <Tabs
        defaultValue='campus-ambassador'
        className='w-auto border-none shadow-none font-general px-[56px] sm:px-[10px] sm:items-center sm:justify-center'
      >
        <TabsList className='grid grid-cols-2 w-[480px] border-none shadow-none px-[76px] sm:px-[0px] sm:w-[380px] sm:items-center'>
          <TabsTrigger value='campus-ambassador'>Campus Ambassador</TabsTrigger>
          <TabsTrigger value='community'>Community Partner</TabsTrigger>
        </TabsList>
        <TabsContent value='campus-ambassador'>
          <Card className='flex w-[100%] border-0 shadow-none rounded-none'>
            <CampusAmbassador />
          </Card>
        </TabsContent>
        <TabsContent value='community'>
          <Card className='flex w-full border-0 shadow-none rounded-none'>
            <Community />
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster />
    </Card>
  );
};

export default Collab;
