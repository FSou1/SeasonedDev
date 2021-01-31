import { Application, Router } from "./deps.ts";
import { list } from "./handlers/list.ts";
import { create } from "./handlers/create.ts";
import { remove } from "./handlers/remove.ts";
import { get } from "./handlers/get.ts";
import { update } from "./handlers/update.ts";
import { auth } from "./handlers/auth.ts";
import { authorized } from "./middlewares/authorized.ts";

const app = new Application();

const router = new Router();

router
  .post("/auth", auth)
  .post("/gists", authorized, create)
  .get("/gists", authorized, list)
  .get("/gists/:id", authorized, get)
  .delete("/gists/:id", authorized, remove)
  .patch("/gists/:id", authorized, update);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
