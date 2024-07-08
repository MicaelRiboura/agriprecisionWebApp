import { Routes, Route } from 'react-router-dom'
import { Home } from './modules/overview/pages/home.page'
import { FieldsList } from './modules/field/pages/fields-list.page'
// import { AgroInputsPage } from './modules/agri-inputs/pages/agro-inputs.page'
import { HarvestHistoryPage } from './modules/field/pages/harvest-history.page'
import { Base } from './components/base'
// import { AgroInputPage } from './modules/agri-inputs/pages/agro-input-form.page'
import { FieldPage } from './modules/field/pages/field-form.page'
import { HarvestPage } from './modules/field/pages/harvest-form.page'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Base />}>
                <Route path="/" element={<Home />} />
                <Route path="/fields" element={<FieldsList />} />
                <Route path="/fields/create" element={<FieldPage />} />
                <Route path="/fields/:id" element={<FieldPage />} />
                {/* <Route path="/agro-inputs" element={<AgroInputsPage />} />
                <Route path="/agro-inputs/create" element={<AgroInputPage />} /> */}
                <Route path="/fields/:fieldId/harvest-history" element={<HarvestHistoryPage />} />
                <Route path="fields/harvest-history/create" element={<HarvestPage />} />
            </Route>
        </Routes>
    )
}