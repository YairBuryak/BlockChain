const{BlockChain,Block}=require('./blockchain2.js')



let yairCoin = new BlockChain()
console.log('Mining Block1')
yairCoin.addBlock(new Block(1,"13/03/2023",{amount:4}))
console.log('Mining Block2')
yairCoin.addBlock(new Block(2,"13/03/2023",{amount:8}))

console.log(JSON.stringify(yairCoin,null,4))

