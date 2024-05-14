const { simulateScript, Location, ReturnType, CodeLanguage, decodeResult } = require("@chainlink/functions-toolkit");
const fs = require("fs");

async function main() {
    const { responseBytesHexstring, capturedTerminalOutput, errorString } = await simulateScript({
        source: fs.readFileSync("./starWarsPlaygroundExample.js").toString(),
        codeLocation: Location.Inline,
        secrets: { secretKey: process.env.SECRET_KEY ?? "" },
        secretsLocation: Location.DONHosted,
        args: [],
        codeLanguage: CodeLanguage.JavaScript,
        expectedReturnType: ReturnType.string,
    })

    console.log("responseBytesHexstring:", responseBytesHexstring);
    console.log("errorString:", errorString);
    console.log("capturedTerminalOutput:", capturedTerminalOutput);

    // console.log("Decoded Result: ", decodeResult(responseBytesHexstring, ReturnType.string));
}

main();