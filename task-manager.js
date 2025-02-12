const options = "Hi. Choose an option:\n1. View all items (tasks, contacts, etc.)\n2. Add a new item.\n3. Remove an item.\n4. Exit the program.";

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

let output = '';
const codepattern = /^[A-Za-z]{2,3}\d{3}$/;

let is_running = true;

while (is_running) {
    let option = Number(prompt(options));
    switch (option) {
        case 1: //view
            output = '';
            for (let i = 0; i < classList.length; i++) {
                output += i + 1 + ". " + classList[i].code + " - " + classList[i].name + "\n";
            }
            alert(output);
            break;

        case 2: //add
            let new_class_code;
            while (true) {
                new_class_code = prompt("Please add the code of the new class in the format 'AAA111'");
                if (codepattern.test(new_class_code)) {
                    break;
                } else {
                    alert("Invalid input. Expected: 'AAA111' OR 'AA111'. Try again");
                }
            }

            let new_class_name;
            while (true) {
                new_class_name = prompt("Please add the name of the new class: ");
                if (new_class_name.trim() !== "") {
                    break;
                } else {
                    alert("Invalid input. The input cannot be empty. Please try again.");
                }
            }

            let new_class_obj = new classObject(new_class_code, new_class_name, "01/01/2025");
            classList.push(new_class_obj);
            alert("New class was successfully added.");
            break;

        case 3: //remove
            let remote_class = prompt("Please enter the number OR the class code OR name of the class that you want to remove");
            let class_found = false;
            if (!isNaN(remote_class) && remote_class.trim() !== "") {
                let index = Number(remote_class) - 1;
                if (index >= 0 && index < classList.length) {
                    classList.splice(index, 1);
                    alert("Class was successfully removed.");
                    break;
                }
            }
            for (let i = 0; i < classList.length; i++) {
                if (remote_class === classList[i].code || remote_class === classList[i].name) {
                    classList.splice(i, 1);
                    alert("Class was successfully removed.");
                    class_found = true;
                    break;
                }
            }
            if (!class_found) {
                alert("Sorry, I can't find this class.");
            }
            break;

        case 4: //exit
            alert("Thank you for using this tool. This is the list of your classes ->");
            output = '';
            for (let i = 0; i < classList.length; i++) {
                output += i + 1 + ". " + classList[i].code + " - " + classList[i].name + "\n";
            }
            alert(output);
            is_running = false;
            break;

        default:
            alert("Sorry, I can't find this option.");
    }
}