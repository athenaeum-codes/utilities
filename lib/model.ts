// Node imports
import { writeFile, mkdir } from 'fs';
// 3rd party imports
import * as chalk from 'chalk';
// Local imports
import { getName, NamingConvention } from './common';

const modelTemplate = `
import mongoose, { Document, Schema } from "mongoose";

export interface I[Model] extends Document {
  name: string;
}

const [Model]Schema: Schema = new Schema({
  name: { type: String, required: true }
});

export default mongoose.model<I[Model]>("[Model]", [Model]Schema);
`

export const createModel = (modelName: string): void => {
    const dir = './src/models';
    const pascalName = getName(modelName, NamingConvention.PascalCase);
    const camelName = getName(modelName, NamingConvention.CamelCase);

    const filePath = `${dir}/${camelName}.model.ts`
    mkdir(`${dir}`, err => {
        if (err) {

        } else {
            writeFile(filePath, modelTemplate.replace(/\[Model\]/g, pascalName), err => {
                if (err) {

                } else {
                    console.log(`${chalk.cyan('Created:')} ${filePath}`);
                }
            });
        }
    });
}
