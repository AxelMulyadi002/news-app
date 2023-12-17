import { create } from 'zustand';

const useStore = create((set) => ({
	data: null,
	index: null,
	setData: (data) => set({ data: data }),
	setIndex: (data) => set({ index: data }),
}));

export default useStore;
