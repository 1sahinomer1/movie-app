const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<F>): void => {
    clearTimeout(timeoutId as NodeJS.Timeout);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
