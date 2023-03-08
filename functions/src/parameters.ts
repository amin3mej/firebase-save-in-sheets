export type ExtensionParameters = {
GOOGLE_API_CREDENTIALS_CLIENT_EMAIL: string;
GOOGLE_API_CREDENTIALS_PRIVATE_KEY: string;
GOOGLE_SPREADSHEET_ID: string;
GOOGLE_SPREADSHEET_SHEET_ID: string;
ALLOWED_FIELDS?: string;
APP_CHECK: "yes" | "no";
};

const {
  GOOGLE_API_CREDENTIALS_CLIENT_EMAIL,
  GOOGLE_API_CREDENTIALS_PRIVATE_KEY,
  GOOGLE_SPREADSHEET_ID,
  GOOGLE_SPREADSHEET_SHEET_ID,
  ALLOWED_FIELDS,
  APP_CHECK,
} = process.env as ExtensionParameters;

export const extensionParameters: ExtensionParameters = {
  GOOGLE_API_CREDENTIALS_CLIENT_EMAIL,
  GOOGLE_API_CREDENTIALS_PRIVATE_KEY,
  GOOGLE_SPREADSHEET_ID,
  GOOGLE_SPREADSHEET_SHEET_ID,
  ALLOWED_FIELDS,
  APP_CHECK,
};
