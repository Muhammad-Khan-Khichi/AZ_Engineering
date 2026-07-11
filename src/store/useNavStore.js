import { create } from 'zustand'

export const useNavStore = create((set) => ({
  // Menu state
  isOpen: false,
  
  // Toggle menu open/closed
  toggleMenu: () =>
    set((state) => ({ isOpen: !state.isOpen })),
  
  // Open menu
  openMenu: () =>
    set({ isOpen: true }),
  
  // Close menu
  closeMenu: () =>
    set({ isOpen: false }),
}))