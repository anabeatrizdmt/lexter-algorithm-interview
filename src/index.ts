import { inputList } from "./__mocks__/input";
import { outputList } from "./__mocks__/output";
import { Output } from "./interfaces/output";
import { convertInputToOutput } from "./utils/inputToOutputConverter";

const output: Output[] = convertInputToOutput(inputList);

const areOutputsEqual: boolean = output.every((element, index) => {
    return JSON.stringify(element) === JSON.stringify(outputList[index]);
})

if (areOutputsEqual) {
    console.log("The algorithm works :) ");
}
