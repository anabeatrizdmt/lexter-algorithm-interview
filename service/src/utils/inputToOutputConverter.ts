import { Input } from "../interfaces/input";
import { Output } from "../interfaces/output";

export function convertInputToOutput(inputList: Input[]): Output[] {

    if(inputList.length === 0) return [];

    const outputList: Output[] = [];

    try {
        inputList.forEach((input) => {
            const entryId = parseInt(input.entryId);
            if (isNaN(entryId)) {
                throw new Error("entryId is not a number")
            };

            const fullPath = input.path.join("/");
            const currentPath = input.path[input.path.length - 1];
    
            const output: Output = {
                entryId,
                fullPath,
                currentPath,
                children: []
            }
            outputList.push(output);
        });
    
        outputList.sort((a, b) => a.entryId - b.entryId);
        
        console.log("outputList"); //todo: remover, apenas para explicação da entrevista
        console.log(outputList); //todo: remover, apenas para explicação da entrevista

        const outputListPathMap: { [fullPath: string]: Output } = {};

        outputList.forEach(output => {
            outputListPathMap[output.fullPath] = output;
        });

        console.log("outputListMap"); //todo: remove, for interview explanation only
        console.log(outputListPathMap); //todo: remove, for interview explanation only

        outputList.forEach(output => {
            const paths = output.fullPath.split('/');
            paths.pop();
            const parentFullPath = paths.join('/');
            const parentOutput = outputListPathMap[parentFullPath];
            if (parentOutput) {
                parentOutput.children.push(output);
            }
        });
    
        const rootOutputs = outputList.filter(output => output.fullPath.split('/').length === 1);
    
        return rootOutputs;

    } catch (error) {
        throw new Error('error on convertInputToOutput function: ');
    }    
}
