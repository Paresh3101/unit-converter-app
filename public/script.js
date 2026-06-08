async function convertUnit() {

    const value =
        document.getElementById("value").value;

    const conversion =
        document.getElementById("conversion").value;

    const response = await fetch("/convert", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            value,
            conversion
        })
    });

    const data = await response.json();

    document.getElementById("result")
        .innerText = "Result: " + data.result;
}