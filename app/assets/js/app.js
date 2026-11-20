
document.addEventListener("DOMContentLoaded", function () {

    // Expand and collapse practice problems
    const problemToggles = document.querySelectorAll(".problem-toggle");

    problemToggles.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            const problem = toggle.closest(".problem");
            const isOpen = problem.classList.toggle("open");

            const icon = toggle.querySelector(".toggle-icon");
            icon.textContent = isOpen ? "−" : "+";
        });
    });

    // Execute JavaScript code from editors
    const runButtons = document.querySelectorAll(".run-button");

    runButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const editorId = button.dataset.editor;
            const outputId = button.dataset.output;

            const editor = document.getElementById(editorId);
            const output = document.getElementById(outputId);

            if (!editor || !output) {
                return;
            }

            const code = editor.value;
            const logs = [];

            const customConsole = {
                log: function (...args) {
                    logs.push(
                        args.map(formatOutput).join(" ")
                    );
                },
                error: function (...args) {
                    logs.push(
                        "Error: " + args.map(formatOutput).join(" ")
                    );
                },
                warn: function (...args) {
                    logs.push(
                        "Warning: " + args.map(formatOutput).join(" ")
                    );
                }
            };

            try {
                const executeCode = new Function(
                    "console",
                    code
                );

                executeCode(customConsole);

                output.textContent = logs.length
                    ? logs.join("\n")
                    : "Code executed successfully. No output.";

            } catch (error) {
                output.textContent = "Error: " + error.message;
            }
        });
    });

});

function formatOutput(value) {
    if (typeof value === "string") {
        return value;
    }

    if (value === undefined) {
        return "undefined";
    }

    if (typeof value === "function") {
        return value.toString();
    }

    try {
        return JSON.stringify(value, null, 2);
    } catch (error) {
        return String(value);
    }
}
