const expect  = require('chai').expect
const mathfin = require('../index')

describe('Math Payment', () => {
    describe('Payment', () => {
        it('Expected interest between 100 and 110 is', (done) => {
            const interestRate = mathfin.payment.getPercentageChange(100, 110)
            expect(interestRate).to.equal(10)
            done()
        })
        it('Expected total payment is 110 with 10% of interest rate is', (done) => {
            const paymentValue = mathfin.payment.getTotalPayedWithInterestRate(110, 10)
            expect(paymentValue).to.equal(121)
            done()
        })
    })
    describe('Items', () => {
        it('Expected payment itens with 20 percent of interest rate is', (done) => {
            const items = [
                {
                    sku: 1,
                    price: 15
                },
                {
                    sku: 2,
                    price: 20
                }
            ]
            const itemsWithApplyInterest = mathfin.items.getItemsPayedWithInterestRate(items, 20)
            const pricesWithApplyInterest = itemsWithApplyInterest.map(item => item.price)

            expect(pricesWithApplyInterest).to.eql([18, 24])

            done()
        })
    })
})
