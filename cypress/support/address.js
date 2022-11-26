import {faker} from '@faker-js/faker';

export const address = {
    country: faker.address.country(),
    name: faker.name.fullName(),
    number: faker.phone.number('!######'),
    code: faker.address.zipCode('####'),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state()
}
