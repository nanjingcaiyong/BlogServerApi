import { BaseController } from "./BaseController";
import FileRepository from "./../repository/FileRepository";
import { ResultStatus } from "../utils/ResultStatus";
export class FileController extends BaseController {
  private repository = new FileRepository();
  async save(ctx, next) {
    if (await this.repository.save(ctx.request.body))
      return this.JsonBackResult(ResultStatus.Success);
    return this.JsonBackResult(ResultStatus.Fail);
  }
}
