

const accNum = document.getElementById('AccNumber');
const accName = document.getElementById('newOwner');
const accBal = document.getElementById('addAm');

const btnSubmit = document.getElementById('addNewAcc');

const bankAccount = {
    accountNumber: document.getElementById('currentAcc'),
    ownerName: document.getElementById('currentOwner'),
    balance: document.getElementById('currentBl'),
};

function getBalance(){
    bankAccount.accountNumber.innerHTML = accNum.value;
    bankAccount.ownerName.innerHTML = accName.value;
    bankAccount.balance.innerHTML = accBal.value;
}

btnSubmit.addEventListener('click', getBalance);
