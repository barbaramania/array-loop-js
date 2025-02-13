const options = "Hi. Choose an option:\n1. View all items (tasks, contacts, etc.)\n2. Add a new item.\n3. Remove an item.\n4. Exit the program.";
const codepattern = /^[A-Za-z]{2,3}\d{3}$/;

let classList = [
    { code: "BTM100", name: "Orient. & Career Exploration", startingDate: "01/01/2025" },
    { code: "BTM260", name: "Project Management", startingDate: "01/01/2025" },
    { code: "IT120", name: "Database Development", startingDate: "01/01/2025" },
    { code: "IT121", name: "Javascript 1", startingDate: "01/01/2025" }
];

function classObject(code, name, startingDate) {
    this.name = name;
    this.code = code;
    this.startingDate = startingDate;
}

function viewClasses() {
    if (classList.length === 0) {
        alert("No classes available.");
        return;
    }
    let output = "List of classes:\n";
    for (let i = 0; i < classList.length; i++) {
        output += `${i + 1}. ${classList[i].code} - ${classList[i].name}\n`;
    }
    alert(output);
}

function addClass() {
    let new_class_code;
    while (true) {
        new_class_code = prompt("Please add the code of the new class in the format 'AAA111'");
        if (codepattern.test(new_class_code)) break;
        alert("Invalid input. Expected: 'AAA111' OR 'AA111'. Try again");
    }

    let new_class_name;
    while (true) {
        new_class_name = prompt("Please add the name of the new class: ");
        if (new_class_name.trim() !== "") break;
        alert("Invalid input. The input cannot be empty. Please try again.");
    }

    classList.push(new classObject(new_class_code, new_class_name, "01/01/2025"));
    alert("New class was successfully added.");
}

function removeClass() {
    let remote_class = prompt("Please enter the number OR the class code OR name of the class that you want to remove");
    let class_found = false;
    if (!isNaN(remote_class) && remote_class.trim() !== "") {
        let index = Number(remote_class) - 1;
        if (index >= 0 && index < classList.length) {
            classList.splice(index, 1);
            alert("Class was successfully removed.");
            return;
        }
    }
    classList = classList.filter(item => {
        if (item.code === remote_class || item.name === remote_class) {
            class_found = true;
            return false;
        }
        return true;
    });
    alert(class_found ? "Class was successfully removed." : "Sorry, I can't find this class.");
}

function main() {
    let is_running = true;

    while (is_running) {
        let option = Number(prompt(options));
        switch (option) {
            case 1:
                viewClasses();
                break;
            case 2:
                addClass();
                break;
            case 3:
                removeClass();
                break;
            case 4:
                alert("Thank you for using this tool. Here is your final list:");
                viewClasses();
                is_running = false;
                break;
            default:
                alert("Sorry, I can't find this option.");
        }
    }
}

main();