import { CreateDomainForm } from "@/features/onboarding/components/CreateDomainForm.tsx";
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
            <CreateDomainForm />
          </div>
        </div>
      </div>
    </>
  );
};
