import { User } from './models/User';

const user = new User({id: 1});

user.on('change', () => {
  console.log('I was Changed');
});

user.trigger('change');