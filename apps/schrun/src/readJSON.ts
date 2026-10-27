import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CONFIG_DIR } from "./constant/app";
import { type FileType } from "./type";
import typia from "typia";

export const readJSON = async (FileName: string): Promise<FileType> => {
  const file = join(CONFIG_DIR, `${FileName}.json`);
  const reads = await readFile(file, "utf-8");
  const readparse = JSON.parse(reads);

  if (typia.is<FileType>(readparse)) {
    return readparse as FileType;
  } else {
    throw "The configuration format is invalid";
  }
};
