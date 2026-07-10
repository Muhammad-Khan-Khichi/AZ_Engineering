import { create } from 'zustand'

export const useContactStore = create((set) => ({
  formData: {
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  },
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  resetForm: () =>
    set({
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: '',
      },
    }),
}))