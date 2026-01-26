// prisma orm

import { PrismaClient } from "../../../prisma/src/generatedClient/prisma/client.js";
import * as Prisma from "../../../prisma/src/generatedClient/prisma/client.js";

export const prisma = new PrismaClient();

export { Prisma };
