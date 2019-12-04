import faker from "faker";

export interface ConsumerProfileData {
    email_address?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    phone_type?: string;
    street1?: string;
    street2?: string;
    street3?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
    member_id?: string;
    referrer_id?: string;
    is_premier?: boolean; // Only for United, flags a user as a United Premier member
    msr_id?: number;
    uuid?: string;
    password?: string;
  }

export const fakeConsumerProfile = (): ConsumerProfileData => {
  return {
    first_name: faker.name.lastName(),
    last_name: faker.name.firstName(),
    phone_number: "310338" + faker.phone.phoneNumber("####"),
    email_address: faker.internet.email(),
    street1: faker.address.streetAddress(),
    postal_code: "90401",
    city: faker.address.city(),
    state: faker.address.state(),
    password: "password1",
    member_id: Math.floor(Math.random() * 9999999).toString(),
  };
};

