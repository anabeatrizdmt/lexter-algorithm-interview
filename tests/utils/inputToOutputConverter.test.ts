import { Input } from "../../src/interfaces/input";
import { Output } from "../../src/interfaces/output";
import { convertInputToOutput } from "../../src/utils/inputToOutputConverter";
import { inputList as inputListMock } from "../../src/__mocks__/input";
import { outputList as outputListMock } from "../../src/__mocks__/output";


describe('convertInputToOutput function', () => {

    test('should convert input to output correctly', () => {
        const inputList: Input[] = inputListMock;
        const functionOutput: Output[] = convertInputToOutput(inputList);
        const expectedOutput: Output[] = outputListMock;

        expect(functionOutput).toEqual(expectedOutput);
    });

    test('should correctly establish parent-child relationships', () => {
        const inputList: Input[] = [
            { entryId: "1", path: ["parent"] },
            { entryId: "2", path: ["parent", "child"] }
        ];
        const expectedOutput: Output[] = [
            {
                entryId: 1,
                fullPath: "parent",
                currentPath: "parent",
                children: [
                    {
                        entryId: 2,
                        fullPath: "parent/child",
                        currentPath: "child",
                        children: []
                    }
                ]
            }
        ];
    
        const actualOutput = convertInputToOutput(inputList);
    
        expect(actualOutput).toEqual(expectedOutput);
    });

    test('should return an empty array when given an empty array', () => {
        const inputList: Input[] = [];
        const expectedOutput: Output[] = [];

        const actualOutput = convertInputToOutput(inputList);

        expect(actualOutput).toEqual(expectedOutput);
    });

    test('should handle invalid entryId by returning an empty array', () => {
        const inputListWithInvalidEntryId: Input[] = [
            { entryId: "invalid", path: ["root3", "path2", "path1"] }
        ];

        expect(() => convertInputToOutput(inputListWithInvalidEntryId)).toThrow('error on convertInputToOutput function');

    });
});
