import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51LAWbZEgFncxAQhs9pjSlW1Qf0UkUOfYCtgqWKaExWB2fASloF8tNlhcyK9u2WhU67be1w1dvtCKY0betTRiTBBY002n4MTtDW');
  }
  return stripePromise;
};

export default getStripe;
