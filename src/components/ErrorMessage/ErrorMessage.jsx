import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const ErrorMessage = ({ children }) => {
  useEffect(() => {
    // Викликаємо toast.error при відображенні компонента, використовуючи setTimeout
    const timeoutId = setTimeout(() => {
      toast.error(children, {
        duration: 2000,
      });
    }, 0);

    // Забезпечимо видалення таймауту під час очищення компонента
    return () => clearTimeout(timeoutId);
  }, [children]);

  // Повертаємо порожній елемент, оскільки сповіщення вже виведено
  return null;
};
