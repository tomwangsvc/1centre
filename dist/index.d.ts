export declare enum Channel {
    sales = "sales",
    website = "website",
    qr = "qr",
    all = "all"
}
interface Application {
    id: string;
    timestamp: string;
    channel: string;
}
export declare function calcAvgNumber(channel: Channel, applications: Application[]): number;
export {};
