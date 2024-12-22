import dotenv from 'dotenv';
dotenv.config();
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

// all thanks to free currency API
const freecurrencyapi = new Freecurrencyapi('fca_live_Q7TRdFBc8bJuvI1FzYs6jyweKoaU0KdFy96IviU7');

/**
 * Convert currency between two currencies.
 * @param {string} from - The currency code to convert from (e.g., 'USD').
 * @param {string} to - The currency code to convert to (e.g., 'INR').
 * @param {number} amount - The amount to convert.
 * @returns {Promise<number>} - The converted amount.
 */
export const convertCurrency = async (from, to, amount) => {
    try {
        const { data } = await freecurrencyapi.latest({ base_currency: from, currencies: to });
        const rate = data[to];
        if (!rate) throw new Error(`Conversion rate for ${to} not found.`);
        return amount * rate;
    } catch (error) {
        console.error("Conversion Error:", error.message);
        throw error;
    }
};
