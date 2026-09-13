import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

const schema = await buildSchema({
  resolvers: [MeResolver],
});
const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

// Wrap the Apollo handler instead of re-exporting it: its overloads declare a
// second `res` param, which Next's route type validator rejects.
export async function GET(request: NextRequest): Promise<Response> {
  return handler(request);
}

export async function POST(request: NextRequest): Promise<Response> {
  return handler(request);
}
