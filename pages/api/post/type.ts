import { NextApiRequest } from "next/types";

export interface RequestType extends NextApiRequest {
  query: Partial<{
    [key: string]: string;
  }>
}