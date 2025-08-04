
export  const formatNumber = (num) => {
        num = parseInt(num)

        if (num >= 1e9) return Math.round(num / 1e9) + ' B'
        if (num >= 1e6) return Math.round(num / 1e6) + ' M'
        if (num >= 1e3) return Math.round(num / 1e3) + ' K'

        return num.toString()
    }
