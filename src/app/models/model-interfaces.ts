export interface Tag {
  label: string;
}
export interface User {
  name?: string;
  email?: string;
}
export interface Products {
  id?: number;
  title?: string;
  description?: string;
  tags?: Tag[];
  favorite?: boolean;
  state?: string;
  assignee?: User;
  genre?: string;
}

export interface Cart {
  id?: number;
  title?: string;
  description?: string;
  tags?: Tag[];
  favorite?: boolean;
  state?: string;
  assignee?: User;
  genre?: string;
}

export const states = ['BACKLOG', 'IN_PROGRESS', 'TEST', 'COMPLETED'];




export const stateGroups = [
  {
    label: 'Planung',
    states: ['BACKLOG']
  },
  {
    label: 'Entwicklung',
    states: ['IN_PROGRESS', 'TEST']
  },
  {
    label: 'In Produktion',
    states: ['COMPLETED']
  }
];

export const stateTexts = {
  'BACKLOG': 'Backlog',
  'IN_PROGRESS': 'In Bearbeitung',
  'TEST': 'Im Test',
  'COMPLETED': 'Abgeschlossen'
};

export const statesAsObjects  = [{ name: 'BACKLOG', text: 'Backlog'},
  { name: 'IN_PROGRESS', text: 'In Bearbeitung'},
  { name: 'TEST', text: 'Test'},
  { name: 'COMPLETED', text: 'Abgeschlossen'}];
