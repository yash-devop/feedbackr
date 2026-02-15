import { Button } from "@repo/ui";
import { useAuth } from "../hooks.ts";
import { Github, Google } from "@repo/ui/icons";

export const SocialAuthSection = () => {
  const { signIn } = useAuth();

  return (
    <div className="w-full flex flex-col gap-3 pt-7">
      <Button
        size={"lg"}
        variant={"outline"}
        className="hover:text-foreground cursor-pointer"
        onClick={() => {
          signIn("google");
        }}
      >
        <Google className="size-5" />
        <p className="font-normal">Continue with Google</p>
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        className="hover:text-foreground cursor-pointer"
        onClick={() => {
          signIn("github");
        }}
      >
        <Github className="size-5" />
        <p className="font-normal">Continue with Github</p>
      </Button>
    </div>
  );
};
