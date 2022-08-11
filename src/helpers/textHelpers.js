export const convertThousands = (val) => val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val
