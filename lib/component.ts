import { mkdir, writeFile } from 'fs';
import * as chalk from 'chalk';
import { getName, NamingConvention } from './common';

const fileData = `
import React, { Component } from 'react';
import './[FileName].scss';

interface I[ComponentName]Props {

}
interface I[ComponentName]State {

}

export default class [ComponentName] extends Component<I[ComponentName]Props, I[ComponentName]State> {
state = {}

render() {
    return (
        <div>
            
        </div>
    )
}
}
`;

export const createComponent = (componentName: string): void => {
    const fileName = getName(componentName, NamingConvention.CamelCase);
    const className = getName(componentName, NamingConvention.PascalCase);
    const indexData = `import ${className} from './${fileName}';\nexport default ${className};`
    const dirPath = `./src/components/${componentName}`;
    mkdir(dirPath, { recursive: true }, err => {
        if (err) {

        } else {
            writeFile(`${dirPath}/index.tsx`, indexData, err => {
                if (err) {

                } else {
                    console.log(`${chalk.cyan('Created:')} ${dirPath}/index.tsx`);
                }
            });
            writeFile(`${dirPath}/${fileName}.tsx`, `${fileData.replace(/\[ComponentName\]/g, className).replace(/\[FileName\]/g, fileName)}`, err => {
                if (err) {

                } else {
                    console.log(`${chalk.cyan('Created:')} ${dirPath}/${fileName}.tsx`);
                }
            });
            writeFile(`${dirPath}/${fileName}.scss`, ``, err => {
                if (err) {

                } else {
                    console.log(`${chalk.cyan('Created:')} ${dirPath}/${fileName}.scss`);
                }
            });
        }
    });
}
