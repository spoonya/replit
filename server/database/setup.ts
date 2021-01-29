import Models from './models';


export async function setup() {
    await Models.LangList.create({lang: 'JavaScript', value: 'js', extension: 'js'});
    await Models.LangList.create({lang: 'Python', value: 'python', extension: 'py'});
    return true;
}