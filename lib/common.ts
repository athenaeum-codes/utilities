export enum NamingConvention {
    CamelCase,
    PascalCase
}

const regex = /-/g;

const getCamelCaseName = (componentName: string) => {
    const nameArray = componentName.split(regex);
    const newArray = nameArray.map((word: string, idx: number) => {
        if (idx === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
    return newArray.join('');
};

const getPascalCaseName = (componentName: string) => {
    const nameArray = componentName.split(regex);
    const newArray = nameArray.map((word: string, idx: number) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
    return newArray.join('');
};

export const getName = (componentName: string, type: NamingConvention) => {
    switch (type) {
        case NamingConvention.CamelCase:
            return getCamelCaseName(componentName);
            break;
        case NamingConvention.PascalCase:
            return getPascalCaseName(componentName);
            break;
        default:
            return getCamelCaseName(componentName);
            break;
    }
}

