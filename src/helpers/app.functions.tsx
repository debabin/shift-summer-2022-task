export function getDate18YrsAgo() {
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
  return date18YrsAgo.toISOString().slice(0, 10);
}

export function getRuleMinLength(value: number) {
  return {
    value: value,
    message: `Length must be at least ${value} symbols`,
  };
}

export function getRuleMaxLength(value: number) {
  return {
    value: value,
    message: `Length must be less than ${value} symbols`,
  };
}

export function getRulePatternLetters() {
  return {
    value: /^[a-zA-Zа-яА-ЯЁё\s-]+$/,
    message: "Please enter valid value",
  };
}
