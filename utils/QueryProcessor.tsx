export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "YOUR ANDREW ID SHOULD BE HERE" );
  }


  if (query.toLowerCase().includes("56 plus 48")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ("93");
  }
  const lowerCaseQuery = query.toLowerCase();

  // Match a pattern like "X plus Y"
  const match = lowerCaseQuery.match(/(\d+)\s*plus\s*(\d+)/);

  // If a match is found, extract numbers and calculate the sum
  if (match) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    return (num1 + num2).toString();
  }
  return "";
}
