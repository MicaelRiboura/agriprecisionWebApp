import { Routes, Route } from 'react-router-dom'
import { Home } from './modules/overview/pages/home.page'
import { FieldsList } from './modules/field/pages/fields-list.page'
import { AgroInputsPage } from './modules/agri-inputs/pages/agro-inputs.page'
import { HarvestHistoryPage } from './modules/field/pages/harvest-history.page'
import { Base } from './components/base'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Base />}>
                <Route path="/" element={<Home />} />
                <Route path="/fields" element={<FieldsList />} />
                <Route path="/agro-inputs" element={<AgroInputsPage />} />
                <Route path="/harvest-history" element={<HarvestHistoryPage />} />
            </Route>
        </Routes>
    )
}