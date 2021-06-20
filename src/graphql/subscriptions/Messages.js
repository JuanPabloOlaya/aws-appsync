import gql from 'graphql-tag';

const onCreateMesssage = gql`
  subscription onCreateMessage {
    onCreateMessageModelType {
      id
      message
      messageDate
    }
  }
`;

export default {
  onCreateMesssage,
};
