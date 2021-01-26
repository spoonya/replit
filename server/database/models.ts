import mongoose, { Document, ObjectId, Schema } from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

interface ILangInfo {
  name: string,
  value: string,
  extension: string,
}

export interface ILangInfoModel extends ILangInfo, Document {}

const Models = {
  Project: mongoose.model('Project', new Schema({
    title: String,
    link: String,
    lang: String,
    created: Date,
    root: { type: ObjectId, ref: 'Folder', default: null },
  })),

  File: mongoose.model('File', new Schema({
    title: String,
    body: String,
    parent: { type: ObjectId, ref: 'Folder' },
  })),

  Folder: mongoose.model('Folder', new Schema({
    title: String,
    parent: { type: ObjectId, ref: 'Folder' },
    children: [{ type: ObjectId, ref: 'Folder' }],
    files: [{ type: ObjectId, ref: 'File' }],
  })),

  LangList: mongoose.model<ILangInfoModel>('Lang', new Schema({
    lang: String,
    value: String,
    extension: String,
  }))
}

export default Models;