import {AsyncStorage} from 'react-native';

export default class storage {
  static clear() {
    return AsyncStorage.clear();
  }
  static get(key, defaultValue = null) {
    return AsyncStorage.getItem(key).then(value =>
      value !== null ? JSON.parse(value) : defaultValue,
    );
  }

  static async set(key, value) {
    try {
      return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(console.error);
    }
  }

  static remove(key) {
    return AsyncStorage.removeItem(key);
  }

  static multiGet(...keys) {
    return AsyncStorage.multiGet([...keys]).then(stores => {
      const data = {};
      stores.forEach((result, i, store) => {
        data[store[i][0]] = JSON.parse(store[i][1]);
      });
      return data;
    });
  }

  static multiRemove(...keys) {
    return AsyncStorage.multiRemove([...keys]);
  }
}
