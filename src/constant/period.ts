export const constant_period:IPeriod["period"][] = ["7d", "1m", "1y", "10y", "20y"];

export interface IPeriod{
    period: '7d' | '1m' | '1y' | '10y' | '20y';
}