import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";
import { Globe, Terminal } from "lucide-react";
import {
  DebugContent,
  DebugDescription,
  DebugLeftInfoSide,
  DebugRightCodeSide,
  DebugTitle,
} from "./DebugContent.tsx";

export const DebugSection = () => {
  return (
    <>
      <div className="relative flex-1 w-full rounded-xl bg-muted bg-[#0b0b0b]_ border border-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
        <div className="">
          <div className="p-6">
            <h2 className="font-semibold ">Debug Diagnostics</h2>
            <span className="text-sm">
              Technical context and runtime diagnostics captured at the time of
              feedback
            </span>
          </div>
          <Tabs defaultValue="console" className="px-5">
            <TabsList variant="line">
              <TabsTrigger
                value="console"
                className="text-neutral-600! after:bg-foreground! font-normal tracking-tight after:h-[2.5px]!"
              >
                <Terminal size={16} />
                Console
              </TabsTrigger>
              <TabsTrigger
                value="network"
                className="text-neutral-600! after:bg-foreground! font-normal tracking-tight after:h-[2.5px]!"
              >
                <Globe />
                Network
              </TabsTrigger>
            </TabsList>
            <div className="border border-border rounded-lg mt-2 mb-6">
              <TabsContent value="console">
                <DebugContent>
                  <DebugLeftInfoSide>
                    <DebugTitle>Type errors</DebugTitle>
                    <DebugDescription>
                      These are caused by invalid value types passed
                    </DebugDescription>
                  </DebugLeftInfoSide>
                  <DebugRightCodeSide>
                    Uncaught TypeError: Cannot read properties of undefined
                    (reading 'map') at FeedbackList.tsx:42:18 at renderWithHooks
                    (react-dom.development.js:16305:18) at
                    mountIndeterminateComponent
                    (react-dom.development.js:20074:13)
                  </DebugRightCodeSide>
                </DebugContent>
                <DebugContent>
                  <DebugLeftInfoSide>
                    <DebugTitle>API Errors</DebugTitle>
                    <DebugDescription>
                      These are the server returned response errors
                    </DebugDescription>
                  </DebugLeftInfoSide>
                  <DebugRightCodeSide>
                    Uncaught TypeError: Cannot read properties of undefined
                    (reading 'map') at FeedbackList.tsx:42:18 at renderWithHooks
                    (react-dom.development.js:16305:18) at
                    mountIndeterminateComponent
                    (react-dom.development.js:20074:13)
                  </DebugRightCodeSide>
                </DebugContent>
              </TabsContent>
              <TabsContent value="network">
                <DebugContent>Make changes to your account here.</DebugContent>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      {/* <div className="relative flex-1 w-full rounded-xl bg-[#0b0b0b] border border-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
        <div className="h-full overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neutral-400">
              <Terminal size={16} />
              <span>Console Output</span>
            </div>

            <div className="space-y-1">
              <p className="text-red-500">
                ▶ Uncaught TypeError: Cannot read property 'submit' of null
              </p>
              <p className="text-red-500">
                ▶ Failed to load resource: net::ERR_CONNECTION_REFUSED
              </p>
            </div>
          </div>

          <div className="h-px bg-white/5 my-2" />

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neutral-400">
              <span>{"</>"}</span>
              <span>Network Interaction</span>
            </div>

            <p className="text-emerald-400">POST /api/v1/auth/login 200 OK</p>

            <p className="text-sky-400 underline underline-offset-2 cursor-pointer">
              Request Payload:
            </p>
            <pre className="text-neutral-200 pl-3">
              {`{
      "email": "user@example.com",
      "password": "****"
    }`}
            </pre>

            <p className="text-sky-400 underline underline-offset-2 cursor-pointer">
              Response Payload:
            </p>
            <pre className="text-neutral-200 pl-3">
              {`{
      "error": "Authentication failed"
    }`}
            </pre>
          </div>
        </div>
      </div> */}
    </>
  );
};
