import { ApiResponse } from "@repo/common/types";
import { Domain } from "../getDomainService/useGetDomainService.types.ts";

interface IGetDomain {
  domains: Domain[];
  hasDomains: boolean;
  length: number;
}

type IGetDomainExistResponse = ApiResponse<IGetDomain>;

export type { IGetDomain, IGetDomainExistResponse };
