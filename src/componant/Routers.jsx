<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Accounting from '../service/Accounting'
import Auditing from '../service/Auditing'
import BusinessConsultancyServices from '../service/BusinessConsultancyServices'
import CorporateMatters from '../service/CorporateMatters'
import FinancingServices from '../service/FinancingServices'
import IncomeTex from '../service/IncomeTex'
import IndirectTex from '../service/IndirectTex'
import NgoSocietyTrust from '../service/NgoSocietyTrust'
import RegistrationReturnServices from '../service/RegistrationReturnServices'
import Startup from '../service/Startup'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/accounting/:id' element={<Accounting />} />
                <Route path='/auditing/:id' element={<Auditing />} />
                <Route path='/businessconsultancyservices/:id' element={<BusinessConsultancyServices />} />
                <Route path='/corporatematters/:id' element={<CorporateMatters />} />
                <Route path='/financingservices/:id' element={<FinancingServices />} />
                <Route path='/incometex/:id' element={<IncomeTex />} />
                <Route path='/indirecttex/:id' element={<IndirectTex />} />
                <Route path='/ngosocietytrust/:id' element={<NgoSocietyTrust />} />
                <Route path='/registrationreturnservices/:id' element={<RegistrationReturnServices />} />
                <Route path='/startup/:id' element={<Startup />} />
            </Routes >
        </>
    )
}

export default Routers
=======
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Accounting from '../service/Accounting'
import Auditing from '../service/Auditing'
import BusinessConsultancyServices from '../service/BusinessConsultancyServices'
import CorporateMatters from '../service/CorporateMatters'
import FinancingServices from '../service/FinancingServices'
import IncomeTex from '../service/IncomeTex'
import IndirectTex from '../service/IndirectTex'
import NgoSocietyTrust from '../service/NgoSocietyTrust'
import RegistrationReturnServices from '../service/RegistrationReturnServices'
import Startup from '../service/Startup'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/accounting/:id' element={<Accounting />} />
                <Route path='/auditing/:id' element={<Auditing />} />
                <Route path='/businessconsultancyservices/:id' element={<BusinessConsultancyServices />} />
                <Route path='/corporatematters/:id' element={<CorporateMatters />} />
                <Route path='/financingservices/:id' element={<FinancingServices />} />
                <Route path='/incometex/:id' element={<IncomeTex />} />
                <Route path='/indirecttex/:id' element={<IndirectTex />} />
                <Route path='/ngosocietytrust/:id' element={<NgoSocietyTrust />} />
                <Route path='/registrationreturnservices/:id' element={<RegistrationReturnServices />} />
                <Route path='/startup/:id' element={<Startup />} />
            </Routes >
        </>
    )
}

export default Routers
>>>>>>> 99f49cc (uploads project)
