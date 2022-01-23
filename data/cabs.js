const cabs = [
  {
    id: 'auto',
    displayName: 'Auto',
    canRideNow: true,
    cabDetails: {
      cabType: 'auto',
      cabNumber: 'KA01SJ0009',
      cabModel: 'Bajaj',
      driverName: 'Mohit',
      driverNumber: '123456789'
    },
    eta: {
      value: 1,
      unit: 'min'
    },
    location: {
      type: 'Point',
      coordinates: [17.40008705, 78.56017484373662]
    }
  },
  {
    id: 'mini',
    displayName: 'Mini',
    canRideNow: false,
    cabDetails: {
      cabType: 'mini',
      cabNumber: 'KA01SJ0009',
      cabModel: 'Bajaj',
      driverName: 'Mohit',
      driverNumber: '123456789'
    },
    eta: {
      value: 6,
      unit: 'min'
    },
    location: {
      type: 'Point',
      coordinates: [17.4528558, 78.6782985]
    }
  },
  {
    id: 'bike',
    displayName: 'Bike',
    canRideNow: true,
    cabDetails: {
      cabType: 'bike',
      cabNumber: 'KA01SJ0009',
      cabModel: 'Hero',
      driverName: 'Shyam',
      driverNumber: '123456789'
    },
    eta: {
      value: -1,
      unit: 'min'
    },
    location: {
      type: 'Point',
      coordinates: [17.4463071, 78.6679405]
    }
  },
  {
    id: 'micro',
    displayName: 'Micro',
    canRideNow: false,
    cabDetails: {
      cabType: 'micro',
      cabNumber: 'KA01SJ0009',
      cabModel: 'Hundai',
      driverName: 'Ron',
      driverNumber: '123456789'
    },
    eta: {
      value: 5,
      unit: 'min'
    },
    location: {
      type: 'Point',
      coordinates: [17.4414096, 78.6691398]
    }
  },
  {
    id: 'prime_play',
    displayName: 'Prime Play',
    canRideNow: true,
    cabDetails: {
      cabType: 'prime',
      cabNumber: 'KA01SJ0009',
      cabModel: 'Honda',
      driverName: 'Mohit',
      driverNumber: '123456789'
    },
    eta: {
      value: -1,
      unit: 'min'
    },
    location: {
      type: 'Point',
      coordinates: [17.4532566, 78.678525]
    }
  },
  {
    id: 'prime_suv',
    displayName: 'Prime SUV',
    canRideNow: false,
    cabDetails: {
      cabType: 'prime',
      cabNumber: 'KA01SJ0009',
      cabModel: 'Ford',
      driverName: 'Mohit',
      driverNumber: '123456789'
    },
    eta: {
      value: 5,
      unit: 'min'
    },
    location: {
      type: 'Point',
      coordinates: [17.39162065, 78.560044621]
    }
  },
  {
    id: 'prime_sedan',
    displayName: 'Prime Sedan',
    canRideNow: true,
    cabDetails: {
      cabType: 'sedan',
      cabNumber: 'KA01SJ0009',
      cabModel: 'Toyota',
      driverName: 'Mohit',
      driverNumber: '123456789'
    },
    eta: {
      value: -1,
      unit: 'min'
    },
    location: {
      type: 'Point',
      coordinates: [17.3889088, 78.55401744]
    }
  }
];

export default cabs;
