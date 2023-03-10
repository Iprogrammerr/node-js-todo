import { UUID } from "../common/types";

export class AuthToken {
    constructor(readonly token: string) { }
}

export interface AuthClient {

    ofUser(id: string): AuthToken

    authenticate(token: string): UserContext
}

export class UserContext {
    constructor(readonly id: UUID) { }
}