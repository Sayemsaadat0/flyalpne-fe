export const splitSentence = (sentence: string): string[] => {
  return sentence.replace(/,/g, '').split(/\s+/);
};
