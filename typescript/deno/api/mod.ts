import { Application, Router } from "./deps.ts";
import { list } from "./handlers/list.ts";
import { create } from "./handlers/create.ts";
import { remove } from "./handlers/remove.ts";
import { get } from "./handlers/get.ts";
import { update } from "./handlers/update.ts";

const app = new Application();

const router = new Router();

router
  .post("/gists", create)
  .get("/gists", list)
  .get("/gists/:id", get)
  .delete("/gists/:id", remove)
  .patch("/gists/:id", update);

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
