const originalQuery = document.querySelector("#inQuery textarea");
const inputArea = document.querySelector('#inQuery textarea');
const outputArea = document.querySelector("#outQuery textarea");
const actionButton = document.querySelector("#format");
const resetButton = document.querySelector("#reset");
const copyButton = document.querySelector("#copy");
const messagePanel = document.querySelector('.messagePanel');
const messageDuration_MS = 600;
const keywords = ["WITH", "FROM", "SELECT", "UPDATE", "DELETE", "SET", "DECLARE", "INTO", "ON",
    "JOIN", "INNER", "LEFT", "RIGHT", "TOP", "ORDER BY", "WHERE", "AND", "OR",
    "NOLOCK", "AS", "ASC", "DESC", "MERGE", "CROSS", "OUTER"
];

const regexLine = /"(.*)"/g;
const regexCommand = /\.\w+\("/g;
const regexTrimCommand = /[\.\(\"]/g; // For replacing . " ) with empty space
const regexSchema = /\w+\./g;
resetButton.addEventListener('click', () => {
    inputArea.value = "";
    outputArea.value = "";
});
actionButton.addEventListener('click', formatQuery);
copyButton.addEventListener('click', copyOutputArea);
//console.log(originalQuery.value);

function formatQuery() {
    let parsedQuery = originalQuery.value.trim().split("\n");
    // Regex the commands inside quotation marks
    // TODO: check for Append, AppendLine or AppendFormat
    //  -- if AppendFormat, replace {0} and {1} with the values in the method parameters, 
    // splitting after ", with , (save those to an array, index is {0} {1} etc)
    parsedQuery = parsedQuery.map(el => {
        el = el.trim();
        el = el.match(regexLine);
        if (el) {
            el = el.toString();
            el = el.replace(/"/g, "");
            el = el.replace(regexSchema, (m) => m.toUpperCase());
            for (let i = 0; i < keywords.length; i++) {
                let regexKeyword = new RegExp(`\\b${keywords[i]}\\b`, "gi"); // \s
                el = el.replace(regexKeyword, keywords[i].toUpperCase() + "");
            }
        } else {
            el = "\n"
        }
        return el
    });
    let outputString = "";
    parsedQuery.forEach((el, index) => {
        if (el) {
            if (index !== 0) {
                outputString += "\n";
            }
            outputString += el.trim();
        }
    });
    outputArea.value = outputString;
}

function copyOutputArea() {
    outputArea.select();
    document.execCommand("copy");
    messagePanel.classList.remove("hidden");
    setTimeout(() => {
        messagePanel.classList.add("hidden");
    }, messageDuration_MS);
    outputArea.setSelectionRange(0, 0);
    outputArea.blur();
}