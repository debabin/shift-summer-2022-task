
export function getDate18YearsAgo() {
    const date18YearsAgo = new Date();
    date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);
    return date18YearsAgo.toISOString().slice(0, 10);
  }