const greet = (name) => {

    // Test 2
    let message = "Hello, ";
    if (name === null) { 
        return "Hello, My Friend."
    }

    if (typeof name === "object") {
        // Test 6
        const idxShoutedName = name.findIndex(name => name === name.toUpperCase());
        if (idxShoutedName !== -1) {
            let cake = [...name];
            cake.splice(idxShoutedName, 1);
            message += cake.join(' and ');
            message += `. AND HELLO ${name[idxShoutedName]}!`;
            return message;
        }

        // Test 8
        const idxWithDoubleQuotes = name.findIndex(name => name.includes('"'));
        if (idxWithDoubleQuotes !== -1) {
            const cake = name.reduce((names, name, idx) => {
                if (idx === idxWithDoubleQuotes) {
                    const escapedName = name.substr(1, name.length - 2);
                    return [...names, escapedName];
                }
                return [...names, name];
            }, []);

            return message + cake.join(' and ') + '.'
        }

        // Test 7
        const idxThereComma = name.findIndex(name => name.includes(','));
        if (idxThereComma !== -1) {
            let cake = [...name];
            cake.splice(idxThereComma, 1, ...cake[idxThereComma].split(', '));
            name = cake;
        }

        // Test 5
        if (name.length > 2) {
            for (let i = 0; i < name.length; i++) {
                if (i === name.length - 1) {
                    message += `and ${name[i]}.`
                    break
                }
                message += `${name[i]}, `
            }
            return message;
        }

        // Test 4
        return message + `${name[0]} and ${name[1]}.`
    }

    // Test 3
    if (name.toUpperCase() === name) {
        return `HELLO ${name}!`;
    }

    // Test 1
    return message + `${name}`;
}

module.exports = { greet }