import { CardWalletProps } from "@/context/types";

export const styleToast = {
  success: "bg-[#16a34a!important] border border-[#16a34a!important] text-[#fff!important]",
  error: "bg-[#dc2626!important] border border-[#dc2626!important] text-[#fff!important]",
};

export const cardsWallet: CardWalletProps[] = [
  {
    name: "Main Wallet",
    limit: "$45.500,12",
    numberCard: "444 221 224 ***",
    gradient: "bg-gradient-to-r from-[#B469FF] from-0% via-[#8555C1] via-100%",
  },
  {
    name: "Main Wallet",
    limit: "$45.500,12",
    numberCard: "444 221 224 ***",
    gradient: "bg-gradient-to-r from-[#F86893] from-0% via-[#DA1CC7] via-100%",
  },
  {
    name: "XYZ Wallet",
    limit: "$250,5",
    numberCard: "444 221 224 ***",
    gradient: "bg-gradient-to-r from-[#8DD234] from-0% via-[#2EAF4A] via-100%",
  },

  {
    name: "XYZ Wallet",
    limit: "$250,5",
    numberCard: "444 221 224 ***",
    gradient: "bg-gradient-to-r from-[#6C95FF] from-0% via-[#3D69DB] via-100%",
  },
];
