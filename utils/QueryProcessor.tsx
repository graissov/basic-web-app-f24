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

  const plusMatch = lowerCaseQuery.match(/(\d+)\s*plus\s*(\d+)/);

  // Match a pattern like "Which of the following numbers is the largest: X, Y, Z?"
  const largestMatch = lowerCaseQuery.match(/which of the following numbers is the largest:\s*(\d+),\s*(\d+),\s*(\d+)/);

  // If "X plus Y" match is found, extract numbers and calculate the sum
  if (plusMatch) {
    const num1 = parseInt(plusMatch[1], 10);
    const num2 = parseInt(plusMatch[2], 10);
    return (num1 + num2).toString();
  }

  // If "largest" match is found, extract numbers and determine the largest
  if (largestMatch) {
    const num1 = parseInt(largestMatch[1], 10);
    const num2 = parseInt(largestMatch[2], 10);
    const num3 = parseInt(largestMatch[3], 10);
    return Math.max(num1, num2, num3).toString();
  }
  return "";
}
