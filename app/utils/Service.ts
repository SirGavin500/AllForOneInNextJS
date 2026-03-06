const baseURL = "https://allforoneswaggergt-eaecghg3e4djhpdg.westus3-01.azurewebsites.net/api";

export const getHello = async () => {
  const res = await fetch(`${baseURL}/HelloWorld`);
  return await res.text();
};

export const addNumbers = async (a: number, b: number) => {
  const res = await fetch(`${baseURL}/AddTwoNumbers?a=${a}&b=${b}`);
  return await res.text();
};

export const askQuestion = async (question: string) => {
  const res = await fetch(`${baseURL}/AskQuestion?question=${question}`);
  return await res.text();
};

export const madLib = async (noun: string,adj: string,verb: string) => {
  const res = await fetch(`${baseURL}/MadLib?noun=${noun}&adjective=${adj}&verb=${verb}`);
  return await res.text();
};

export const oddOrEven = async (num: any) => {
  const res = await fetch(`${baseURL}/OddOrEven?number=${num}`);
  return await res.text();
};

export const reverseAlpha = async (input: any) => {
  const res = await fetch(`${baseURL}/ReverseItAlpha?input=${input}`);
  return await res.text();
};

export const reverseNumber = async (input: any) => {
  const res = await fetch(`${baseURL}/ReverseItNumber?input=${input}`);
  return await res.text();
};

export const magic8 = async (question: any) => {
  const res = await fetch(`${baseURL}/Magic8Ball?question=${question}`);
  return await res.text();
};

export const restaurantPicker = async (category: string) => {
  const res = await fetch(`https://allforoneswaggergt-eaecghg3e4djhpdg.westus3-01.azurewebsites.net/Chinese/Mexican/Italian/RestaurantPicker?category=${category}`);
  return await res.text();
};

export const greaterOrLess = async (a: any,b: any) => {
  const res = await fetch(`${baseURL}/GreaterOrLess?number1=${a}&number2=${b}`);
  return await res.text();
};
export const guessEasy = async (num:number) => {
const res = await fetch(`${baseURL}/GuessIt/easy?guess=${num}`)
return await res.text()
};

export const guessMedium = async (num:number) => {
const res = await fetch(`${baseURL}/GuessIt/medium?guess=${num}`)
return await res.text()
};

export const guessHard = async (num:number) => {
const res = await fetch(`${baseURL}/GuessIt/hard?guess=${num}`)
return await res.text()
};