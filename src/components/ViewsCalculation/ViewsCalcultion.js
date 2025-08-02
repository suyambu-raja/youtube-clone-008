
export  const formatNumber = (num) => {
        num = parseInt(num)

        if (num >= 1e9) return Math.round(num / 1e9) + ' B'
        if (num >= 1e6) return Math.round(num / 1e6) + ' M'
        if (num >= 1e3) return Math.round(num / 1e3) + ' K'

        return num.toString()
    }


export function convertYouTubeDuration(isoDuration) {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);

  if (hours > 0) return `${hours} hr ${minutes} min`;
  if (minutes > 0) return `${minutes} min`;
  return `${seconds} sec`;
}

