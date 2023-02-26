import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import FormContact from './FormContact/FormContact';
import FilterContacts from './FilterContacts/FilterContacts';
import ListContacts from './ListContacts/ListContacts';
import data from '../data/data';
import { TitlePrimary, TitleSecondary, Text } from './App.styled';
import Box from './Box/Box';

const CONTACTS_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem(CONTACTS_KEY);
    if (localData) {
      this.setState({ contacts: JSON.parsel(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts!== prevState.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = ({ name, number }) => {
    const id = nanoid();
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: id, name: name, number: number }],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const list = this.state.contacts.length;

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
            <FormContact onSubmit={this.onSubmit} />
          </Box>

          <TitleSecondary>Contacts</TitleSecondary>
          <FilterContacts value={filter} onChange={this.changeFilter} />
          {list ? (
            <ListContacts
              contacts={this.getContacts()}
              onDelete={this.onDelete}
            />
          ) : (
            <Text>There’s nothing here yet...</Text>
          )}
        </Box>
      </Box>
    );
  }
}
