import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
    Admin,
    CustomRoutes,
    Resource,
    localStorageStore,
    useStore,
    StoreContextProvider,
} from 'react-admin';
import { Route } from 'react-router';

import authProvider from './authProvider';
import categories from './categories';
import { Dashboard } from './dashboard';
import dataProviderFactory from './dataProvider';
import dataProvider from './dataProvider/customDataProvider'
import englishMessages from './i18n/en';
import invoices from './invoices';
import { Layout, Login } from './layout';
import orders from './orders';
import products from './products';
import reviews from './reviews';
import Segments from './segments/Segments';
import visitors from './visitors';
import courses from './courses';
import users from './users';
import enrolls from './enrolls';
import coupons from './coupons';
import recordings from './recordings';
import { themes, ThemeName } from './themes/themes';
import inquires from './inquires';

const i18nProvider = polyglotI18nProvider(
    locale => {
        if (locale === 'fr') {
            return import('./i18n/fr').then(messages => messages.default);
        }

        // Always fallback on english
        return englishMessages;
    },
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
    ]
);
const store = localStorageStore(undefined, 'ECommerce');

const App = () => {
    const [themeName] = useStore<ThemeName>('themeName', 'soft');
    const lightTheme = themes.find(theme => theme.name === themeName)?.light;
    const darkTheme = themes.find(theme => theme.name === themeName)?.dark;
    return (
        <Admin
            title=""
            dataProvider={dataProvider}
            store={store}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            defaultTheme="light"
        >
            <CustomRoutes>
                <Route path="/segments" element={<Segments />} />
            </CustomRoutes>
            {/* <Resource name="customers" {...visitors} /> */}
            {/* <Resource
                name="commands"
                {...orders}
                options={{ label: 'Orders' }}
            /> */}
            <Resource name="invoices" {...invoices} />
            <Resource name="products" {...products} />
            <Resource name="categories" {...categories} />
            <Resource name="reviews" {...reviews} />
            <Resource name="courses" {...courses} />
            <Resource name="users" {...users} />
            <Resource name="enrolls" {...enrolls} />
            <Resource name="coupons" {...coupons} />
            <Resource name="inquires" {...inquires} />
            <Resource name="recordings" {...recordings} />
        </Admin>
    );
};

const AppWrapper = () => (
    <StoreContextProvider value={store}>
        <App />
    </StoreContextProvider>
);

export default AppWrapper;
