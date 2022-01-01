import { MongoClient, Bson } from "https://deno.land/x/mongo/mod.ts";

interface PositionSchema {
  _id: Bson.ObjectId;
  role_name: string;
  customer_name: string;
  remote_work_allowed: boolean;
}

const connect = async () => {
  const client = new MongoClient();

  await client.connect({
    db: "test",
    tls: true,
    servers: [
      {
        host: "<host>",
        port: 27017,
      },
    ],
    credential: {
      username: "<username>",
      password: "<password>",
      db: "test",
      mechanism: "SCRAM-SHA-1",
    },
  });

  return client;
}

const allPositions = async () => {
  const client = await connect();

  const db = client.database('test');

  const positions = db.collection<PositionSchema>("positions");

  return await positions.find({}, { noCursorTimeout: false }).toArray();
};

const insertPosition = async ({ roleName, customerName, remoteWorkAllowed }: any) => {
  const client = await connect();

  const db = client.database('test');

  const positions = db.collection<PositionSchema>("positions");

  const insertId = await positions.insertOne({
    role_name: roleName,
    customer_name: customerName,
    remote_work_allowed: remoteWorkAllowed
  });

  return positions.findOne({ _id: insertId }, { noCursorTimeout: false });
};

export const resolvers = {
  Query: {
    allPositions: () => allPositions()
  },
  Mutation: {
    insertPosition: (_: any, args: any) => insertPosition(args)
  }
}