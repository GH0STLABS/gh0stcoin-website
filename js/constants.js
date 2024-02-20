export const SPL_TOKEN = {
  SOL: {
    mint: "So11111111111111111111111111111111111111112",
    decimals: 9,
    url: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
  },
  GH0ST: {
    mint: "HbxiDXQxBKMNJqDsTavQE7LVwrTR36wjV2EaYEqUw6qH",
    decimals: 9,
    url: "https://gh0stc0in.xyz/images/logo.png",
  },
  USDC: {
    mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    url: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
  },
  VICE: {
    mint: "AWeL8nCXxJm3GZkEVRqxeeT5KWT2KwDa1shgQFeBogkC",
    decimals: 9,
    url: "https://dd.dexscreener.com/ds-data/tokens/solana/AWeL8nCXxJm3GZkEVRqxeeT5KWT2KwDa1shgQFeBogkC.png",
  },
  WOO: {
    mint: "JEFMBtu3rqAeJ21XDzqL9UHr7pswMvm8ogAeTkezpktM",
    decimals: 9,
    url: "https://i.ibb.co/mNtxvyX/image.jpg",
  },
  BOZO: {
    mint: "EJPtJEDogxzDbvM8qvAsqYbLmPj5n1vQeqoAzj9Yfv3q",
    decimals: 9,
    url: "https://i.ibb.co/7j2tZYq/image-2.jpg",
  },
  SOLS: {
    mint: "2wme8EVkw8qsfSk2B3QeX4S64ac6wxHPXb3GrdckEkio",
    decimals: 9,
    url: "https://i.ibb.co/wQ5g1Ym/image.png",
  },
  ONLYFINS: {
    mint: "BeMR5AT5yhk3DSjyLNKumgjbuuyDBNTUo4LsGWHLdbSn",
    decimals: 9,
    url: "https://dd.dexscreener.com/ds-data/tokens/solana/BeMR5AT5yhk3DSjyLNKumgjbuuyDBNTUo4LsGWHLdbSn.png",
  },
  j00ce: {
    mint: "Bjc5RNFVRyn4zkBmPuZBEJJSeYGLj9GuD5X2qqi2oDCa",
    decimals: 9,
    url: "https://i.ibb.co/MPTs6js/image-1.jpg",
  },
  GEM: {
    mint: "BHnyR5iCR8kBZhF97EJ6mi8K8JCFDNg19j5zaU35RLoJ",
    decimals: 9,
    url: "https://dd.dexscreener.com/ds-data/tokens/solana/BHnyR5iCR8kBZhF97EJ6mi8K8JCFDNg19j5zaU35RLoJ.png",
  },
  LAMP: {
    mint: "GivcfFcEry199qpjScB7h2sqmCDwAc5dWnqEpLfrEueU",
    decimals: 9,
    url: "https://i.ibb.co/1nSXPbS/image-1.png",
  },
};

export const ASSHOLE_FEE = 50; // 0.5%, set to 0 to disable platform fees
export const COMMITMENT = "confirmed";
export const DEFAULT_INPUT_TOKEN_SYMBOL = "SOL";
export const DEFAULT_OUTPUT_TOKEN_SYMBOL = "GH0ST";
export const DEFAULT_SLIPPAGE = 1; // 1%
export const DOLLAR_CURRENCY_SYMBOL = "USDC"; // token to get a $ value against
export const GET_QUOTE_DELAY = 1000; // 1 second
export const JUPITER_FEES_IN_SOL = 0.003; // subtract this from MAX balance so tx won't fail
export const MAX_RETRY_TIME = 20000; // 20 seconds
export const MAX_SLIPPAGE_ALLOWED = 99.99; // 99.99%
export const REFERRAL_ACCOUNT_OUT_TOKENS = ["SOL", "USDC"]; // tokens registered on refferal program
export const REFERRAL_ACCOUNT_PUBKEY =
  "Dmqi47Z5SZkDBdDcbEAdHMPY1RfS7bgELQ3GWjg9QSQ"; // Jup Referal, leave empty string if no platform fees
export const REFETCH_TX_INTERVAL_MS = 2000; // 2 seconds
export const RPC_URL_SOLANA =
  "https://chris-zzb53r-fast-mainnet.helius-rpc.com/";
export const SWAP_LOGO_URL = "/images/icon.png";
export const SWAP_NAME = "gh0sw0p";
export const UPDATE_QUOTE_INTERVAL = 20000; // 20 seconds
export const WALLET_ADDRESS_LETTER_COUNT = 4; // abcd...efgh
