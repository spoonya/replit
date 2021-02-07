import { Document, Types } from "mongoose";
import { nanoid } from "nanoid";
import Models from "./models";

export interface ProjectInfo extends Document {
  _id: Types.ObjectId;
  title: string;
  created: Date;
  link: string;
  lang: string;
  root: Types.ObjectId | Folder;
}

export interface Folder extends Document {
  _id: Types.ObjectId;
  title: string;
  parent: Types.ObjectId;
  children: Types.ObjectId[] | Folder[];
  files: Types.ObjectId[] | File[];
}

export interface File extends Document {
  _id: Types.ObjectId;
  title: string;
  parent: Types.ObjectId | Folder;
  body: string;
}
export interface Error {
  error: string;
}

export interface Lang {
  name: string;
  value: string;
  extension: string;
}

interface ExtensionList {
  [key: string]: string;
}

export default {
  get: async function (link: string): Promise<ProjectInfo | Error> {
    if (link.length === 0)
      return {
        error: "No project link specified",
      };

    const project: ProjectInfo | null = await Models.Project.findOne({ link }).exec();

    if (!project)
      return {
        error: "No such project",
      };

    return await this.populateProject(project);
  },

  populateProject: async function (project: ProjectInfo): Promise<ProjectInfo> {
    async function populateFolder(folder: Folder): Promise<void> {
      const hasChildren = folder.children.length > 0;
      const hasFiles = folder.files.length > 0;

      if (hasFiles) await folder.populate("files").execPopulate();

      if (hasChildren) {
        console.log(`folder ${folder.title} has ${folder.children.length} children. Populating...`);
        await folder.populate("children").execPopulate();
        (<Folder[]>folder.children).forEach(await populateFolder);
      }
    }

    (await project.populate("root").execPopulate()) as ProjectInfo;

    await populateFolder(<Folder>project.root);

    return project;
  },

  create: async function (lang: string, title: string): Promise<string> {
    const created = Date.now();

    const langInfo: Lang | null = await Models.LangList.findOne({ value: lang });
    const langName = langInfo ? langInfo.name : "JavaScript";
    const extension = langInfo ? langInfo.extension : "js";

    let link: string = await this.createLink();

    const project: Document = await Models.Project.create({
      created,
      title,
      lang: extension,
      link,
    });

    const folder = await Models.Folder.create({
      title: "root",
      parent: project.id,
    });

    const indexFileName = `index${extension}`;

    const indexFile = await Models.File.create({
      title: indexFileName,
      body: "",
      parent: folder.id,
    });

    await project.update({ root: folder.id }).exec();
    await folder.update({ $push: { files: indexFile.id } }).exec();

    return link;
  },

  createLink: async function (): Promise<string> {
    const link = nanoid();

    const projectsCount = (await Models.Project.find({ link }).exec()).length;

    return projectsCount ? await this.createLink() : link;
  },
};
