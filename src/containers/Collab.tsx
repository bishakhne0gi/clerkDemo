import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CampusAmbassador, Community } from ".";

const Collab = () => {
  return (
    <Card className='w-auto h-auto border-none shadow-none'>
      <Tabs
        defaultValue='campus-ambassador'
        className='w-auto border-none shadow-none font-general px-[56px]'
      >
        <TabsList className='grid grid-cols-2 w-[480px] border-none shadow-none px-[76px]'>
          <TabsTrigger value='campus-ambassador'>Campus Ambassador</TabsTrigger>
          <TabsTrigger value='community'>Community Partner</TabsTrigger>
        </TabsList>
        <TabsContent value='campus-ambassador'>
          <Card className='flex w-full border-0 shadow-none rounded-none'>
            <CampusAmbassador />
          </Card>
        </TabsContent>
        <TabsContent value='community'>
          <Card className='flex w-full border-0 shadow-none rounded-none'>
            <Community />
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default Collab;
