import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import TheLayout from './TheLayout';
import ParticipantEvent from 'pages/Participant/Event';
import ParticipantEventDiscussion from 'pages/Participant/Discussion';
import ParticipantEvents from 'pages/Participant/Events';
import ParticipantHistory from 'pages/Participant/History';
import ParticipantExplore from 'pages/Participant/Explore';
import Organizations from 'pages/Organization/Index';
import CreateOrganization from 'pages/Organization/Create/Index';
import OrganizationEvents from 'pages/Organization/Events/Index';
import OrganizationEvent from 'pages/Organization/Events/Event/Index';
import QRScanner from "pages/Organization/Events/Event/QRScanner";
import CreateEvent from 'pages/Organization/Events/Create/Index';
import Users from 'pages/Users/Index';
import Feedback from 'pages/Feedback/Index';
import NotFound from 'pages/Errors/NotFound';

const TheDashboard = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route index element={<Navigate to='/eventss' />} />

      <Route exact path='/' element={<TheLayout />}>
        <Route exact path='/events' element={<ParticipantEvents />} />
        <Route exact path='/events/history' element={<ParticipantHistory />} />
        <Route exact path='/events/explore' element={<ParticipantExplore />} />
        <Route exact path='/events/:id' element={<ParticipantEvent />} />
        <Route exact path='/events/:id/discussion' element={<ParticipantEventDiscussion />} />

        <Route exact path='/organizations' element={<Organizations />} />
        <Route exact path='/organizations/create' element={<CreateOrganization />} />
        <Route exact path='/organizations/:name/events' element={<OrganizationEvents />} />
        <Route exact path='/organizations/:name/events/create' element={<CreateEvent />} />
        <Route exact path='/organizations/:name/events/:id' element={<OrganizationEvent />} />
        <Route exact path='/organizations/:name/events/:id/scanner' element={<QRScanner />} />

        <Route exact path='/users' element={<Users />} />
        <Route exact path='/feedback' element={<Feedback />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default TheDashboard;