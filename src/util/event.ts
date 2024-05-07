export const handleKeyDown = (keyName: string, func: () => void) => (e: React.KeyboardEvent) => {
  if (e.key === keyName) {
    func();
  }
};
