
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
    value: /^[a-zA-Zа-яА-ЯЁё;\s-]+$/,
    message: "Please enter valid value",
  };
}
