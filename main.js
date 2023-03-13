const{BlockChain,Block}=require('./blockchain.js')



let yairCoin = new BlockChain()
yairCoin.addBlock(new Block(1,"13/03/2023",{amount:4}))
yairCoin.addBlock(new Block(2,"13/03/2023",{amount:8}))
console.log(JSON.stringify(yairCoin,null,4))
