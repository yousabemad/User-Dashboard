import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Users{
    items:User[];
    total: number;
    page : number;
    perPage: number;
    totalPages: number;
}

export interface User {
    id: number ;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;

}

export interface PaginationParams {
    [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;

    page: number;
    perPage: number;
}