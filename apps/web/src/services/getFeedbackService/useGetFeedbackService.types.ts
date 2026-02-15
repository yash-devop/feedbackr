interface IClientContext {
  os: string;
  browser: string;
}

interface IDebugContext {
  logs: any[];
}

interface IDomain {
  name: string;
  status: string;
}

interface IFeedback {
  id: string;
  url: string;
  message: string;
  email: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  clientContext: IClientContext;
  debugContext: IDebugContext;
  domainId: string;
  images: any[];
  domain: IDomain;
}

interface IFeedbackResponse {
  data: IFeedback[];
  message: string;
}

export type {
  IClientContext,
  IDebugContext,
  IDomain,
  IFeedback,
  IFeedbackResponse,
};
