import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import FormContact from './FormContact/FormContact';
import FilterContacts from './FilterContacts/FilterContacts';
import ListContacts from './ListContacts/ListContacts';
import { TitlePrimary, TitleSecondary, Text } from './App.styled';
import Box from './Box/Box';

const CONTACTS_KEY = 'contacts';
export function App() {
  const localData = JSON.parse(localStorage.getItem(CONTACTS_KEY));

  const [contacts, setContacts] = useState(() => {
    return localData ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    const id = nanoid();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }
    const newContacts = { id: id, name: name, number: number };
    setContacts(contacts => [...contacts, newContacts]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const onFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = onFilterContacts();

  const onDelete = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const list = contacts.length;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      as="main"
    >
      <Box
        m={7}
        p={6}
        border="none"
        borderRadius="normal"
        boxShadow="shadows"
        position="relative"
        as="section"
      >
        <TitlePrimary>PHONEBOOK</TitlePrimary>
        <Box p={4} border="normal" borderRadius="normal">
          <FormContact onSubmit={handleSubmit} />
        </Box>

        <TitleSecondary>Contacts</TitleSecondary>
        <FilterContacts value={filter} onChange={changeFilter} />
        {list ? (
          <ListContacts contacts={filteredContacts} onDelete={onDelete} />
        ) : (
          <Text>There’s nothing here yet...</Text>
        )}
      </Box>
    </Box>
  );
}
