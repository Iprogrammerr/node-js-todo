import { User } from "./user";

export interface UserRepository {

    create(user: User): Promise<void>;

    ofName(name: string): Promise<User | null>;
}

export class InMemoryUserRepository implements UserRepository {

    private readonly db = new Map<string, User>();

    create(user: User): Promise<void> {
        this.db.set(user.id, user);
        return Promise.resolve();
    }

    ofName(name: string): Promise<User | null> {
        for (const u of this.db.values()) {
            if (u.name == name) {
                return Promise.resolve(u);
            }
        }

        return Promise.resolve(null);
    }

}