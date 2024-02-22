import React from 'react';
import '../App.css';

const Converter = () => {

    const [input, setInput] = React.useState('');
    const [output, setOutput] = React.useState('');

    const handleInput = async () => {
        try {
            const response = await fetch('http://localhost:3001/convert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: input
            });
            const data = await response.json();
            console.log(data);
            setOutput(JSON.stringify(data, null, 2));

        } catch (error) {
            console.error(error);
            alert('Failed to convert the input. Please try again later or change input.');
        }
    };

    const handleOutputCopy = () => {
        navigator.clipboard.writeText(output);
        alert('Output copied to clipboard');
    };

    return (
        <div className="converter-container">
          <div className="converter-section">
            <label htmlFor="input">Input:</label>
            <textarea
              id="input"
              className="converter-input"
              placeholder="Insert the input here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleInput} className="converter-button">
              Convert
            </button>
          </div>
          <div className="converter-section">
            <label htmlFor="output">Output:</label>
            <textarea
              id="output"
              className="converter-output"
              readOnly
              value={output}
            />
            <button onClick={handleOutputCopy} className="converter-button">
              Copy result
            </button>
          </div>
        </div>
      );
};

export default Converter;
