const{BlockChain,Block}=require('./blockchain1.js')



let yairCoin = new BlockChain()
yairCoin.addBlock(new Block(1,"13/03/2023",{amount:4}))
yairCoin.addBlock(new Block(2,"13/03/2023",{amount:8}))
//console.log(JSON.stringify(yairCoin,null,4))
console.log('BlockChain Valid ?'+ yairCoin.isChainValid())
console.log('Changing a block...')
yairCoin.chain[1].data={amount:100}
console.log('BlockChain Valid ?'+ yairCoin.isChainValid())
yairCoin.chain[1].hash=yairCoin.chain[1].calculateHash()
console.log('BlockChain Valid ?'+ yairCoin.isChainValid())
console.log(JSON.stringify(yairCoin,null,4))

