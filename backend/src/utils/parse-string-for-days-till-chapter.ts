

export const parseStringForDaysTillChapter = (text: string) => {
  const regex = /\d+/;
  return text.match(regex); 
  // this is a magic number... TODO: If there's a case where this breaks then we need to refactor our logic
  
}