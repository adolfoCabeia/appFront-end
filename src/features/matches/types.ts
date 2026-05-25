export type Match = {
  id: number;
  leagueId: number;
  time: string;

  home: {
    id: number;
    score: number;
    name: string;
    longName: string;
  };

  away: {
    id: number;
    score: number;
    name: string;
    longName: string;
  };

  statusId: number;
  tournamentStage: string;

  status: {
    utcTime: string;
    started: boolean;
    cancelled: boolean;
    finished: boolean;
    aggregatedStr: string;
  };

  timeTS: number;
};