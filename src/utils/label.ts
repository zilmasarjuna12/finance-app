export const formatCurrency = (amount: number, currency: string) => {
  if (currency === "IDR") {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  } else if (currency === "USD") {
    return `$${amount.toLocaleString("en-US")}`;
  }
  return `${amount.toLocaleString()}`;
};

export const getWalletTypeLabel = (type: string) => {
  const typeMap: Record<string, string> = {
    ovo: "OVO",
    dana: "DANA",
    gopay: "GOPAY",
    "bank-bca": "Bank BCA",
    "bank-mandiri": "Bank Mandiri",
    "bank-bri": "Bank BRI",
    "bank-cimb": "Bank CIMB",
  };

  return typeMap[type] || type;
};
