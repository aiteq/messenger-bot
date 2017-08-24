import { EventEmitter } from "events";
import { RequestHandler, Router } from "express";

/**
 * A parent class for middleware services to be mounted as Express routes.
 */
export abstract class RouterService extends EventEmitter {

    private router: Router;

    constructor() {
        super();
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
