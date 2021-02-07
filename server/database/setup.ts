import mongoose from 'mongoose';
import Models from './models';

interface IModels {
  [key: string]: any
}

export async function setup() {
  await mongoose.connection.db.dropDatabase();

  await Models.LangList.create({lang: 'JavaScript', value: 'js', extension: 'js'});
  await Models.LangList.create({lang: 'Python', value: 'python', extension: 'py'});
  return true;
}