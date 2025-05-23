export namespace License {
    export { licenseStorageKey };
    export { userClosedSyncCTAKey };
    export { userSawSyncCTAKey };
    export { themesForCTA };
    export { pageReloadedOnSettingChangeKey };
    export { initialized };
    export { licenseAlarmName };
    export { sevenDayAlarmName };
    export { checkSevenDayAlarm };
    export { processSevenDayAlarm };
    export { addSevenDayAlarmStateListener };
    export { removeSevenDayAlarmStateListener };
    export { cleanUpSevenDayAlarm };
    export const licenseTimer: undefined;
    export { licenseNotifier };
    export { MAB_CONFIG };
    export { isProd };
    export { getBypassPayload };
    export function enrollUser(): void;
    export function enrollUser(): void;
    export function get(): any;
    export function get(): any;
    export function set(newLicense: any): void;
    export function set(newLicense: any): void;
    export function setDevConfig(): void;
    export function setDevConfig(): void;
    export function initialize(callback: any): void;
    export function initialize(callback: any): void;
    export function getCurrentPopupMenuThemeCTA(): string;
    export function getCurrentPopupMenuThemeCTA(): string;
    export function update(): Promise<void>;
    export function update(): Promise<void>;
    export function processExpiredLicense(): void;
    export function processExpiredLicense(): void;
    export function ready(): Promise<any>;
    export function ready(): Promise<any>;
    export function create24HourAlarm(): Promise<void>;
    export function create24HourAlarm(): Promise<void>;
    export function updatePeriodically(): Promise<void>;
    export function updatePeriodically(): Promise<void>;
    export function getLicenseInstallationDate(): Promise<Date | undefined>;
    export function getLicenseInstallationDate(): Promise<Date | undefined>;
    export function activate(delayMs: any): void;
    export function activate(delayMs: any): void;
    export function getFormattedActiveSinceDate(): string | null;
    export function getFormattedActiveSinceDate(): string | null;
    export function isActiveLicense(): any;
    export function isActiveLicense(): any;
    export function isLicenseCodeValid(): any;
    export function isLicenseCodeValid(): any;
    export function isMyAdBlockEnrolled(): any;
    export function isMyAdBlockEnrolled(): any;
    export function shouldShowMyAdBlockEnrollment(): any;
    export function shouldShowMyAdBlockEnrollment(): any;
    export function shouldShowPremiumDcCTA(): any;
    export function shouldShowPremiumDcCTA(): any;
    export function shouldShowPremiumCTA(): boolean;
    export function shouldShowPremiumCTA(): boolean;
    export function shouldShowBlacklistCTA(newValue: any): any;
    export function shouldShowBlacklistCTA(newValue: any): any;
    export function shouldShowWhitelistCTA(newValue: any): any;
    export function shouldShowWhitelistCTA(newValue: any): any;
    export function displayPopupMenuNewCTA(): boolean;
    export function displayPopupMenuNewCTA(): boolean;
}
export namespace replacedCounts {
    export function recordOneAdReplaced(tabId: any): void;
    export function recordOneAdReplaced(tabId: any): void;
    export function get(): Promise<any>;
    export function get(): Promise<any>;
    export function getTotalAdsReplaced(tabId: any): Promise<any>;
    export function getTotalAdsReplaced(tabId: any): Promise<any>;
    export { adReplacedNotifier };
}
export const channels: Channels;
declare const licenseStorageKey: "license";
declare const userClosedSyncCTAKey: "user_closed_sync_cta";
declare const userSawSyncCTAKey: "user_saw_sync_cta";
declare const themesForCTA: string[];
declare const pageReloadedOnSettingChangeKey: "page_reloaded_on_user_settings_change";
declare const initialized: false;
declare const licenseAlarmName: "licenseAlarm";
declare const sevenDayAlarmName: "sevenDayLicenseAlarm";
declare function checkSevenDayAlarm(): void;
declare function processSevenDayAlarm(): void;
declare function addSevenDayAlarmStateListener(): void;
declare function removeSevenDayAlarmStateListener(): void;
declare function cleanUpSevenDayAlarm(): void;
declare const licenseNotifier: EventEmitter;
declare namespace MAB_CONFIG {
    const licenseURL: string;
    const syncURL: string;
    const subscribeKey: string;
    const payURL: string;
    const subscriptionURL: string;
}
declare const isProd: true;
declare function getBypassPayload(): string | null;
declare const adReplacedNotifier: EventEmitter;
import { Channels } from "./channels";
import { EventEmitter } from "../../adblockplusui/adblockpluschrome/lib/events";
export {};
