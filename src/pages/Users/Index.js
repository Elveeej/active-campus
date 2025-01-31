import { useAppState } from "../../contexts/AppContext";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

import Input from "../../components/Actions/Input";
import Button from "../../components/Actions/Button";
import Dropdown from "../../components/Actions/Dropdown";
import UserRoleList from "./components/UserRoleList";
import { useState } from "react";

const Index = () => {
  const { state } = useAppState();
  const [newEmail, setNewEmail] = useState();
  const [newRole, setNewRole] = useState();
  const [editEmail, setEditEmail] = useState();
  const [editRole, setEditRole] = useState();

  // ! get from state
  const roles = [
    { id: 0, name: 'Eier' },
    { id: 1, name: 'Administrator' },
    { id: 2, name: 'Medlem' }
  ];

  // ! useEffect() - firestore, state
  const roleList = [
    {
      role: 'Eier', users: [
        { name: 'Brukerens navn', email: 'bruker99@epost.no' },
      ],
    },
    {
      role: 'Administrator', users: [
        { name: 'Brukerens navn', email: 'bruker0@epost.no' },
      ],
    }, {
      role: 'Medlem', users: [
        { name: 'Brukerens navn', email: 'bruker1@epost.no' },
        { name: 'Brukerens navn', email: 'bruker2@epost.no' },
        { name: 'Brukerens navn', email: 'bruker3@epost.no' },
        { name: 'Brukerens navn', email: 'bruker4@epost.no' },
      ]
    }
  ];

  const onEditClick = (email, role) => {
    setEditEmail(email);
    setEditRole(roles.find(r => { return r.name === role; }).id); // ! find from state
  };

  if (state.organizations.length === 0) {
    return (
      <div>
        <h1 className="font-bold text-2xl mb-5">Bruker roller</h1>
        <div>
          <p className="text-xl text-placeholder">Ingen bruker roller tilgjengelig.</p>
          <p className="text-xl text-placeholder">Bli invitert eller opprett en organisasjon <Link to='/organizations/create' className='text-primary'>her</Link>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-14">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">Bruker roller</h1>

        <div>
          <UserRoleList onClick={onEditClick} roleList={roleList} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 mb-10">
          <h1 className="font-bold text-2xl">Legg til bruker</h1>

          <div>
            <label>Epost</label>
            <Input placeholder='brukers@epost.no' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
          </div>
          <div>
            <label>Rolle</label>
            <Dropdown options={roles} value={newRole} onChange={(e) => setNewRole(e.target.value)} />
          </div>

          <Button>Legg til</Button>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Endre bruker rolle</h1>

          <div className="flex flex-col gap-5">
            <div>
              <label>Epost</label>
              <Input placeholder='brukers@epost.no' value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
            </div>
            <div>
              <label>Rolle</label>
              <Dropdown options={roles} value={editRole} onChange={(e) => setEditRole(e.target.value)} />
            </div>

            <Button>Oppdater</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;