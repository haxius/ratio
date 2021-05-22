import stringToSpans from "./stringToSpans";

interface ICurrency {
  split?: boolean;
  locale?: string;
  currency?: string;
}

const currency = (
  amount: number,
  { split, locale = "en-US", currency = "USD" }: ICurrency = {}
): string => {
  let result: string = amount.toLocaleString(locale, {
    style: "currency",
    currency,
  });

  return split ? stringToSpans(result) : result;
};

export default currency;
