import { readFile, writeFile } from "fs/promises";
import { Token, User } from "../types/globalTypes";

const getId = (): string => {
  return `${new Date().getTime()}-${Math.random()}`;
};

class DBRepository<T extends { id: string }> {
  constructor(private filePath: string) {}

  private async read(): Promise<T[]> {
    const jsonString = (
      await readFile(this.filePath).catch((e) =>
        e.code === "ENOENT" ? "[]" : Promise.reject(e)
      )
    ).toString();
    return JSON.parse(jsonString === "" ? "[]" : jsonString);
  }

  private async write(list: T[]): Promise<void> {
    return writeFile(this.filePath, JSON.stringify(list, null, 2));
  }

  async getAll(): Promise<T[]> {
    return this.read();
  }

  async create(data: Omit<T, "id">): Promise<T> {
    const newObject = { ...data, id: getId() } as T;

    await this.write((await this.getAll()).concat(newObject));
    return newObject;
  }

  async update(newObjData: Partial<T>): Promise<T> {
    if (!newObjData.id) {
      throw Error(
        `Unable to update object without an id: ${JSON.stringify(newObjData)}`
      );
    }

    const objToUpdate = (item: T) => item.id === newObjData.id;
    const allItems = await this.getAll();
    const oldObject = allItems.find(objToUpdate);

    if (!oldObject) {
      throw Error(
        `Unable to update an object that does not exists: ${JSON.stringify(
          newObjData
        )}`
      );
    }

    const newObject = { ...oldObject, ...newObjData };

    await this.write(
      allItems.map((obj) => (objToUpdate(obj) ? newObject : obj))
    );

    return newObject;
  }
}

export const userRepository = new DBRepository<User>("user-db.json");

export const tokenRepository = new DBRepository<Token>("token-db.json");
