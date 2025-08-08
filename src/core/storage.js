export const Storage = {
  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Erro ao salvar no localStorage:', e);
    }
  },

  load(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Erro ao carregar do localStorage:', e);
      return null;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Erro ao remover do localStorage:', e);
    }
  },

  clear() {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Erro ao limpar o localStorage:', e);
    }
  }
};
