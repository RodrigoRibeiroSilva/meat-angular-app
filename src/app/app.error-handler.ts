
import { HttpErrorResponse } from '@angular/common/http'
import { ErrorHandler } from '@angular/core';
import 'rxjs/add/observable/throw'

export class AppErrorHandler extends ErrorHandler {

    handleError(errorResponse: HttpErrorResponse | any ) {
        super.handleError(errorResponse)
    }
}