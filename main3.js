const{BlockChain,Block,Transactions}=require('./blockchain3.js')



let yairCoin = new BlockChain()
yairCoin.createTransaction(new Transactions('address1','Yair', 100 ))
yairCoin.createTransaction(new Transactions('address2','address1', 50 ))
console.log('Mining Block1')





console.log('Mining Block1')
yairCoin.minePendingTransaction('Yair')
console.log('\n Balance of Yair ',yairCoin.getBalanceOfAddress('Yair'))

//console.log(JSON.stringify(yairCoin,null,4))

