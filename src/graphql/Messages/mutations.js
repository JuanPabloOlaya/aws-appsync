import gql from 'graphql-tag';

const sendMessage = gql`
  mutation sendMessage($message: String!, $messageDate: String!) {
    createMessageModelType(input: {
      message: $message,
      messageDate: $messageDate,
    }) {
      id
      message
      messageDate
    }
  }
`;

export default {
  sendMessage,
};
