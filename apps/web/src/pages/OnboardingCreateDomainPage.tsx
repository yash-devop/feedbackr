import { Button, Input, Label } from "@repo/ui";
import { FeedbackrLogo } from "@repo/ui/icons";

export const OnboardingCreateDomainPage = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="h-screen flex items-center justify-center w-full max-w-[500px] mx-auto px-4 lg:px-0">
          <div className="flex flex-col w-full">
            <FeedbackrLogo />
            <div className="pb-8 space-y-2">
              <p className="text-2xl font-semibold">Create Domain</p>
              <p className="text-sm font-normal text-neutral-600">
                Set up your domain to start collecting feedback , SDKs and
                managing everything in one place. You can change this later.
              </p>
            </div>
            <form className="flex flex-col gap-7 w-full">
              <div className="flex flex-col gap-y-1.5">
                <Label>Name of the domain</Label>
                <Input placeholder="Eg: Example" className="" />
              </div>
              <div className="flex flex-col gap-y-1.5">
                <Label>Domain URL</Label>
                <Input placeholder="Eg: app.example.com" className="" />
              </div>
              <Button>Proceed</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
