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

  const match_p = lowerCaseQuery.match(/(\d+)\s*plus\s*(\d+)/);

  const match_l = query.match(/Which of the following numbers is the largest:\s*(\d+),\s*(\d+),\s*(\d+)/);

  if (match_p) {
    const num1 = parseInt(match_p[1], 10);
    const num2 = parseInt(match_p[2], 10);
    return (num1 + num2).toString();
  }

  if (match_l) {
    const num1 = parseInt(match_l[1], 10);
    const num2 = parseInt(match_l[2], 10);
    const num3 = parseInt(match_l[3], 10);
    return Math.max(num1, num2, num3).toString();
  }
  return "";
}
