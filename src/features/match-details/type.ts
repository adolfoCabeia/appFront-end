export type MatchDetail = {
  matchId: string;
  matchName: string;
  matchRound: string;

  teamColors: {
    darkMode: {
      home: string;
      away: string;
    };
    lightMode: {
      home: string;
      away: string;
    };
  };

  leagueId: number;
  leagueName: string;
  leagueRoundName: string;

  countryCode: string;

  homeTeam: {
    name: string;
    id: number;
  };

  awayTeam: {
    name: string;
    id: number;
  };

  matchTimeUTC: string;
  matchTimeUTCDate: string;

  started: boolean;
  finished: boolean;

  gender: string;
};