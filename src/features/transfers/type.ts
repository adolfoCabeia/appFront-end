export type Transfer = {
  name: string;
  playerId: number;

  position: {
    label: string;
    key: string;
  };

  transferDate: string;

  fromClub: string;
  fromClubFullName: string;
  fromClubId: number;

  toClub: string;
  toClubFullName: string;
  toClubId: number;

  fee: {
    feeText: string;
    localizedFeeText: string;
    value: number;
  };

  amountEuroEstimated: number | null;

  transferType: {
    text: string;
    localizationKey: string;
  };

  contractExtension: boolean;
  onLoan: boolean;

  fromDate: string;
  toDate: string;

  marketValue: number;
};