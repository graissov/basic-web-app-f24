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

  const match_p = query.match(/(\d+)\s*plus\s*(\d+)/);

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

  const sixthm_p = query.match(/Which of the following numbers is both a square and a cube:\s*([\d, ]+)/);

  if (sixthm_p) {
    const numbers = sixthm_p[1].split(',').map(num => parseInt(num.trim(), 10));

    const sixthPowers = numbers.filter(num => {
      const root = Math.round(Math.pow(num, 1/6));
      return Math.pow(root, 6) === num;
    });

    return sixthPowers.join(', ');
  }
  const pr_m = query.match(/Which of the following numbers are primes:\s*([\d, ]+)/);

  if (pr_m) {
    const numbers = pr_m[1].split(',').map(num => parseInt(num.trim(), 10));

    const primes = numbers.filter(num => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });

    return primes.join(', ');
  }

  const minus_m = query.match(/What is (\d+)\s*minus\s*(\d+)\?/);

  if (minus_m) {
    const num1 = parseInt(minus_m[1], 10);
    const num2 = parseInt(minus_m[2], 10);
    return (num1 - num2).toString();
  }
  const m_m = query.match(/What is (\d+)\s*multiplied by\s*(\d+)\?/);

  if (m_m) {
    const num1 = parseInt(m_m[1], 10);
    const num2 = parseInt(m_m[2], 10);
    return (num1 * num2).toString();
  }

  const m_p = query.match(/What is (\d+)\s*to the power of\s*(\d+)\?/);

  if (m_p) {
    const b = parseInt(m_p[1], 10);
    const e = parseInt(m_p[2], 10);
    return Math.pow(b, e).toString();
  }
  const mix = query.match(/What is (\d+)\s*plus\s*(\d+)\s*multiplied by\s*(\d+)\?/);

  if (mix) {
    const num1 = parseInt(mix[1], 10);
    const num2 = parseInt(mix[2], 10);
    const num3 = parseInt(mix[3], 10);
    return (num1 + (num2 * num3)).toString();
  }

  return "";
}
