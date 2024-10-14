import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./context/ScrollTop";
import Header from "./components/head/header/Header";
import Profile from "./pages/auth/profile/Profile";
import Footer from "./components/footer/Footer";
import Affiliate from "./pages/affiliate/Affiliate";
import Login from "./pages/auth/login/Login";
import FlightResult from "./pages/flight/flight_result/FlightResult";
import TripInfo from "./pages/flight/flight_result/trip_info/TripInfo";
import FlightBooking from "./pages/flight/flight_booking/FlightBooking";
import HotelBooking from "./pages/hotel/hotel_booking/HotelBooking";
import Visa from "./pages/visa/Visa";
import OneWayResult from "./pages/flight/flight_result/one_result/OneWayResult";
import MultiCityResult from "./pages/flight/flight_result/multicity_result/MultiCityResult";
import FlightCustomization from "./pages/flight/flight_customization/FlightCustomization";
import FlightOverview from "./pages/flight/flight_overview/FlightOverview";
import FlightSuccess from "./pages/flight/flight_success_page/FlightSuccess";
import HotelResult from "./pages/hotel/hotel_result/HotelResult";
import PropertyDetail from "./pages/hotel/property_detail_page/PropertyDetail";
import GuestInfo from "./pages/hotel/gues_info/GuestInfo";
import HotelCustomization from "./pages/hotel/hotel_customization/HotelCustomization";
import EditGuest from "./pages/hotel/edit_guest/EditGuest";
import HotelOverview from "./pages/hotel/hotel_overview/HotelOverview";
import HotelSuccess from "./pages/hotel/hotel_success/HotelSuccess";
import Taxi from "./pages/taxi/Taxi";
import TaxiResult from "./pages/taxi/taxi_result/TaxiResult";
import TaxiDetail from "./pages/taxi/taxi_detail/TaxiDetail";
import TaxiCustomization from "./pages/taxi/taxi_customization/TaxiCustomization";
import TaxiEdit from "./pages/taxi/taxi_edit/TaxiEdit";
import TaxiOverview from "./pages/taxi/taxi_overview/TaxiOverview";
import TaxiSuccess from "./pages/taxi/taxi_success/TaxiSuccess";
import TaxiDropOffResult from "./pages/taxi/taxi_result/dropoff_airport/TaxiDropOffResult";
import TaxiDropOffDetail from "./pages/taxi/taxi_detail/TaxiDropOffDetail";
import DropOffCustomization from "./pages/taxi/taxi_customization/DropOffCustomization";
import DropOffEdit from "./pages/taxi/taxi_edit/DropOffEdit";
import DropOffOverview from "./pages/taxi/taxi_overview/DropOffOverview";
import DropOffSuccess from "./pages/taxi/taxi_success/DropOffSuccess";
import VissaSuccess from "./pages/visa/visa_success/VissaSuccess";
import VisaOverview from "./pages/visa/visa_overview/VisaOverview";
import VisaEdit from "./pages/visa/visa_edit/VisaEdit";
import HomePage from "./pages/home/HomePage";
import DubaiHoliday from "./pages/flight/dubai_holiday/DubaiHoliday";
import TourPackages from "./pages/tour-packages/TourPackages";
import TravelRequirement from "./pages/travel-requirement/TravelRequirement";
import HideNavbar from "./components/hidenavbar/HideNavbar";
import Register from "./pages/auth/register/Register";
import PasswordReset from "./pages/auth/password_reset/PasswordReset";
import Contact from "./pages/contact/Contact";
import MuliticityTripInfo from "./pages/flight/flight_result/trip_info/muliticity_trip_info/MuliticityTripInfo";
import MulticityCustomization from "./pages/flight/flight_customization/multicity_customization/MulticityCustomization";
import MulticityEdit from "./pages/flight/flight_edit/multicity_edit/MulticityEdit";
import MulticityOverview from "./pages/flight/flight_overview/multi_Overview/MulticityOverview";
import MulticitySuccess from "./pages/flight/flight_success_page/muticity_sucess/MulticitySuccess";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          {/*hide header for login page */}
          <HideNavbar>
            <Header />
          </HideNavbar>{" "}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<PasswordReset />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/contact" element={<Contact />} />

            {/* Flight Routes */}
            <Route path="/flight-booking" element={<FlightBooking />} />
            <Route path="/flight-result" element={<FlightResult />} />
            <Route path="/oneway-result" element={<OneWayResult />} />
            <Route path="/multi-city-result" element={<MultiCityResult />} />
            <Route
              path="/trip-info/:flightResultIndex"
              element={<TripInfo />}
            />
            <Route
              path="/multicity-trip-info/:multiCityFlightResultIndex"
              element={<MuliticityTripInfo />}
            />
            <Route
              path="/flight-customization/:flightResultIndex"
              element={<FlightCustomization />}
            />
            <Route
              path="/multicity-customization/:multiCityFlightResultIndex"
              element={<MulticityCustomization />}
            />
            <Route path="/multicity-edit" element={<MulticityEdit />} />
            <Route path="/overview-payment" element={<FlightOverview />} />
            <Route path="/multicity-overview" element={<MulticityOverview />} />
            <Route path="/flight-success" element={<FlightSuccess />} />
            <Route path="/multicity-success" element={<MulticitySuccess />} />

            {/* Hotel Routes */}
            <Route path="/hotel-reservation" element={<HotelBooking />} />
            <Route path="/hotel-result" element={<HotelResult />} />
            <Route path="/property-detail" element={<PropertyDetail />} />
            <Route path="/guest-info" element={<GuestInfo />} />
            <Route
              path="/hotel-customization"
              element={<HotelCustomization />}
            />
            <Route path="/edit-guest-info" element={<EditGuest />} />
            <Route path="/hotel-overview" element={<HotelOverview />} />
            <Route path="/hotel-success" element={<HotelSuccess />} />
            {/* Taxi Routes */}
            <Route path="/taxi-booking" element={<Taxi />} />
            <Route path="/taxi-result" element={<TaxiResult />} />
            <Route path="/taxi-detail" element={<TaxiDetail />} />
            <Route path="/taxi-customization" element={<TaxiCustomization />} />
            <Route path="/edit-taxi-info" element={<TaxiEdit />} />
            <Route path="/taxi-overview" element={<TaxiOverview />} />
            <Route path="/taxi-success" element={<TaxiSuccess />} />
            <Route path="/drop-off-result" element={<TaxiDropOffResult />} />
            <Route path="/drop-off-detail" element={<TaxiDropOffDetail />} />
            <Route
              path="/dropoff-customize"
              element={<DropOffCustomization />}
            />
            <Route path="/dropoff-edit" element={<DropOffEdit />} />
            <Route path="/dropoff-overview" element={<DropOffOverview />} />
            <Route path="/dropoff-success" element={<DropOffSuccess />} />
            {/* Visa Routes */}
            <Route path="/visa" element={<Visa />} />
            <Route path="/visa-overview" element={<VisaOverview />} />
            <Route path="/edit-visa" element={<VisaEdit />} />
            <Route path="/visa-success" element={<VissaSuccess />} />

            {/* Other routes */}
            <Route path="/dubai-holiday" element={<DubaiHoliday />} />
            <Route path="/tour-packages" element={<TourPackages />} />
            <Route
              path="/travel-requirements"
              element={<TravelRequirement />}
            />
          </Routes>
          {/*hide header for login page */}
          <HideNavbar>
            <Footer />
          </HideNavbar>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
