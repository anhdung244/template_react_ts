import {HttpStatusCode} from "axios";

export type TErrorResponses = {
    message?: string | string[];
    status?: HttpStatusCode;
    error?: string;
};

export type TResponse<T> = {
    data: T;
    status: HttpStatusCode;
    message: string;
} & TPagination;

export type TPagination = {
    limit?: number;
    page?: number;
    maxPage?: number;
    total?: number;
};
