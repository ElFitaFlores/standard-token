var BN = require('ethereumjs-util').BN
var StandardToken = artifacts.require('StandardToken')

contract('StandardToken',(accounts) => {
		it('should have a total supply of 10000',async() => {
			let standardToken = await StandardToken.deployed()
			let totalSupply = await standardToken.totalSupply.call()

			assert(totalSupply.eq(new BN(10000)),`wrong supply, supply is ${totalSupply}`)
		})

		it('should transfer 100 to another account',async() => {
			let standardToken = await StandardToken.deployed()
			let transferRes = await standardToken.transfer(
					accounts[1],
					100,
					{from: accounts[0]}
				)

			assert(transferRes, 'transfer failed')
			let newBalance = await standardToken.balanceOf(accounts[1])
			assert(newBalance.eq(new BN(100)),
					`balance is ${newBalance}, should be 100`)
		})

		it('should transfer between accounts',async() => {
			let standardToken = await StandardToken.deployed()
			let approveRes = await standardToken.approve(accounts[0],500)
			let transferFromRes = await standardToken.transferFrom(accounts[0],accounts[2],100,{from: accounts[0]})

			assert(approveRes,'approve failed')
			assert(transferFromRes,'transfer from failed')
			let newBalance = await standardToken.balanceOf(accounts[2])
			assert(newBalance.eq(new BN(100)),
					`balance is ${newBalance}, should be 100`)
		})
	}
)
