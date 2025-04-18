export const CLOSED_KEY: "closedProgrammatically";
export const COOKIE_FILTER_KEY: "cookies-premium";
export const DISTRACTIONS_KEY: "distraction-control";
export const PAGE_INFO_KEY: "pageInfo";
export function addUserIdToUrl(url: any): Promise<string>;
export function closePopup(): void;
export function navigateTo(url: any): void;
export function getTabId(): string | null | undefined;
export function returnToIndex(): void;
export function sendMessageWithNoResponse(message: any): void;
export function setupBehaviorListeners(): void;
export function splitAndTranslate(i18n: any): any;
export function translatePageTitle(): void;
export function translateWithTags(messageID: any, innerText: any, [openingTag, closingTag]: [any, any]): string;
