import { Routes, Route } from 'react-router-dom';
import { Home } from './modules/overview/pages/home.page';
import { FieldsList } from './modules/field/pages/fields-list.page';
import { HarvestHistoryPage } from './modules/field/pages/harvest-history.page';
import { Base } from './components/base';
import { FieldPage } from './modules/field/pages/field-form.page';
import { HarvestPage } from './modules/field/pages/harvest-form.page';
import { LoginPage } from './modules/user/pages/login.page';
import { RegisterPage } from './modules/user/pages/register.page';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Base />}>
                <Route path="/" element={<Home />} />
                <Route path="/fields" element={<FieldsList />} />
                <Route path="/fields/create" element={<FieldPage />} />
                <Route path="/fields/:id" element={<FieldPage />} />
                <Route path="/fields/:fieldId/harvest-history" element={<HarvestHistoryPage />} />
                <Route path="fields/:fieldId/harvest-history/create" element={<HarvestPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}