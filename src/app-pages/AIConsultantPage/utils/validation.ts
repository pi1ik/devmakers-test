export function validateTelegramOrPhone(input: string): {
  isValid: boolean;
  error?: string;
} {
  const trimmed = input.trim();

  // Check for telegram username (@username)
  const telegramPattern = /^@[a-zA-Z0-9_]{5,32}$/;

  // Check for phone number (Russian format +7XXXXXXXXXX)
  const phonePattern = /^\+7\d{10}$/;

  if (telegramPattern.test(trimmed)) {
    return { isValid: true };
  }

  if (phonePattern.test(trimmed)) {
    return { isValid: true };
  }

  // Provide specific error message
  if (trimmed.startsWith("@")) {
    return {
      isValid: false,
      error:
        "Имя пользователя должно содержать от 5 до 32 символов (буквы, цифры, _)",
    };
  }

  if (trimmed.startsWith("+")) {
    return {
      isValid: false,
      error: "Формат: +7 и 10 цифр (например: +79001234567)",
    };
  }

  return { isValid: false, error: "Введите @username или +79001234567" };
}
