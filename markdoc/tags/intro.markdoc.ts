import {Intro} from '../../components';

export const intro = {
  render: Intro,
  children: ['paragraph'],
  attributes: {
    title: {
      type: String,
    },
  },
};
