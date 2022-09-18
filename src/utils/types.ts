export type taskType = {login: string, email: string, text: string}
export enum resultCode {success=0, error = 1}

export enum HTTP_STATUS {
    'OK_200'=200,
    'Created_201'=201,
    'No_Content_204'=204,
    'Bad_Request_400'=400,
    'Unauthorized_401'=401,
    'Not_Found_404'=404,
    'ServerError_500'=500,
}