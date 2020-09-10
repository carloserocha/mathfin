const { getTotalPayedWithInterestRate } = require('./payment')

const getItemsPayedWithInterestRate = (items, interestRate) => {
    let payItems = []
    for (let item of items) {
        const copy = {...item}
        const value = getTotalPayedWithInterestRate(copy.price, interestRate)

        copy.price = value

        payItems.push(copy)
    }

    return payItems
}

module.exports = {
    getItemsPayedWithInterestRate
}