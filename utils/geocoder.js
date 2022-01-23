import NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'openstreetmap'
};

let geoCoder = NodeGeocoder(options);

export default geoCoder;
