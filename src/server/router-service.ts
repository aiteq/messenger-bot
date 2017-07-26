import { Router, RequestHandler } from "express";
import { Trace } from "@aiteq/trace";

@Trace()
export abstract class RouterService {
  
  private router: Router;

  constructor() {
    this.router = Router();
  }

  public getRouter(): Router {
    return this.router;
  }

  protected get(route: string, func: RequestHandler): Router {
    this.router.get(route, func);
    return this.router;
  }

  protected post(route: string, func: RequestHandler): Router {
    this.router.post(route, func);
    return this.router;
  }
}