interface PersistentStorage {
  getUsername(): string | null;
  setUsername(value: string): void;
}

class LocalStorageHandler implements PersistentStorage {
  getUsername() {
    const item = localStorage.getItem('username');

    if (item === null || item === 'null' || item === 'undefined') return null;
    return item;
  }
  setUsername(value: string | null) {
    if (value === null) {
      localStorage.removeItem('username');
    } else {
      localStorage.setItem('username', value.toString());
    }
  }
}

export default LocalStorageHandler;
