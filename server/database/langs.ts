import Models, { ILangInfoModel } from "./models";

export interface LangList {
  langs: ILangInfoModel[];
}

export async function getAll(): Promise<LangList> {
  const langs: ILangInfoModel[] = await Models.LangList.find();
  return { langs };
}
