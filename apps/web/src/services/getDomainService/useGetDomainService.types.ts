interface IDomainResponse {
  data: {
    clientId: string;
    domainId: string;
  };
  message: string;
  status: number;
}

export type { IDomainResponse };
