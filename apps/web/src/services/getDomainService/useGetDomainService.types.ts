import { ApiResponse } from "@repo/common/types";

export type ApiDomainStatus = "ACTIVE" | "INACTIVE" | "PAUSED";

export interface Domain {
  id: string;
  clientId: string;
  name: string;
  url: string;
  userId: string;
  status: ApiDomainStatus;
  createdAt: string;
  updatedAt: string;
}

export type IGetDomainsResponse = ApiResponse<Domain[]>;

interface IDomainResponse {
  data: {
    clientId: string;
    domainId: string;
  };
  message: string;
  status: number;
}

export type { IDomainResponse };
