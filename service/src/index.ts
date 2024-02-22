import { Output } from "./interfaces/output";
import { convertInputToOutput } from "./utils/inputToOutputConverter";
import express, { Request, Response } from 'express';
import cors from 'cors';
import { Input } from "./interfaces/input";


const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/convert', (req: Request, res: Response) => {
    try {
        const input: Input[] = req.body;
        const output: Output[] = convertInputToOutput(input);
        res.json(output);
        res.status(200);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const output: Output[] = convertInputToOutput(inputList);

// const areOutputsEqual: boolean = output.every((element, index) => {
//     return JSON.stringify(element) === JSON.stringify(outputList[index]);
// })

// if (areOutputsEqual) {
//     console.log("The algorithm works :) ");
// }
