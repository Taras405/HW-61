const user = {
    mood: '',
    hobby: '',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const [key, values] of Object.entries(user)) {
    console.log(`${key}: ${values}`);
}



const countProps = obj => Object.entries(obj).length;
console.log(countProps(user));



const workers = {
    John: 12,
    Baras: 16,
    Barabashka: 8,
};

const findBestEmployee = function (employees) {
    let bestName = '';
    let maxTask = 0;
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTask) {
            maxTask = tasks;
            bestName = name;
        }
    }

    return bestName;
};

const sortEmployeesByTask = function (employees) {
    const entries = Object.entries(employees);
    entries.sort((a, b) => a[1] - b[1]);

    return entries.map(([name, tasks]) => `${name}: ${tasks}`);
};

console.log(findBestEmployee(workers));
console.log(sortEmployeesByTask(workers));



const countTotalSalary = function (employees) {
    let total = 0;

    const values = Object.values(employees);
    for (const value of values) {
        total += value;
    }

    return total;
};

console.log(countTotalSalary(workers));



const users = [
    { name: 'John', age: 32 },
    { name: 'Baras', age: 30 },
    { name: 'Barabashka', age: 25 }
];

const [
    { name, age }
] = users;

const getAllPropValues = function (arr, prop) {
    const rezult = [];

    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            rezult.push(obj[prop]);
        }
    }
    return rezult;
};

console.log(getAllPropValues(users, 'name'));



const products = [
    { name: 'Phone', price: 240, quality: 144 },
    { name: 'Laptop', price: 1024, quality: 192 },
    { name: 'PС', price: 988, quality: 232 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    let total = 0;

    for (const { name, price, quality } of allProdcuts) {
        if (name === productName) {
            total = price * quality;
        }
    }
    return total;
};

console.log(calculateTotalPrice(products, 'Laptop'));




const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],
    _nextId: 1,

    createTransaction(amount, type) {
        return {
            id: this._nextId++,
            type,
            amount,
        };
    },

    deposit(amount) {
        if (amount <= 0) {
            console.log('Сума поповнення має бути вище 0');
            return;
        }
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
    },

    withdraw(amount) {
        if (amount <= 0) {
            console.log('Сума поповнення має бути вище 0');
            return;
        }
        if (amount > this.balance) {
            console.log('Недостатньо коштів на рахунку');
            return;
        }
        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        return this.transactions.find(tx => tx.id === id) || null;
    },

    getTransactionTotal(type) {
        return this.transactions
            .filter(tx => tx.type === type)
            .reduce((sum, tx) => sum + tx.amount, 0);
    },
};

account.deposit(100);
account.withdraw(50);
account.deposit(500);
console.log('Баланс:', account.getBalance());
console.log('Усі транзакції:', account.transactions);
console.log('Деталі tx id=2:', account.getTransactionDetails(2));
console.log('Всого вкладень:', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Всого знято:', account.getTransactionTotal(Transaction.WITHDRAW));