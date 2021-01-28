import { Bson, Collection, MongoClient } from "./deps.ts";

async function connect(): Promise<Collection<IGistSchema>> {
  const client = new MongoClient();
  await client.connect("mongodb://localhost:27017");
  return client.database("gist_api").collection<IGistSchema>("gists");
}

export async function insertGist(gist: any): Promise<string> {
  const collection = await connect();
  return (await collection.insertOne(gist)).toString();
}

export async function fetchGists(skip: number, limit: number): Promise<any> {
  const collection = await connect();
  return await collection.find().skip(skip).limit(limit).toArray();
}

export async function fetchGist(id: string): Promise<any> {
  const collection = await connect();
  return await collection.findOne({ _id: new Bson.ObjectId(id) });
}

export async function deleteGist(id: string): Promise<any> {
  const collection = await connect();
  return await collection.deleteOne({ _id: new Bson.ObjectId(id) });
}

export async function updateGist(gist: any): Promise<any> {
  const collection = await connect();
  const filter = { _id: new Bson.ObjectId(gist.id) };
  const update = { $set: { content: gist.content } };
  return await collection.updateOne(filter, update);
}

interface IGistSchema {
  _id: { $oid: string };
  content: string;
  created_at: Date;
}
