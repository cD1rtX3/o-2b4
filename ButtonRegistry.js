const ButtonRegistry = new Map();
ButtonRegistry.register = (key, value) => {
	ButtonRegistry.set(key, value);
	return key;
}

export default ButtonRegistry;
