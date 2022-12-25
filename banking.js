document.getElementById('button-deposit').addEventListener('click',
    function () {
        const depositInput = document.getElementById('input-deposit');
        const newDeposit = depositInput.value;

        const oldDeposit = document.getElementById('old-deposit');
        const depositTotalText = oldDeposit.innerText;
        const previousDepositTotal = parseFloat(depositTotalText);
        const newDepositTotal = previousDepositTotal + parseFloat(newDeposit);


        oldDeposit.innerText = newDepositTotal;

        const balanceTotal = document.getElementById('new-balance');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        const newBalanceTotal = previousBalanceTotal + parseFloat(newDeposit);
        balanceTotal.innerText = newBalanceTotal;

        //clear depositInput
        depositInput.value = '';
    })
