A simple NPM package for currency conversion created by Prashant Ghadiali. This package is created for learning purposes and is **not recommended for production use**.

## Installation

Install the package using npm:
```bash
npm install prashant-currency-converter
```

## Import

To use the package, import the `convertCurrency` function:
```javascript
import { convertCurrency } from 'prashant-currency-converter';
```

## Usage

### Example

```javascript
import { convertCurrency } from 'prashant-currency-converter';

convertCurrency('USD', 'INR', 4)
    .then(result => console.log(`Converted Amount: ₹${result.toFixed(2)}`))
    .catch(error => console.error('Conversion Error:', error.message));
```

### Parameters
- **`from`**: The currency code to convert from (e.g., `USD`).
- **`to`**: The currency code to convert to (e.g., `INR`).
- **`amount`**: The amount to convert.

### Returns
A `Promise` that resolves to the converted amount as a `number`.

### Example Output
```plaintext
Converted Amount: ₹330.92
```

## Environment Setup

This package requires an API key from [Freecurrencyapi](https://freecurrencyapi.com/). Create a `.env` file in your project root and add your API key:

```plaintext
PRASHANT_API_KEY=your_api_key_here
```

## Notes
- Ensure your `.env` file is properly set up and contains a valid API key.
- This package relies on the Freecurrencyapi service. Network issues or API restrictions may affect its functionality.

## Limitations
- This package is for educational purposes only and may not handle all edge cases.
- Not suitable for high-accuracy financial calculations or production systems.

## License

MIT License

