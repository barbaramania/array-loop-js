const options = "Hi. Chose an option:\n1. View all items (tasks, contacts, etc.)\n2. Add a new item.\n3. Remove an item.\n4. Exit the program.";
let classList = [
    { code: "BTM100", name: "Orient. & Career Exploration" },
    { code: "BTM260", name: "Project Management" },
    { code: "IT120", name: "Database Development" },
    { code: "IT121", name: "Javascript 1" }
];
let output = '';

is_running = true;

while (is_running) {
    option = Number(prompt(options));
    switch (option) {
        case 1: //view
            output = '';
            for (let i = 0; i < classList.length; i++) {
                output += i + 1 + ". " + classList[i].code + " - " + classList[i].name + "\n";
            }
            alert(output);
            break;

        case 2: //add
            // ADD IT211 - Object Oriented Program W/Java
            let new_class = prompt("Please add the name of the new class in the format 'AA111 - Name of Your Class'");
            new_class = new_class.split("-");
            let new_class_obj = {
                code: new_class[0],
                name: new_class[1]
            }
            classList.push(new_class_obj);
            alert("New class was successfully added.");
            break;

        case 3: //remote
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
            alert("Thank you for using this tool.");
            is_running = false;
            break;

        default:
            alert("Sorry, I can't find this option.");
    }
}