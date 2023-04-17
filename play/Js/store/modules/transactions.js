import STORE_HELPER from '../store.js';

class TRANSACTION_HELPER extends STORE_HELPER
{
    constructor({ network }) 
	{
		super({ name: 'DB_User' });
		this.network = network;
		this.keys = 
		[
			'transaction-info',
		];
	}

	Set(user, key, value) 
	{
		// _user = _user.toLowerCase().trim();
		this.require(this.validate(key, this.keys), `[Invalid Key]:: ${key}`);
        this.set(`${this.network}.${key}-${user}`, value);
    }

	Get(user, key) 
	{
		// _user = _user.toLowerCase().trim();
		this.require(this.validate(key, this.keys), `[Invalid Key]:: ${key}`);
        return this.get(`${this.network}.${key}-${user}`);
    }
}
export default TRANSACTION_HELPER;