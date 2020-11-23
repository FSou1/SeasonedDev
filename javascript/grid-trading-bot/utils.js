module.exports = {
    round: (value) => {
        return Math.round(value * 100) / 100
    },

    roundUp: (num, precision) => {
        return Math.ceil(num / precision) * precision;
    },

    roundDown: (num, precision) => {
        return Math.floor(num / precision) * precision;
    }
};