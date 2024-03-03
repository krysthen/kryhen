import ReactGA from 'react-ga';

export const GA_TRACKING_ID = 'G-QKLH1Y70TR'; // Zastąp 'YOUR_TRACKING_ID' właściwym identyfikatorem śledzenia Google Analytics
declare global {
    interface Window {
        GA_INITIALIZED?: boolean;
    }
}
export const initGA = () => {
    if (!window.GA_INITIALIZED) {
        ReactGA.initialize(GA_TRACKING_ID);
        window.GA_INITIALIZED = true;
    }
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};