import { apiClient } from "@/lib/axios/client.ts";
import { createSearchParams } from "react-router";

interface IRequestWithBody<T = unknown> {
  url: string;
  data?: T;
}

interface IGetRequest {
  url: string;
  searchParams?: Record<string, string>;
  signal?: AbortSignal;
}

export async function handleGlobalPostRequest<
  TResponse = unknown,
  TBody = unknown,
>({ url, data }: IRequestWithBody<TBody>): Promise<TResponse> {
  return apiClient.post(url, data).then((res) => res.data);
}

export async function handleGlobalPatchRequest<
  TResponse = unknown,
  TBody = unknown,
>({ url, data }: IRequestWithBody<TBody>): Promise<TResponse> {
  return apiClient.patch(url, data).then((res) => res.data);
}

export async function handleGlobalPutRequest<
  TResponse = unknown,
  TBody = unknown,
>({ url, data }: IRequestWithBody<TBody>): Promise<TResponse> {
  return apiClient.put(url, data).then((res) => res.data);
}

export async function handleGlobalDeleteRequest<TResponse = unknown>({
  url,
}: {
  url: string;
}): Promise<TResponse> {
  return apiClient.delete(url).then((res) => res.data);
}

export async function handleGlobalPostFormRequest<TResponse = unknown>({
  url,
  data,
}: IRequestWithBody<FormData>): Promise<TResponse> {
  return apiClient
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
}

export async function handleGlobalGetRequestQuery<TResponse = unknown>({
  url,
  searchParams,
  signal,
}: IGetRequest): Promise<TResponse> {
  const queryString = searchParams
    ? createSearchParams(searchParams).toString()
    : "";

  const finalUrl = queryString ? `${url}?${queryString}` : url;

  return apiClient.get(finalUrl, { signal }).then((res) => res.data);
}
