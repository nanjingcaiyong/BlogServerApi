import { ResultStatus } from './../utils/ResultStatus';
export class BaseController {
  JsonBackResult(status: ResultStatus): { status: ResultStatus };
  JsonBackResult(status: ResultStatus, data: any): { status: ResultStatus, data: any };
  JsonBackResult(status: ResultStatus, data: any, msg: string): { status: ResultStatus, data: any, msg: string };
  JsonBackResult(status: ResultStatus, data?: any, msg?: string): any {
    let result = {};
    switch (true) {
      case !!status:
        Object.assign(result, { status: status });
      case !!data:
        Object.assign(result, { data: data });
      case !!msg:
        Object.assign(result, { msg: msg });
        break;
    }
    return result;
  }
}