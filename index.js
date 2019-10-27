/*echo "# react-money-tracker" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/smfils1/react-money-tracker.git
git push -u origin master
*/

const createListItem = (type, description, amount) => {
    const li = document.createElement("li");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const p = document.createElement("p");

    li.classList.add("list-group-item");
    div1.classList.add("card", "text-white", "bg-secondary");
    div2.classList.add("card-header", "text-capitalize");
    div3.classList.add("card-body");
    p.classList.add("card-text");

    div2.textContent = `${type} - $${amount}`;
    p.textContent = `${description}`;

    div3.appendChild(p);
    div1.append(div2, div3);
    li.appendChild(div1);

    return li;
};

const getInput = () => {
    const type = document.querySelectorAll(".type");
    const description = document.querySelector("#description").value;
    const amount = document.querySelector("#amount").value;
    let transType = [...type]
        .filter(element => element.checked)
        .map(element => element.value);
    if (transType.length === 1 && description !== "" && amount !== "") {
        return {
            type: transType[0],
            description,
            amount
        };
    }
    window.alert("Form Incomplete");
    return {}
};

const clearList = () => {
    const list = document.querySelector("#list");
    const numberOfItems = list.children.length;
    if (numberOfItems > 0) {
        const clearBtn = document.querySelector("#clear");
        const shouldClear = window.confirm("Are you sure?");
        if (shouldClear) {
            list.innerHTML = "";
            clearBtn.classList.add("disabled");
        }
    }
};

const addItem = () => {
    const { type, amount, description } = getInput();
    if (type && amount && description) {
        const list = document.querySelector("#list");
        list.appendChild(createListItem(type, description, amount));
        const clearBtn = document.querySelector("#clear");
        clearBtn.classList.remove("disabled");
    }
};

document.querySelector("#add").addEventListener("click", e => {
    e.preventDefault();
    addItem();
});

document.querySelector("#clear").addEventListener("click", e => {
    e.preventDefault();
    clearList();
});
