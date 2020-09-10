
const getTotalPayedWithInterestRate = (total = 0, interestRate = 1) => {
    const value = (total / 100) * interestRate
    return total + value
}

const getPercentageChange = (value1 = 0, value2 = 0) => {
    const value = Math.abs(value1 - value2)
    return (value / value1) * 100
}

module.exports = {
    getTotalPayedWithInterestRate,
    getPercentageChange
}