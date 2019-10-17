export const CooperCalculator = (distance, gender, age) => {

  const ratings = [
    'Excellent',
    'Above average',
    'Average',
    'Below average',
    'Poor'
  ];

  const cooperTable = {
    female: {
      '13-14': ['>2000', '1900-1999', '1600-1899', '1500-1599', '<1500'],
      '15-16': ['>2100', '2000-2099', '1700-1999', '1600-1699', '<1600'],
      '17-19': ['>2300', '2100-2299', '1800-2099', '1700-1799', '<1700'],
      '20-29': ['>2700', '2200-2699', '1800-2199', '1500-1799', '<1500'],
      '30-39': ['>2500', '2000-2499', '1700-1999', '1400-1699', '<1400'],
      '40-49': ['>2300', '1900-2299', '1500-1899', '1200-1499', '<1200'],
      '50+': ['>2200', '1700-2199', '1400-1699', '1100-1399', '<1100']
    },
    male: {
      '13-14': ['>2700', '2400-2699', '2200-2399', '2100-2199', '<2100'],
      '15-16': ['>2800', '2500-2799', '2300-2499', '2200-2299', '<2200'],
      '17-19': ['>3000', '2700-2999', '2500-2699', '2300-2499', '<2300'],
      '20-29': ['>2800', '2400-2799', '2200-2399', '1600-2199', '<1600'],
      '30-39': ['>2700', '2300-2699', '1900-2299', '1500-1999', '<1500'],
      '40-49': ['>2500', '2100-2499', '1700-2099', '1400-1699', '<1400'],
      '50+': ['>2400', '2000-2399', '1600-1999', '1300-1599', '<1300']
    }
  };

  const ageRangeTable = age => {
    switch (true) {
      case age >= 13 && age <= 14:
        return '13-14';
      case age >= 15 && age <= 16:
        return '15-16';
      case age >= 17 && age <= 19:
        return '17-19';
      case age >= 20 && age <= 29:
        return '20-29';
      case age >= 30 && age <= 39:
        return '30-39';
      case age >= 40 && age <= 49:
        return '40-49';
      case age >= 50:
        return '50+';
      default:
        return 'invalid range';
    }
  }

  const ageRange = ageRangeTable(parseInt(age));

  if (ageRange === 'invalid range') {
    return 'Invalid age range';
  }

  const distanceRanges = cooperTable[gender.toLowerCase()][
    ageRange
  ];

  let ratingIndex;

  distanceRanges.forEach((dRange, index) => {
    if (
      (dRange.match(/>\d*/) && distance >= parseInt(dRange.slice(1), 10)) ||
      (dRange.match(/<\d*/) && distance < parseInt(dRange.slice(1), 10))
    ) {
      ratingIndex = index;
    } else {
      const minMax = dRange.split('-');
      const min = parseInt(minMax[0], 10);
      const max = parseInt(minMax[1], 10);

      if (distance >= min && distance <= max) {
        ratingIndex = index;
      }
    }
  });
  return ratings[ratingIndex];
}

export default CooperCalculator;